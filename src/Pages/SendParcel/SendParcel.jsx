import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import divisions from "../../assets/data/division.json";
import warehouses from "../../assets/data/warehouses.json";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      parcelType: "document",
    },
  });

  // Prefill sender details if user is logged in
  useEffect(() => {
    if (user?.displayName) {
      setValue("senderName", user.displayName);
    }
    if (user?.phoneNumber) {
      setValue("senderPhone", user.phoneNumber);
    }
  }, [user, setValue]);

  // Watch for dynamic filtering and radio selection
  const senderDivision = watch("senderDivision");
  const receiverDivision = watch("receiverDivision");
  const parcelType = watch("parcelType");

  const getDistricts = (division) => {
    if (!division) return [];
    const filtered = warehouses.filter((w) => w.region === division);
    const districts = [...new Set(filtered.map((w) => w.district))];
    return districts;
  };

  const senderDistricts = getDistricts(senderDivision);
  const receiverDistricts = getDistricts(receiverDivision);

  const calculatePrice = (data) => {
    const { senderDistrict, receiverDistrict, parcelType, weight } = data;
    const isWithinCity = senderDistrict === receiverDistrict;
    let price = 0;
    const parcelWeight = parseFloat(weight) || 0;
    let breakdown = [];

    if (parcelType === "document") {
      price = isWithinCity ? 60 : 80;
      breakdown.push(
        `Base Charge (${isWithinCity ? "Within City" : "Outside City"}): ${price} Taka`,
      );
    } else {
      if (parcelWeight <= 3) {
        price = isWithinCity ? 110 : 150;
        breakdown.push(
          `Base Charge (≤ 3kg, ${isWithinCity ? "Within City" : "Outside City"}): ${price} Taka`,
        );
      } else {
        const extraWeight = Math.ceil(parcelWeight - 3);
        const extraWeightCharge = extraWeight * 40;

        if (isWithinCity) {
          const basePrice = 110;
          price = basePrice + extraWeightCharge;
          breakdown.push(`Base Charge (Within City): ${basePrice} Taka`);
          breakdown.push(
            `Extra Weight Charge (${extraWeight} kg * 40): ${extraWeightCharge} Taka`,
          );
        } else {
          const basePrice = 150;
          const extraCharge = 40;
          price = basePrice + extraWeightCharge + extraCharge;
          breakdown.push(`Base Charge (Outside City): ${basePrice} Taka`);
          breakdown.push(
            `Extra Weight Charge (${extraWeight} kg * 40): ${extraWeightCharge} Taka`,
          );
          breakdown.push(`Additional Service Charge: ${extraCharge} Taka`);
        }
      }
    }
    return { price, breakdown };
  };

  const generateTrackingId = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomPart = "";
    for (let i = 0; i < 4; i++) {
      randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `DXP-2026-${randomPart}`;
  };

  const onSubmit = (data) => {
    const { price, breakdown } = calculatePrice(data);

    // Prepare complete data object
    const orderData = {
      ...data,
      trackingId: generateTrackingId(),
      status: "Pending",
      bookingDate: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      estimatedDeliveryDate: new Date(
        Date.now() + 3 * 24 * 60 * 60 * 1000,
      ).toISOString(), // +3 days
      estimatedCost: price,
      senderId: user?.uid || "guest",
      senderEmail: user?.email || "unknown",
      senderPhoto: user?.photoURL || null,
      userRole: "Basic", // Default role
      clientIp: "127.0.0.1", // Placeholder, needs backend to capture real IP
      priceBreakdown: breakdown,
    };

    Swal.fire({
      title:
        '<h3 class="text-2xl font-bold text-[#002D2D]">Confirm Booking</h3>',
      html: `
        <div class="text-left space-y-2 text-sm">
          <p><strong>Tracking ID:</strong> <span class="text-blue-600">${orderData.trackingId}</span></p>
          <p><strong>Sender:</strong> ${orderData.senderName}</p>
          <p><strong>Receiver:</strong> ${orderData.receiverName}</p>
          <p><strong>Route:</strong> ${orderData.senderDistrict} ➝ ${orderData.receiverDistrict}</p>
          <hr class="my-2"/>
          <p class="font-bold text-[#002D2D]">Cost Breakdown:</p>
          <ul class="list-disc pl-5 text-gray-600">
            ${breakdown.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <p class="text-xl font-bold text-right mt-4 text-[#C1F04C] bg-[#002D2D] p-2 rounded">Total: ${price} Taka</p>
        </div>
      `,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#002D2D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm & Send",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "rounded-[20px]",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Here you would typically send data to backend
        console.log("Final Order Data:", orderData);

        Swal.fire({
          title: "Booking Confirmed!",
          text: `Your parcel with ID ${orderData.trackingId} has been placed successfully.`,
          icon: "success",
          confirmButtonColor: "#002D2D",
        });

        // Optional: Reset form or redirect
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <Toaster />
      <div className="max-w-6xl mx-auto bg-white rounded-[30px] shadow-sm p-8 md:p-12">
        <h2 className="text-[#002D2D] text-3xl font-bold mb-2">
          Send A Parcel
        </h2>
        <h3 className="text-[#002D2D] text-xl font-bold mb-8">
          Enter your parcel details
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Parcel Type Radio */}
          <div className="flex items-center gap-8 mb-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="document"
                {...register("parcelType")}
                className="radio radio-success radio-sm border-2"
              />
              <span
                className={`font-semibold ${parcelType === "document" ? "text-[#002D2D]" : "text-gray-500"}`}
              >
                Document
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="non-document"
                {...register("parcelType")}
                className="radio radio-success radio-sm border-2"
              />
              <span
                className={`font-semibold ${parcelType === "non-document" ? "text-[#002D2D]" : "text-gray-500"}`}
              >
                Not-Document
              </span>
            </label>
          </div>

          {/* Parcel Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">
                Parcel Name
              </label>
              <input
                type="text"
                placeholder="Parcel Name"
                {...register("parcelName", {
                  required: "Parcel name is required",
                })}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-[#C1F04C] transition-colors"
              />
              {errors.parcelName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.parcelName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                step="0.1"
                placeholder="Parcel Weight (KG)"
                {...register("weight", {
                  required: "Weight is required",
                  min: 0.1,
                })}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-[#C1F04C] transition-colors"
              />
              {errors.weight && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.weight.message}
                </p>
              )}
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Sender Column */}
            <div className="space-y-6">
              <h4 className="text-[#002D2D] font-bold text-lg mb-4">
                Sender Details
              </h4>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2">
                  Sender Name
                </label>
                <input
                  type="text"
                  placeholder="Sender Name"
                  {...register("senderName", {
                    required: "Sender name is required",
                  })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-[#C1F04C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("senderAddress", {
                    required: "Address is required",
                  })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-[#C1F04C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2">
                  Sender Phone No
                </label>
                <input
                  type="tel"
                  placeholder="Sender Phone No"
                  {...register("senderPhone", {
                    required: "Phone is required",
                  })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-[#C1F04C] transition-colors"
                />
              </div>

              {/* Division Select (Added for Logic) */}
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2">
                  Your Division
                </label>
                <div className="relative">
                  <select
                    {...register("senderDivision", {
                      required: "Division is required",
                    })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-500 appearance-none focus:outline-none focus:border-[#C1F04C] transition-colors cursor-pointer"
                  >
                    <option value="">Select your Division</option>
                    {divisions.map((div) => (
                      <option key={div} value={div}>
                        {div}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2">
                  Your District
                </label>
                <div className="relative">
                  <select
                    {...register("senderDistrict", {
                      required: "District is required",
                    })}
                    disabled={!senderDivision}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-500 appearance-none focus:outline-none focus:border-[#C1F04C] transition-colors cursor-pointer disabled:bg-gray-50"
                  >
                    <option value="">Select your District</option>
                    {senderDistricts.map((dist) => (
                      <option key={dist} value={dist}>
                        {dist}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2">
                  Pickup Instruction
                </label>
                <textarea
                  rows="3"
                  placeholder="Pickup Instruction"
                  {...register("pickupInstruction")}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-[#C1F04C] transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            {/* Receiver Column */}
            <div className="space-y-6">
              <h4 className="text-[#002D2D] font-bold text-lg mb-4">
                Receiver Details
              </h4>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2">
                  Receiver Name
                </label>
                <input
                  type="text"
                  placeholder="Sender Name"
                  {...register("receiverName", {
                    required: "Receiver name is required",
                  })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-[#C1F04C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2">
                  Receiver Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("receiverAddress", {
                    required: "Address is required",
                  })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-[#C1F04C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2">
                  Receiver Contact No
                </label>
                <input
                  type="tel"
                  placeholder="Sender Contact No"
                  {...register("receiverPhone", {
                    required: "Phone is required",
                  })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-[#C1F04C] transition-colors"
                />
              </div>

              {/* Division Select (Added for Logic) */}
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2">
                  Receiver Division
                </label>
                <div className="relative">
                  <select
                    {...register("receiverDivision", {
                      required: "Division is required",
                    })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-500 appearance-none focus:outline-none focus:border-[#C1F04C] transition-colors cursor-pointer"
                  >
                    <option value="">Select receiver Division</option>
                    {divisions.map((div) => (
                      <option key={div} value={div}>
                        {div}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2">
                  Receiver District
                </label>
                <div className="relative">
                  <select
                    {...register("receiverDistrict", {
                      required: "District is required",
                    })}
                    disabled={!receiverDivision}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-500 appearance-none focus:outline-none focus:border-[#C1F04C] transition-colors cursor-pointer disabled:bg-gray-50"
                  >
                    <option value="">Select your District</option>
                    {receiverDistricts.map((dist) => (
                      <option key={dist} value={dist}>
                        {dist}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-2">
                  Delivery Instruction
                </label>
                <textarea
                  rows="3"
                  placeholder="Delivery Instruction"
                  {...register("deliveryInstruction")}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-[#C1F04C] transition-colors resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-bold text-gray-800 mb-6">
              * PickUp Time 4pm-7pm Approx.
            </p>
            <button
              type="submit"
              className="px-8 py-3 bg-[#C1F04C] hover:bg-[#aee035] text-[#002D2D] font-bold rounded-lg text-sm transition-all duration-200 shadow-sm"
            >
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;

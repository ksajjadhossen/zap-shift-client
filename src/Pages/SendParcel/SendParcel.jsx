import React from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import divisions from "../../assets/data/division.json";
import warehouses from "../../assets/data/warehouses.json";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      parcelType: "document",
    },
  });

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

    if (parcelType === "document") {
      price = isWithinCity ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        price = isWithinCity ? 110 : 150;
      } else {
        const extraWeight = Math.ceil(parcelWeight - 3);
        const extraWeightCharge = extraWeight * 40;
        if (isWithinCity) {
          price = 110 + extraWeightCharge;
        } else {
          price = 150 + extraWeightCharge + 40;
        }
      }
    }
    return price;
  };

  const onSubmit = (data) => {
    const price = calculatePrice(data);
    toast.success(`Estimated Delivery Charge: ${price} Taka`, {
      duration: 5000,
      position: "top-center",
      style: {
        background: "#333",
        color: "#fff",
        fontSize: "18px",
      },
      icon: "💰",
    });
    console.log(data);
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

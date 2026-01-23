import React from "react";
import { useForm } from "react-hook-form";
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

  const onSubmit = (data) => {
    console.log("Parcel Booking Data:", data);
    // Handle form submission logic here
  };

  // Watch divisions to filter districts dynamically
  const senderDivision = watch("senderDivision");
  const receiverDivision = watch("receiverDivision");

  // Filter districts based on selected division
  const getDistricts = (selectedDivision) => {
    if (!selectedDivision) return [];
    return warehouses.filter((warehouse) => warehouse.region === selectedDivision);
  };

  const senderDistricts = getDistricts(senderDivision);
  const receiverDistricts = getDistricts(receiverDivision);

  return (
    <div className="bg-[#F8FDF5] min-h-screen py-10 px-4 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
        <h1 className="text-3xl font-bold text-[#002D2D] mb-8">Send A Parcel</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Section 1: Parcel Details */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-[#002D2D] mb-6">
              Enter your parcel details
            </h2>

            {/* Parcel Type (Radio) */}
            <div className="flex gap-6 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="document"
                  className="radio radio-success radio-sm"
                  {...register("parcelType")}
                />
                <span className="font-semibold text-[#002D2D]">Document</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="not-document"
                  className="radio radio-success radio-sm"
                  {...register("parcelType")}
                />
                <span className="font-semibold text-[#002D2D]">Not-Document</span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Parcel Name */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-[#002D2D]">
                    Parcel Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Parcel Name"
                  className={`input input-bordered w-full bg-white border-gray-200 focus:border-[#C1F04C] focus:outline-none ${
                    errors.parcelName ? "input-error" : ""
                  }`}
                  {...register("parcelName", { required: "Parcel Name is required" })}
                />
                {errors.parcelName && (
                  <span className="text-error text-sm mt-1">
                    {errors.parcelName.message}
                  </span>
                )}
              </div>

              {/* Parcel Weight */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-[#002D2D]">
                    Parcel Weight (KG)
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Parcel Weight (KG)"
                  className={`input input-bordered w-full bg-white border-gray-200 focus:border-[#C1F04C] focus:outline-none ${
                    errors.parcelWeight ? "input-error" : ""
                  }`}
                  {...register("parcelWeight", {
                    required: "Weight is required",
                    min: { value: 0.1, message: "Weight must be greater than 0" },
                  })}
                />
                {errors.parcelWeight && (
                  <span className="text-error text-sm mt-1">
                    {errors.parcelWeight.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Section 2: Sender Details */}
            <div>
              <h2 className="text-lg font-bold text-[#002D2D] mb-4">
                Sender Details
              </h2>
              <div className="space-y-4">
                {/* Sender Name */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-[#002D2D]">
                      Sender Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Sender Name"
                    className="input input-bordered w-full bg-white border-gray-200 focus:border-[#C1F04C] focus:outline-none"
                    {...register("senderName", { required: "Sender Name is required" })}
                  />
                </div>

                {/* Sender Address */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-[#002D2D]">
                      Address
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="input input-bordered w-full bg-white border-gray-200 focus:border-[#C1F04C] focus:outline-none"
                    {...register("senderAddress", { required: "Address is required" })}
                  />
                </div>

                {/* Sender Phone */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-[#002D2D]">
                      Sender Phone No
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Sender Phone No"
                    className="input input-bordered w-full bg-white border-gray-200 focus:border-[#C1F04C] focus:outline-none"
                    {...register("senderPhone", { required: "Phone is required" })}
                  />
                </div>

                {/* Sender Division (New) */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-[#002D2D]">
                      Sender Division
                    </span>
                  </label>
                  <select
                    className="select select-bordered w-full bg-white border-gray-200 focus:border-[#C1F04C] focus:outline-none"
                    {...register("senderDivision", { required: "Division is required" })}
                  >
                    <option value="">Select Division</option>
                    {divisions.map((div, index) => (
                      <option key={index} value={div}>
                        {div}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sender District */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-[#002D2D]">
                      Your District
                    </span>
                  </label>
                  <select
                    className="select select-bordered w-full bg-white border-gray-200 focus:border-[#C1F04C] focus:outline-none"
                    {...register("senderDistrict", { required: "District is required" })}
                    disabled={!senderDivision}
                  >
                    <option value="">Select your District</option>
                    {senderDistricts.map((warehouse, index) => (
                      <option key={index} value={warehouse.district}>
                        {warehouse.district}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Pickup Instruction */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-[#002D2D]">
                      Pickup Instruction
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-24 bg-white border-gray-200 focus:border-[#C1F04C] focus:outline-none resize-none"
                    placeholder="Pickup Instruction"
                    {...register("pickupInstruction")}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Section 3: Receiver Details */}
            <div>
              <h2 className="text-lg font-bold text-[#002D2D] mb-4">
                Receiver Details
              </h2>
              <div className="space-y-4">
                {/* Receiver Name */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-[#002D2D]">
                      Receiver Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Receiver Name"
                    className="input input-bordered w-full bg-white border-gray-200 focus:border-[#C1F04C] focus:outline-none"
                    {...register("receiverName", {
                      required: "Receiver Name is required",
                    })}
                  />
                </div>

                {/* Receiver Address */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-[#002D2D]">
                      Receiver Address
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="input input-bordered w-full bg-white border-gray-200 focus:border-[#C1F04C] focus:outline-none"
                    {...register("receiverAddress", { required: "Address is required" })}
                  />
                </div>

                {/* Receiver Contact */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-[#002D2D]">
                      Receiver Contact No
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Receiver Contact No"
                    className="input input-bordered w-full bg-white border-gray-200 focus:border-[#C1F04C] focus:outline-none"
                    {...register("receiverContact", { required: "Contact is required" })}
                  />
                </div>

                {/* Receiver Division (New) */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-[#002D2D]">
                      Receiver Division
                    </span>
                  </label>
                  <select
                    className="select select-bordered w-full bg-white border-gray-200 focus:border-[#C1F04C] focus:outline-none"
                    {...register("receiverDivision", {
                      required: "Division is required",
                    })}
                  >
                    <option value="">Select Division</option>
                    {divisions.map((div, index) => (
                      <option key={index} value={div}>
                        {div}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Receiver District */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-[#002D2D]">
                      Receiver District
                    </span>
                  </label>
                  <select
                    className="select select-bordered w-full bg-white border-gray-200 focus:border-[#C1F04C] focus:outline-none"
                    {...register("receiverDistrict", {
                      required: "District is required",
                    })}
                    disabled={!receiverDivision}
                  >
                    <option value="">Select your District</option>
                    {receiverDistricts.map((warehouse, index) => (
                      <option key={index} value={warehouse.district}>
                        {warehouse.district}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Delivery Instruction */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-[#002D2D]">
                      Delivery Instruction
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-24 bg-white border-gray-200 focus:border-[#C1F04C] focus:outline-none resize-none"
                    placeholder="Delivery Instruction"
                    {...register("deliveryInstruction")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-6">
              * PickUp Time 4pm-7pm Approx.
            </p>
            <button
              type="submit"
              className="btn bg-[#C1F04C] hover:bg-[#b0e03c] text-[#002D2D] font-bold px-8 normal-case rounded-lg"
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

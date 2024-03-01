const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    // 
    organisation: {
      type: String,
      required: true,
    },
    //
    name: {
      type: String,
      required: true,
    },
    //
    organDetail: {
      type: String,
      required: true,
    },
    hospitalRegistrationNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    assistingDoctor: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    feePerCunsultation: {
      type: Number,
      required: true,
    },
    timings : {
      type: Array,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    }
  },
  {
    timestamps: true,
  }
);

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;

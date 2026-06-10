import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema(
  {
    certificateId: {
      type: String,
      required: true,
      unique: true,
    },

    owner: String,

    trustScore: Number,

    decision: String,

    blockchainHash: String,

    status: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Certificate ||
  mongoose.model(
    "Certificate",
    CertificateSchema
  );
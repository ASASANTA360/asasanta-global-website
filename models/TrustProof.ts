import mongoose from "mongoose";

const TrustProofSchema = new mongoose.Schema(
  {
    proofId: {
      type: String,
      required: true,
      unique: true,
    },

    userId: String,

    status: String,

    metadata: Object,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.TrustProof ||
  mongoose.model("TrustProof", TrustProofSchema);
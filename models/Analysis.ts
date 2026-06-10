import mongoose from "mongoose";

const AnalysisSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    identityScore: Number,

    trustScore: Number,

    fraudScore: Number,

    decision: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Analysis ||
  mongoose.model("Analysis", AnalysisSchema);
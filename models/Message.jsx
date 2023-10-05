import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);

//Jeśli kolekcja Message nie istnieje, utwórz nową.
export default mongoose.models.Messages || mongoose.model("Messages", messageSchema);
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    uname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmpassword: {
      type: String,
      required: true,
    },
    emailid: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  console.log("pre method called");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, bcrypt.genSaltSync(10));
    this.confirmpassword = await bcrypt.hash(this.confirmpassword,bcrypt.genSaltSync(10));
  }
  next();
});

const user = mongoose.model("User", UserSchema);

export default user;

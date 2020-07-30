//@ts-check
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Every user has an email and password.  The password is not stored as
// plain text - see the authentication helpers below.
const UserSchema = new Schema({
  email: String,
  password: String,
});

// The user's password is never saved in plain text.  Prior to saving the
// user model, we 'salt' and 'hash' the users password.  This is a one way
// procedure that modifies the password - the plain text password cannot be
// derived from the salted + hashed version. See 'comparePassword' to understand
// how this is used.
UserSchema.pre("save", async function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    // @ts-ignore
    const hash = await bcrypt.hash(user.password, salt, null);
    // @ts-ignore
    user.password = hash;
    next();
  } catch (err) {
    next(err);
  }
});

// We need to compare the plain text password (submitted whenever logging in)
// with the salted + hashed version that is sitting in the database.
// 'bcrypt.compare' takes the plain text password and hashes it, then compares
// that hashed password to the one stored in the DB.  Remember that hashing is
// a one way process - the passwords are never compared in plain text form.
UserSchema.methods.comparePassword = async function comparePassword(
  candidatePassword,
  cb
) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    cb(null, isMatch);
  } catch (err) {
    cb(err);
  }
};

mongoose.model("user", UserSchema);

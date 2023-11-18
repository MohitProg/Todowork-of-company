const usermodal = require("../modal/user");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

// signup user and creating a new user ;

const signupuser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name) {
    return res.send({ success: true, msg: "name is required" });
  }
  if (!email) {
    return res.send({ success: true, msg: "name is required" });
  }
  if (![password]) {
    return res.send({ success: true, msg: "name is required" });
  }

  try {
    // checking existing user
    const existuser = await usermodal.findOne({ email: email });
    console.log(existuser);
    if (existuser) {
      return res.send({ success: false, msg: "thank youexist" });
    }

    // hash the password

    const hashpassword = await bcrypt.hash(password, 10);
    console.log(hashpassword);
    // new user
    const newuser = new usermodal({
      name,
      password: hashpassword,
      email,
    });

    await newuser.save();

    //  create a new token
    const authtoken = jsonwebtoken.sign(
      { id: newuser.id },
      "thisismysocialmediapp"
    );
    console.log(authtoken);
    // send the message
    return res.send({
      success: true,
      msg: "user register sucessfully",
      newuser,
      authtoken,
    });
  } catch (error) {
    console.log(error);
    return res.send({ success: false, msg: "Internal Server Error" });
  }
};

// login
const Loginuser = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.send({ success: true, msg: "name is required" });
  }
  if (![password]) {
    return res.send({ success: true, msg: "name is required" });
  }
  try {
    // checking existing user
    const userexit = await usermodal.findOne({ email: email });
    if (!userexit) {
      return res.send({ success: false, msg: "user doesnot exist " });
    }

    // verfy the password

    const passwordverufy = await bcrypt.compare(password, userexit.password);

    if (!passwordverufy) {
      return res.send({ success: false, msg: "please check your password " });
    }

    const authtoken = jsonwebtoken.sign(
      { id: userexit.id },
      "thisismysocialmediapp"
    );

    return res.send({
      success: true,
      msg: "User login Successfully ",
      authtoken,
    });
  } catch (error) {
    console.log(error);
  }
};

// get user

const Getuser = async (req, res) => {
  console.log(req.newuser.id);
  const id = req.newuser.id;

  try {
    const getuser = await usermodal.findById(id).select("-password");
    console.log(getuser);

    return res.send({ success: true, getuser });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signupuser, Loginuser, Getuser };

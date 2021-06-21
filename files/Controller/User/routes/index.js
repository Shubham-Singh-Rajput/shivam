const app = require("express").Router();
import userLogin from "../controller/Login";
import UserSignUp from "./../controller/Signup";
import userProfile from "./../controller/showProfile";
import auth from "./../../auth";
import Medicine from './../controller/MedicineDetail';
import Cart from './../controller/Cart';
import Buy from './../controller/buy';
import order from './../controller/order';

const upload = async (req, resp, next) => {
  //multer code
};
app.post("/signup", upload, UserSignUp.PostSignUpUser);
app.post("/login", userLogin.postUserLogin);
app.get("/profile", auth.userValidation, userProfile.ShowProfile);
app.post("/updateprofile", auth.userValidation,upload, userProfile.changeProfile);
app.get("/medicine/detail/:id", auth.userValidation,Medicine.medicineDetail);
app.post("/add/medicine/cart/:id",auth.userValidation,Cart.AddingMedicineCart)
app.get("/show/Allmedicine/cart",auth.userValidation,Cart.showcartItems)
app.post("/remove/medicine/cart/:id",auth.userValidation,Cart.removeMedicinecart)
app.post("/buy/medicine/:cart/:medicine",auth.userValidation,Buy.BUY_MEDICINE)
app.get("/odered/recipt/:id",auth.userValidation,order.billOrder)
app.get('/all/orders',auth.userValidation,order.allOrders)

export default app;

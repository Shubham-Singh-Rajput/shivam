const app=require('express').Router()
import ShoapkeperSignup from './../controller/Signup';
import shoapkeprLogin from './../controller/Login';
import shoapkeperProfile from './../controller/showProfile'
import auth from './../../auth'
import medicine from './../controller/Addmedicine'
import singleShopkeperMedicine from './../controller/oneShopkepeprMedicine';

const upload = async (req, resp, next) => {
    // write multer code
  };
  const medicineImage = async (req, resp, next) => {
  //  write multer code
  };

app.post('/signup',upload,ShoapkeperSignup.PostSignUpUser)
app.post('/login',shoapkeprLogin.postshoapKeprLogin)
app.get('/profile',auth.Shoapkepervalidation,shoapkeperProfile.ShowProfile)
app.post('/updateprofile',auth.Shoapkepervalidation,upload,shoapkeperProfile.changeProfile)
app.post('/addmedicine',auth.Shoapkepervalidation,medicineImage,medicine.addMedicine)
app.get('/allmedicine',medicine.showmedicine)
app.get('/single/allmedicine',auth.Shoapkepervalidation,singleShopkeperMedicine.detailOfMedicine)
app.post('/update/medicine/:id',auth.Shoapkepervalidation,singleShopkeperMedicine.editMedicine)
export default app

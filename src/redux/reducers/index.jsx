import { combineReducers } from "redux";
import auth from "./authReducer";
import user from "./userReducer";
import option from "./optionReducer";
import category from "./categoryReducer";
import post from "./postReducer";
import bacsi from "./bacsiReducer";
import khoa from "./khoaReducer";
import benhnhan from "./benhnhanReducer";
import pdkkb from "./pdkkbReducer";
import pxnv from "./pxnvReducer";
import lephi from "./lephiReducer";
import vienphi from "./vienphiReducer";
import phieuxetnghiem from "./phieuxetnghiemReducer";
import phieukhambenh from "./phieukhambenhReducer";
import thuoc from "./thuocReducer";

const rootReducer = combineReducers({
  auth,
  user,
  option,
  category,
  post,
  bacsi,
  khoa,
  benhnhan,
  pdkkb,
  pxnv,
  lephi,
  vienphi,
  phieuxetnghiem,
  phieukhambenh,
  thuoc,
});

export default rootReducer;

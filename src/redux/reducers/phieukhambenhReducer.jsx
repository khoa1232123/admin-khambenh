import { phieukhambenhTypes } from "../types";

const initialState = {
  phieukhambenhs: [],
  phieukhambenh: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case phieukhambenhTypes.GET_PHIEUKHAMBENHS_START:
      return {
        phieukhambenhs: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case phieukhambenhTypes.GET_PHIEUKHAMBENHS_SUCCESS:
      return {
        phieukhambenhs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case phieukhambenhTypes.GET_PHIEUKHAMBENHS_FAILURE:
      return {
        phieukhambenhs: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case phieukhambenhTypes.GET_PHIEUKHAMBENH_START:
      return {
        phieukhambenh: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case phieukhambenhTypes.GET_PHIEUKHAMBENH_SUCCESS:
      return {
        phieukhambenh: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case phieukhambenhTypes.GET_PHIEUKHAMBENH_FAILURE:
      return {
        phieukhambenh: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case phieukhambenhTypes.GET_PHIEUKHAMBENHBYBENHNHAN_START:
      return {
        phieukhambenhs: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case phieukhambenhTypes.GET_PHIEUKHAMBENHBYBENHNHAN_SUCCESS:
      return {
        phieukhambenhs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case phieukhambenhTypes.GET_PHIEUKHAMBENHBYBENHNHAN_FAILURE:
      return {
        phieukhambenhs: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };
    case phieukhambenhTypes.CREATE_PHIEUKHAMBENH_START:
      return {
        phieukhambenh: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case phieukhambenhTypes.CREATE_PHIEUKHAMBENH_SUCCESS:
      console.log(state);
      return {
        phieukhambenhs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case phieukhambenhTypes.CREATE_PHIEUKHAMBENH_FAILURE:
      return {
        phieukhambenh: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case phieukhambenhTypes.UPDATE_PHIEUKHAMBENH_START:
      return {
        phieukhambenh: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case phieukhambenhTypes.UPDATE_PHIEUKHAMBENH_SUCCESS:
      return {
        phieukhambenhs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case phieukhambenhTypes.UPDATE_PHIEUKHAMBENH_FAILURE:
      return {
        phieukhambenh: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case phieukhambenhTypes.DELETE_PHIEUKHAMBENH_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case phieukhambenhTypes.DELETE_PHIEUKHAMBENH_SUCCESS:
      return {
        phieukhambenhs: payload,
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case phieukhambenhTypes.DELETE_PHIEUKHAMBENH_FAILURE:
      return {
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };
    default:
      return state;
  }
};

export default reducer;

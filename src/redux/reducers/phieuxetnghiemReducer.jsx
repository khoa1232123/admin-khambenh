import { phieuxetnghiemTypes } from "../types";

const initialState = {
  phieuxetnghiems: [],
  phieuxetnghiem: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case phieuxetnghiemTypes.GET_PHIEUXETNGHIEMS_START:
      return {
        phieuxetnghiems: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case phieuxetnghiemTypes.GET_PHIEUXETNGHIEMS_SUCCESS:
      return {
        phieuxetnghiems: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case phieuxetnghiemTypes.GET_PHIEUXETNGHIEMS_FAILURE:
      return {
        phieuxetnghiems: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case phieuxetnghiemTypes.GET_PHIEUXETNGHIEM_START:
      return {
        phieuxetnghiem: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case phieuxetnghiemTypes.GET_PHIEUXETNGHIEM_SUCCESS:
      return {
        phieuxetnghiem: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case phieuxetnghiemTypes.GET_PHIEUXETNGHIEM_FAILURE:
      return {
        phieuxetnghiem: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case phieuxetnghiemTypes.GET_BNPHIEUXETNGHIEM_START:
      return {
        phieuxetnghiems: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case phieuxetnghiemTypes.GET_BNPHIEUXETNGHIEM_SUCCESS:
      return {
        phieuxetnghiems: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case phieuxetnghiemTypes.GET_BNPHIEUXETNGHIEM_FAILURE:
      return {
        phieuxetnghiems: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case phieuxetnghiemTypes.CREATE_PHIEUXETNGHIEM_START:
      return {
        phieuxetnghiem: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case phieuxetnghiemTypes.CREATE_PHIEUXETNGHIEM_SUCCESS:
      console.log(state);
      return {
        phieuxetnghiems: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case phieuxetnghiemTypes.CREATE_PHIEUXETNGHIEM_FAILURE:
      return {
        phieuxetnghiem: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case phieuxetnghiemTypes.UPDATE_PHIEUXETNGHIEM_START:
      return {
        phieuxetnghiem: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case phieuxetnghiemTypes.UPDATE_PHIEUXETNGHIEM_SUCCESS:
      return {
        phieuxetnghiems: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case phieuxetnghiemTypes.UPDATE_PHIEUXETNGHIEM_FAILURE:
      return {
        phieuxetnghiem: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case phieuxetnghiemTypes.DELETE_PHIEUXETNGHIEM_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case phieuxetnghiemTypes.DELETE_PHIEUXETNGHIEM_SUCCESS:
      return {
        phieuxetnghiems: payload,
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case phieuxetnghiemTypes.DELETE_PHIEUXETNGHIEM_FAILURE:
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

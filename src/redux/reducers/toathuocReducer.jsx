import { toathuocTypes } from "../types";

const initialState = {
  toathuocs: [],
  toathuoc: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case toathuocTypes.GET_TOATHUOCS_START:
      return {
        toathuocs: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case toathuocTypes.GET_TOATHUOCS_SUCCESS:
      return {
        toathuocs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case toathuocTypes.GET_TOATHUOCS_FAILURE:
      return {
        toathuocs: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case toathuocTypes.GET_TOATHUOC_START:
      return {
        toathuoc: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case toathuocTypes.GET_TOATHUOC_SUCCESS:
      return {
        toathuoc: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case toathuocTypes.GET_TOATHUOC_FAILURE:
      return {
        toathuoc: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case toathuocTypes.CREATE_TOATHUOC_START:
      return {
        toathuoc: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case toathuocTypes.CREATE_TOATHUOC_SUCCESS:
      console.log(state);
      return {
        toathuocs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case toathuocTypes.CREATE_TOATHUOC_FAILURE:
      return {
        toathuoc: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case toathuocTypes.UPDATE_TOATHUOC_START:
      return {
        toathuoc: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case toathuocTypes.UPDATE_TOATHUOC_SUCCESS:
      return {
        toathuocs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case toathuocTypes.UPDATE_TOATHUOC_FAILURE:
      return {
        toathuoc: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case toathuocTypes.DELETE_TOATHUOC_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case toathuocTypes.DELETE_TOATHUOC_SUCCESS:
      return {
        toathuocs: payload,
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case toathuocTypes.DELETE_TOATHUOC_FAILURE:
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

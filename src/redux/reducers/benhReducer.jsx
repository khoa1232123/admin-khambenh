import { benhTypes } from "../types";

const initialState = {
  benhs: [],
  benh: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case benhTypes.GET_BENHS_START:
      return {
        benhs: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case benhTypes.GET_BENHS_SUCCESS:
      return {
        benhs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case benhTypes.GET_BENHS_FAILURE:
      return {
        benhs: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case benhTypes.GET_BENH_START:
      return {
        benh: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case benhTypes.GET_BENH_SUCCESS:
      return {
        benh: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case benhTypes.GET_BENH_FAILURE:
      return {
        benh: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case benhTypes.CREATE_BENH_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case benhTypes.CREATE_BENH_SUCCESS:
      return {
        benhs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case benhTypes.CREATE_BENH_FAILURE:
      return {
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case benhTypes.UPDATE_BENH_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case benhTypes.UPDATE_BENH_SUCCESS:
      return {
        benhs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case benhTypes.UPDATE_BENH_FAILURE:
      return {
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };
    case benhTypes.DELETE_BENH_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case benhTypes.DELETE_BENH_SUCCESS:
      return {
        benhs: payload,
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case benhTypes.DELETE_BENH_FAILURE:
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

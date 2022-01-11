import { chitietphieukhamTypes } from "../types";

const initialState = {
  chitietphieukhams: [],
  chitietphieukham: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case chitietphieukhamTypes.GET_CHITIETPHIEUKHAMS_START:
      return {
        chitietphieukhams: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case chitietphieukhamTypes.GET_CHITIETPHIEUKHAMS_SUCCESS:
      return {
        chitietphieukhams: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case chitietphieukhamTypes.GET_CHITIETPHIEUKHAMS_FAILURE:
      return {
        chitietphieukhams: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case chitietphieukhamTypes.GET_CHITIETPHIEUKHAM_START:
      return {
        chitietphieukham: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case chitietphieukhamTypes.GET_CHITIETPHIEUKHAM_SUCCESS:
      return {
        chitietphieukham: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case chitietphieukhamTypes.GET_CHITIETPHIEUKHAM_FAILURE:
      return {
        chitietphieukham: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case chitietphieukhamTypes.GET_PKCHITIETPHIEUKHAM_START:
      return {
        chitietphieukham: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case chitietphieukhamTypes.GET_PKCHITIETPHIEUKHAM_SUCCESS:
      return {
        chitietphieukham: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case chitietphieukhamTypes.GET_PKCHITIETPHIEUKHAM_FAILURE:
      return {
        chitietphieukham: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case chitietphieukhamTypes.GET_BSCHITIETPHIEUKHAM_START:
      return {
        chitietphieukhams: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case chitietphieukhamTypes.GET_BSCHITIETPHIEUKHAM_SUCCESS:
      return {
        chitietphieukhams: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case chitietphieukhamTypes.GET_BSCHITIETPHIEUKHAM_FAILURE:
      return {
        chitietphieukhams: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case chitietphieukhamTypes.CREATE_CHITIETPHIEUKHAM_START:
      return {
        chitietphieukham: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case chitietphieukhamTypes.CREATE_CHITIETPHIEUKHAM_SUCCESS:
      console.log(state);
      return {
        chitietphieukhams: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case chitietphieukhamTypes.CREATE_CHITIETPHIEUKHAM_FAILURE:
      return {
        chitietphieukham: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case chitietphieukhamTypes.UPDATE_CHITIETPHIEUKHAM_START:
      return {
        chitietphieukham: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case chitietphieukhamTypes.UPDATE_CHITIETPHIEUKHAM_SUCCESS:
      return {
        chitietphieukhams: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case chitietphieukhamTypes.UPDATE_CHITIETPHIEUKHAM_FAILURE:
      return {
        chitietphieukham: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case chitietphieukhamTypes.UPDATE_TTCHITIETPHIEUKHAM_START:
      return {
        chitietphieukham: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case chitietphieukhamTypes.UPDATE_TTCHITIETPHIEUKHAM_SUCCESS:
      return {
        chitietphieukham: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case chitietphieukhamTypes.UPDATE_TTCHITIETPHIEUKHAM_FAILURE:
      return {
        chitietphieukham: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case chitietphieukhamTypes.UPDATE_DTCHITIETPHIEUKHAM_START:
      return {
        chitietphieukham: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case chitietphieukhamTypes.UPDATE_DTCHITIETPHIEUKHAM_SUCCESS:
      return {
        chitietphieukham: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case chitietphieukhamTypes.UPDATE_DTCHITIETPHIEUKHAM_FAILURE:
      return {
        chitietphieukham: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case chitietphieukhamTypes.DELETE_CHITIETPHIEUKHAM_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case chitietphieukhamTypes.DELETE_CHITIETPHIEUKHAM_SUCCESS:
      return {
        chitietphieukhams: payload,
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case chitietphieukhamTypes.DELETE_CHITIETPHIEUKHAM_FAILURE:
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

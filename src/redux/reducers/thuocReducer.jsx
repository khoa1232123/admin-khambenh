import { thuocTypes } from "../types";

const initialState = {
  thuocs: [],
  thuoc: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case thuocTypes.GET_THUOCS_START:
      return {
        thuocs: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case thuocTypes.GET_THUOCS_SUCCESS:
      return {
        thuocs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case thuocTypes.GET_THUOCS_FAILURE:
      return {
        thuocs: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case thuocTypes.GET_THUOC_START:
      return {
        thuoc: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case thuocTypes.GET_THUOC_SUCCESS:
      return {
        thuoc: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case thuocTypes.GET_THUOC_FAILURE:
      return {
        thuoc: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case thuocTypes.CREATE_THUOC_START:
      return {
        thuoc: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case thuocTypes.CREATE_THUOC_SUCCESS:
      console.log(state);
      return {
        thuocs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case thuocTypes.CREATE_THUOC_FAILURE:
      return {
        thuoc: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case thuocTypes.UPDATE_THUOC_START:
      return {
        thuoc: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case thuocTypes.UPDATE_THUOC_SUCCESS:
      return {
        thuocs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case thuocTypes.UPDATE_THUOC_FAILURE:
      return {
        thuoc: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case thuocTypes.DELETE_THUOC_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case thuocTypes.DELETE_THUOC_SUCCESS:
      return {
        thuocs: payload,
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case thuocTypes.DELETE_THUOC_FAILURE:
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

import { vienphiTypes } from "../types";

const initialState = {
  vienphis: [],
  vienphi: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case vienphiTypes.GET_VIENPHIS_START:
      return {
        vienphis: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case vienphiTypes.GET_VIENPHIS_SUCCESS:
      return {
        vienphis: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case vienphiTypes.GET_VIENPHIS_FAILURE:
      return {
        vienphis: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case vienphiTypes.GET_VIENPHI_START:
      return {
        vienphi: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case vienphiTypes.GET_VIENPHI_SUCCESS:
      return {
        vienphi: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case vienphiTypes.GET_VIENPHI_FAILURE:
      return {
        vienphi: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case vienphiTypes.CREATE_VIENPHI_START:
      return {
        vienphi: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case vienphiTypes.CREATE_VIENPHI_SUCCESS:
      console.log(state);
      return {
        vienphis: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case vienphiTypes.CREATE_VIENPHI_FAILURE:
      return {
        vienphi: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case vienphiTypes.UPDATE_VIENPHI_START:
      return {
        vienphi: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case vienphiTypes.UPDATE_VIENPHI_SUCCESS:
      return {
        vienphis: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case vienphiTypes.UPDATE_VIENPHI_FAILURE:
      return {
        vienphi: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case vienphiTypes.DELETE_VIENPHI_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case vienphiTypes.DELETE_VIENPHI_SUCCESS:
      return {
        vienphis: payload,
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case vienphiTypes.DELETE_VIENPHI_FAILURE:
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

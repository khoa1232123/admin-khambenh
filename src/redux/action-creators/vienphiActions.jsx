import axios from "src/helpers/axios";
import { vienphiTypes } from "../types";

// Get All Posts
const getVienphisStart = () => ({
  type: vienphiTypes.GET_VIENPHIS_START,
});

const getVienphisSuccess = (vienphis) => ({
  type: vienphiTypes.GET_VIENPHIS_SUCCESS,
  payload: vienphis,
});

const getVienphisFailure = () => ({
  type: vienphiTypes.GET_VIENPHIS_FAILURE,
});

const getVienphis = () => {
  return async (dispatch) => {
    dispatch(getVienphisStart());
    try {
      const res = await axios.get("/vienphi");

      console.log(res.data);

      dispatch(getVienphisSuccess(res.data));
    } catch (error) {
      dispatch(getVienphisFailure());
    }
  };
};

// Get One Post
const getVienphiStart = () => ({
  type: vienphiTypes.GET_VIENPHI_START,
});

const getVienphiSuccess = (vienphi) => ({
  type: vienphiTypes.GET_VIENPHI_SUCCESS,
  payload: vienphi,
});

const getVienphiFailure = () => ({
  type: vienphiTypes.GET_VIENPHI_FAILURE,
});

const getVienphi = (id) => {
  return async (dispatch) => {
    dispatch(getVienphiStart());
    try {
      const res = await axios.get("/vienphi/" + id);

      dispatch(getVienphiSuccess(res.data));
    } catch (error) {
      dispatch(getVienphiFailure());
    }
  };
};

// Create Post
const createVienphiStart = () => ({
  type: vienphiTypes.CREATE_VIENPHI_START,
});

const createVienphiSuccess = (vienphis) => ({
  type: vienphiTypes.CREATE_VIENPHI_SUCCESS,
  payload: vienphis,
});

const createVienphiFailure = () => ({
  type: vienphiTypes.CREATE_VIENPHI_FAILURE,
});

const createVienphi = (vienphi) => {
  return async (dispatch, getState) => {
    const {
      vienphi: { vienphis },
    } = getState();
    console.log(getState());
    dispatch(createVienphiStart());
    try {
      const res = await axios.post("/vienphi", vienphi);
      console.log(res);

      dispatch(createVienphiSuccess([res.data, ...vienphis]));
    } catch (error) {
      dispatch(createVienphiFailure());
    }
  };
};

// Create Post
const deleteVienphiStart = () => ({
  type: vienphiTypes.DELETE_VIENPHI_START,
});

const deleteVienphiSuccess = (vienphis) => ({
  type: vienphiTypes.DELETE_VIENPHI_SUCCESS,
  payload: vienphis,
});

const deleteVienphiFailure = () => ({
  type: vienphiTypes.DELETE_VIENPHI_FAILURE,
});

const deleteVienphi = (vienphi) => {
  return async (dispatch, getState) => {
    const {
      vienphi: { vienphis },
    } = getState();
    dispatch(deleteVienphiStart());
    try {
      await axios.delete("/vienphi/" + vienphi._id);
      const newvienphis = vienphis.filter((item) => item._id !== vienphi._id);
      dispatch(deleteVienphiSuccess(newvienphis));
    } catch (error) {
      console.log("looix");
      dispatch(deleteVienphiFailure());
    }
  };
};

// Update Post
const updateVienphiStart = () => ({
  type: vienphiTypes.UPDATE_VIENPHI_START,
});

const updateVienphiSuccess = (vienphis) => ({
  type: vienphiTypes.UPDATE_VIENPHI_SUCCESS,
  payload: vienphis,
});

const updateVienphiFailure = () => ({
  type: vienphiTypes.UPDATE_VIENPHI_FAILURE,
});

const updateVienphi = (vienphi) => {
  console.log(vienphi);
  return async (dispatch, getState) => {
    const {
      vienphi: { vienphis },
    } = getState();
    dispatch(updateVienphiStart());
    try {
      const res = await axios.put("/vienphi/" + vienphi._id, vienphi);

      let index = vienphis.findIndex((item) => item._id === vienphi._id);
      vienphis[index] = res.data;

      dispatch(updateVienphiSuccess(vienphis));
    } catch (error) {
      dispatch(updateVienphiFailure());
    }
  };
};

export { getVienphis, createVienphi, deleteVienphi, updateVienphi, getVienphi };

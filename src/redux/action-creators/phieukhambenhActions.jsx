import axios from "src/helpers/axios";
import { phieukhambenhTypes } from "../types";

// Get All Posts
const getPhieukhambenhsStart = () => ({
  type: phieukhambenhTypes.GET_PHIEUKHAMBENHS_START,
});

const getPhieukhambenhsSuccess = (phieukhambenhs) => ({
  type: phieukhambenhTypes.GET_PHIEUKHAMBENHS_SUCCESS,
  payload: phieukhambenhs,
});

const getPhieukhambenhsFailure = () => ({
  type: phieukhambenhTypes.GET_PHIEUKHAMBENHS_FAILURE,
});

const getPhieukhambenhs = () => {
  return async (dispatch) => {
    dispatch(getPhieukhambenhsStart());
    try {
      const res = await axios.get("/phieukhambenh");

      console.log(res.data);

      dispatch(getPhieukhambenhsSuccess(res.data));
    } catch (error) {
      dispatch(getPhieukhambenhsFailure());
    }
  };
};

// Get One Post
const getPhieukhambenhStart = () => ({
  type: phieukhambenhTypes.GET_PHIEUKHAMBENH_START,
});

const getPhieukhambenhSuccess = (phieukhambenh) => ({
  type: phieukhambenhTypes.GET_PHIEUKHAMBENH_SUCCESS,
  payload: phieukhambenh,
});

const getPhieukhambenhFailure = () => ({
  type: phieukhambenhTypes.GET_PHIEUKHAMBENH_FAILURE,
});

const getPhieukhambenh = (id) => {
  return async (dispatch) => {
    dispatch(getPhieukhambenhStart());
    try {
      const res = await axios.get("/phieukhambenh/" + id);

      dispatch(getPhieukhambenhSuccess(res.data));
    } catch (error) {
      dispatch(getPhieukhambenhFailure());
    }
  };
};

// Create Post
const createPhieukhambenhStart = () => ({
  type: phieukhambenhTypes.CREATE_PHIEUKHAMBENH_START,
});

const createPhieukhambenhSuccess = (phieukhambenhs) => ({
  type: phieukhambenhTypes.CREATE_PHIEUKHAMBENH_SUCCESS,
  payload: phieukhambenhs,
});

const createPhieukhambenhFailure = () => ({
  type: phieukhambenhTypes.CREATE_PHIEUKHAMBENH_FAILURE,
});

const createPhieukhambenh = (phieukhambenh) => {
  return async (dispatch, getState) => {
    const {
      phieukhambenh: { phieukhambenhs },
    } = getState();
    console.log(getState());
    dispatch(createPhieukhambenhStart());
    try {
      const res = await axios.post("/phieukhambenh", phieukhambenh);
      console.log(res);

      dispatch(createPhieukhambenhSuccess([res.data, ...phieukhambenhs]));
    } catch (error) {
      dispatch(createPhieukhambenhFailure());
    }
  };
};

// Create Post
const deletePhieukhambenhStart = () => ({
  type: phieukhambenhTypes.DELETE_PHIEUKHAMBENH_START,
});

const deletePhieukhambenhSuccess = (phieukhambenhs) => ({
  type: phieukhambenhTypes.DELETE_PHIEUKHAMBENH_SUCCESS,
  payload: phieukhambenhs,
});

const deletePhieukhambenhFailure = () => ({
  type: phieukhambenhTypes.DELETE_PHIEUKHAMBENH_FAILURE,
});

const deletePhieukhambenh = (phieukhambenh) => {
  return async (dispatch, getState) => {
    const {
      phieukhambenh: { phieukhambenhs },
    } = getState();
    dispatch(deletePhieukhambenhStart());
    try {
      await axios.delete("/phieukhambenh/" + phieukhambenh._id);
      const newphieukhambenhs = phieukhambenhs.filter(
        (item) => item._id !== phieukhambenh._id
      );
      dispatch(deletePhieukhambenhSuccess(newphieukhambenhs));
    } catch (error) {
      console.log("looix");
      dispatch(deletePhieukhambenhFailure());
    }
  };
};

// Update Post
const updatePhieukhambenhStart = () => ({
  type: phieukhambenhTypes.UPDATE_PHIEUKHAMBENH_START,
});

const updatePhieukhambenhSuccess = (phieukhambenhs) => ({
  type: phieukhambenhTypes.UPDATE_PHIEUKHAMBENH_SUCCESS,
  payload: phieukhambenhs,
});

const updatePhieukhambenhFailure = () => ({
  type: phieukhambenhTypes.UPDATE_PHIEUKHAMBENH_FAILURE,
});

const updatePhieukhambenh = (phieukhambenh) => {
  console.log(phieukhambenh);
  return async (dispatch, getState) => {
    const {
      phieukhambenh: { phieukhambenhs },
    } = getState();
    dispatch(updatePhieukhambenhStart());
    try {
      const res = await axios.put(
        "/phieukhambenh/" + phieukhambenh._id,
        phieukhambenh
      );

      let index = phieukhambenhs.findIndex(
        (item) => item._id === phieukhambenh._id
      );
      phieukhambenhs[index] = res.data;

      dispatch(updatePhieukhambenhSuccess(phieukhambenhs));
    } catch (error) {
      dispatch(updatePhieukhambenhFailure());
    }
  };
};

export {
  getPhieukhambenhs,
  createPhieukhambenh,
  deletePhieukhambenh,
  updatePhieukhambenh,
  getPhieukhambenh,
};

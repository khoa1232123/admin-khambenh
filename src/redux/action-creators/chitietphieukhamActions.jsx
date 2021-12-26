import axios from "src/helpers/axios";
import { chitietphieukhamTypes } from "../types";

// Get All Posts
const getChitietphieukhamsStart = () => ({
  type: chitietphieukhamTypes.GET_CHITIETPHIEUKHAMS_START,
});

const getChitietphieukhamsSuccess = (chitietphieukhams) => ({
  type: chitietphieukhamTypes.GET_CHITIETPHIEUKHAMS_SUCCESS,
  payload: chitietphieukhams,
});

const getChitietphieukhamsFailure = () => ({
  type: chitietphieukhamTypes.GET_CHITIETPHIEUKHAMS_FAILURE,
});

const getChitietphieukhams = () => {
  return async (dispatch) => {
    dispatch(getChitietphieukhamsStart());
    try {
      const res = await axios.get("/phieuxuatnhapvien");

      console.log(res.data);

      dispatch(getChitietphieukhamsSuccess(res.data));
    } catch (error) {
      dispatch(getChitietphieukhamsFailure());
    }
  };
};

// Get One Post
const getChitietphieukhamStart = () => ({
  type: chitietphieukhamTypes.GET_CHITIETPHIEUKHAM_START,
});

const getChitietphieukhamSuccess = (chitietphieukham) => ({
  type: chitietphieukhamTypes.GET_CHITIETPHIEUKHAM_SUCCESS,
  payload: chitietphieukham,
});

const getChitietphieukhamFailure = () => ({
  type: chitietphieukhamTypes.GET_CHITIETPHIEUKHAM_FAILURE,
});

const getChitietphieukham = (id) => {
  return async (dispatch) => {
    dispatch(getChitietphieukhamStart());
    try {
      const res = await axios.get("/phieuxuatnhapvien/" + id);

      dispatch(getChitietphieukhamSuccess(res.data));
    } catch (error) {
      dispatch(getChitietphieukhamFailure());
    }
  };
};

// Create Post
const createChitietphieukhamStart = () => ({
  type: chitietphieukhamTypes.CREATE_CHITIETPHIEUKHAM_START,
});

const createChitietphieukhamSuccess = (chitietphieukhams) => ({
  type: chitietphieukhamTypes.CREATE_CHITIETPHIEUKHAM_SUCCESS,
  payload: chitietphieukhams,
});

const createChitietphieukhamFailure = () => ({
  type: chitietphieukhamTypes.CREATE_CHITIETPHIEUKHAM_FAILURE,
});

const createChitietphieukham = (chitietphieukham) => {
  return async (dispatch, getState) => {
    const {
      chitietphieukham: { chitietphieukhams },
    } = getState();
    console.log(getState());
    dispatch(createChitietphieukhamStart());
    try {
      const res = await axios.post("/phieuxuatnhapvien", chitietphieukham);
      console.log(res);

      dispatch(createChitietphieukhamSuccess([res.data, ...chitietphieukhams]));
    } catch (error) {
      dispatch(createChitietphieukhamFailure());
    }
  };
};

// Create Post
const deleteChitietphieukhamStart = () => ({
  type: chitietphieukhamTypes.DELETE_CHITIETPHIEUKHAM_START,
});

const deleteChitietphieukhamSuccess = (chitietphieukhams) => ({
  type: chitietphieukhamTypes.DELETE_CHITIETPHIEUKHAM_SUCCESS,
  payload: chitietphieukhams,
});

const deleteChitietphieukhamFailure = () => ({
  type: chitietphieukhamTypes.DELETE_CHITIETPHIEUKHAM_FAILURE,
});

const deleteChitietphieukham = (chitietphieukham) => {
  return async (dispatch, getState) => {
    const {
      chitietphieukham: { chitietphieukhams },
    } = getState();
    dispatch(deleteChitietphieukhamStart());
    try {
      await axios.delete("/phieuxuatnhapvien/" + chitietphieukham._id);
      const newchitietphieukhams = chitietphieukhams.filter(
        (item) => item._id !== chitietphieukham._id
      );
      dispatch(deleteChitietphieukhamSuccess(newchitietphieukhams));
    } catch (error) {
      console.log("looix");
      dispatch(deleteChitietphieukhamFailure());
    }
  };
};

// Update Post
const updateChitietphieukhamStart = () => ({
  type: chitietphieukhamTypes.UPDATE_CHITIETPHIEUKHAM_START,
});

const updateChitietphieukhamSuccess = (chitietphieukhams) => ({
  type: chitietphieukhamTypes.UPDATE_CHITIETPHIEUKHAM_SUCCESS,
  payload: chitietphieukhams,
});

const updateChitietphieukhamFailure = () => ({
  type: chitietphieukhamTypes.UPDATE_CHITIETPHIEUKHAM_FAILURE,
});

const updateChitietphieukham = (chitietphieukham) => {
  console.log(chitietphieukham);
  return async (dispatch, getState) => {
    const {
      chitietphieukham: { chitietphieukhams },
    } = getState();
    dispatch(updateChitietphieukhamStart());
    try {
      const res = await axios.put(
        "/phieuxuatnhapvien/" + chitietphieukham._id,
        chitietphieukham
      );

      let index = chitietphieukhams.findIndex(
        (item) => item._id === chitietphieukham._id
      );
      chitietphieukhams[index] = res.data;

      dispatch(updateChitietphieukhamSuccess(chitietphieukhams));
    } catch (error) {
      dispatch(updateChitietphieukhamFailure());
    }
  };
};

export {
  getChitietphieukhams,
  createChitietphieukham,
  deleteChitietphieukham,
  updateChitietphieukham,
  getChitietphieukham,
};
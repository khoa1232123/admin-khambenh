import axios from "src/helpers/axios";
import { toathuocTypes } from "../types";

// Get All Posts
const getToathuocsStart = () => ({
  type: toathuocTypes.GET_TOATHUOCS_START,
});

const getToathuocsSuccess = (toathuocs) => ({
  type: toathuocTypes.GET_TOATHUOCS_SUCCESS,
  payload: toathuocs,
});

const getToathuocsFailure = () => ({
  type: toathuocTypes.GET_TOATHUOCS_FAILURE,
});

const getToathuocs = () => {
  return async (dispatch) => {
    dispatch(getToathuocsStart());
    try {
      const res = await axios.get("/toathuoc");

      console.log(res.data);

      dispatch(getToathuocsSuccess(res.data));
    } catch (error) {
      dispatch(getToathuocsFailure());
    }
  };
};

// Get One Post
const getToathuocStart = () => ({
  type: toathuocTypes.GET_TOATHUOC_START,
});

const getToathuocSuccess = (toathuoc) => ({
  type: toathuocTypes.GET_TOATHUOC_SUCCESS,
  payload: toathuoc,
});

const getToathuocFailure = () => ({
  type: toathuocTypes.GET_TOATHUOC_FAILURE,
});

const getToathuoc = (id) => {
  return async (dispatch) => {
    dispatch(getToathuocStart());
    try {
      const res = await axios.get("/toathuoc/" + id);

      dispatch(getToathuocSuccess(res.data));
    } catch (error) {
      dispatch(getToathuocFailure());
    }
  };
};

// Create Post
const createToathuocStart = () => ({
  type: toathuocTypes.CREATE_TOATHUOC_START,
});

const createToathuocSuccess = (toathuocs) => ({
  type: toathuocTypes.CREATE_TOATHUOC_SUCCESS,
  payload: toathuocs,
});

const createToathuocFailure = () => ({
  type: toathuocTypes.CREATE_TOATHUOC_FAILURE,
});

const createToathuoc = (toathuoc) => {
  return async (dispatch, getState) => {
    const {
      toathuoc: { toathuocs },
    } = getState();
    console.log(getState());
    dispatch(createToathuocStart());
    try {
      const res = await axios.post("/toathuoc", toathuoc);
      console.log(res);

      dispatch(createToathuocSuccess([res.data, ...toathuocs]));
    } catch (error) {
      dispatch(createToathuocFailure());
    }
  };
};

// Create Post
const deleteToathuocStart = () => ({
  type: toathuocTypes.DELETE_TOATHUOC_START,
});

const deleteToathuocSuccess = (toathuocs) => ({
  type: toathuocTypes.DELETE_TOATHUOC_SUCCESS,
  payload: toathuocs,
});

const deleteToathuocFailure = () => ({
  type: toathuocTypes.DELETE_TOATHUOC_FAILURE,
});

const deleteToathuoc = (toathuoc) => {
  return async (dispatch, getState) => {
    const {
      toathuoc: { toathuocs },
    } = getState();
    dispatch(deleteToathuocStart());
    try {
      await axios.delete("/toathuoc/" + toathuoc._id);
      const newtoathuocs = toathuocs.filter(
        (item) => item._id !== toathuoc._id
      );
      dispatch(deleteToathuocSuccess(newtoathuocs));
    } catch (error) {
      console.log("looix");
      dispatch(deleteToathuocFailure());
    }
  };
};

// Update Post
const updateToathuocStart = () => ({
  type: toathuocTypes.UPDATE_TOATHUOC_START,
});

const updateToathuocSuccess = (toathuocs) => ({
  type: toathuocTypes.UPDATE_TOATHUOC_SUCCESS,
  payload: toathuocs,
});

const updateToathuocFailure = () => ({
  type: toathuocTypes.UPDATE_TOATHUOC_FAILURE,
});

const updateToathuoc = (toathuoc) => {
  console.log(toathuoc);
  return async (dispatch, getState) => {
    const {
      toathuoc: { toathuocs },
    } = getState();
    dispatch(updateToathuocStart());
    try {
      const res = await axios.put("/toathuoc/" + toathuoc._id, toathuoc);

      let index = toathuocs.findIndex((item) => item._id === toathuoc._id);
      toathuocs[index] = res.data;

      dispatch(updateToathuocSuccess(toathuocs));
    } catch (error) {
      dispatch(updateToathuocFailure());
    }
  };
};

export {
  getToathuocs,
  createToathuoc,
  deleteToathuoc,
  updateToathuoc,
  getToathuoc,
};

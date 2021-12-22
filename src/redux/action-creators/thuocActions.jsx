import axios from "src/helpers/axios";
import { thuocTypes } from "../types";

// Get All Posts
const getThuocsStart = () => ({
  type: thuocTypes.GET_THUOCS_START,
});

const getThuocsSuccess = (thuocs) => ({
  type: thuocTypes.GET_THUOCS_SUCCESS,
  payload: thuocs,
});

const getThuocsFailure = () => ({
  type: thuocTypes.GET_THUOCS_FAILURE,
});

const getThuocs = () => {
  return async (dispatch) => {
    dispatch(getThuocsStart());
    try {
      const res = await axios.get("/thuoc");

      console.log(res.data);

      dispatch(getThuocsSuccess(res.data));
    } catch (error) {
      dispatch(getThuocsFailure());
    }
  };
};

// Get One Post
const getThuocStart = () => ({
  type: thuocTypes.GET_THUOC_START,
});

const getThuocSuccess = (thuoc) => ({
  type: thuocTypes.GET_THUOC_SUCCESS,
  payload: thuoc,
});

const getThuocFailure = () => ({
  type: thuocTypes.GET_THUOC_FAILURE,
});

const getThuoc = (id) => {
  return async (dispatch) => {
    dispatch(getThuocStart());
    try {
      const res = await axios.get("/thuoc/" + id);

      dispatch(getThuocSuccess(res.data));
    } catch (error) {
      dispatch(getThuocFailure());
    }
  };
};

// Create Post
const createThuocStart = () => ({
  type: thuocTypes.CREATE_THUOC_START,
});

const createThuocSuccess = (thuocs) => ({
  type: thuocTypes.CREATE_THUOC_SUCCESS,
  payload: thuocs,
});

const createThuocFailure = () => ({
  type: thuocTypes.CREATE_THUOC_FAILURE,
});

const createThuoc = (thuoc) => {
  return async (dispatch, getState) => {
    const {
      thuoc: { thuocs },
    } = getState();
    console.log(getState());
    dispatch(createThuocStart());
    try {
      const res = await axios.post("/thuoc", thuoc);
      console.log(res);

      dispatch(createThuocSuccess([res.data, ...thuocs]));
    } catch (error) {
      dispatch(createThuocFailure());
    }
  };
};

// Create Post
const deleteThuocStart = () => ({
  type: thuocTypes.DELETE_THUOC_START,
});

const deleteThuocSuccess = (thuocs) => ({
  type: thuocTypes.DELETE_THUOC_SUCCESS,
  payload: thuocs,
});

const deleteThuocFailure = () => ({
  type: thuocTypes.DELETE_THUOC_FAILURE,
});

const deleteThuoc = (thuoc) => {
  return async (dispatch, getState) => {
    const {
      thuoc: { thuocs },
    } = getState();
    dispatch(deleteThuocStart());
    try {
      await axios.delete("/thuoc/" + thuoc._id);
      const newthuocs = thuocs.filter((item) => item._id !== thuoc._id);
      dispatch(deleteThuocSuccess(newthuocs));
    } catch (error) {
      console.log("looix");
      dispatch(deleteThuocFailure());
    }
  };
};

// Update Post
const updateThuocStart = () => ({
  type: thuocTypes.UPDATE_THUOC_START,
});

const updateThuocSuccess = (thuocs) => ({
  type: thuocTypes.UPDATE_THUOC_SUCCESS,
  payload: thuocs,
});

const updateThuocFailure = () => ({
  type: thuocTypes.UPDATE_THUOC_FAILURE,
});

const updateThuoc = (thuoc) => {
  console.log(thuoc);
  return async (dispatch, getState) => {
    const {
      thuoc: { thuocs },
    } = getState();
    dispatch(updateThuocStart());
    try {
      const res = await axios.put("/thuoc/" + thuoc._id, thuoc);

      let index = thuocs.findIndex((item) => item._id === thuoc._id);
      thuocs[index] = res.data;

      dispatch(updateThuocSuccess(thuocs));
    } catch (error) {
      dispatch(updateThuocFailure());
    }
  };
};

export { getThuocs, createThuoc, deleteThuoc, updateThuoc, getThuoc };

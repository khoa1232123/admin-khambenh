import axios from "src/helpers/axios";
import { benhTypes } from "../types";

// Get All Posts
const getBenhsStart = () => ({
  type: benhTypes.GET_BENHS_START,
});

const getBenhsSuccess = (benhs) => ({
  type: benhTypes.GET_BENHS_SUCCESS,
  payload: benhs,
});

const getBenhsFailure = () => ({
  type: benhTypes.GET_BENHS_FAILURE,
});

const getBenhs = () => {
  return async (dispatch) => {
    dispatch(getBenhsStart());
    try {
      const res = await axios.get("/benh");

      console.log(res.data);

      dispatch(getBenhsSuccess(res.data));
    } catch (error) {
      dispatch(getBenhsFailure());
    }
  };
};

// Get One Post
const getBenhStart = () => ({
  type: benhTypes.GET_BENH_START,
});

const getBenhSuccess = (benh) => ({
  type: benhTypes.GET_BENH_SUCCESS,
  payload: benh,
});

const getBenhFailure = () => ({
  type: benhTypes.GET_BENH_FAILURE,
});

const getBenh = (id) => {
  return async (dispatch) => {
    dispatch(getBenhStart());
    try {
      const res = await axios.get("/benh/" + id);

      dispatch(getBenhSuccess(res.data));
    } catch (error) {
      dispatch(getBenhFailure());
    }
  };
};

// Create Post
const createBenhStart = () => ({
  type: benhTypes.CREATE_BENH_START,
});

const createBenhSuccess = (benhs) => ({
  type: benhTypes.CREATE_BENH_SUCCESS,
  payload: benhs,
});

const createBenhFailure = () => ({
  type: benhTypes.CREATE_BENH_FAILURE,
});

const createBenh = (benh) => {
  return async (dispatch, getState) => {
    const {
      benh: { benhs },
    } = getState();
    console.log(getState());
    dispatch(createBenhStart());
    try {
      const res = await axios.post("/benh", benh);
      console.log(res);

      dispatch(createBenhSuccess([res.data, ...benhs]));
    } catch (error) {
      dispatch(createBenhFailure());
    }
  };
};

// Create Post
const deleteBenhStart = () => ({
  type: benhTypes.DELETE_BENH_START,
});

const deleteBenhSuccess = (benhs) => ({
  type: benhTypes.DELETE_BENH_SUCCESS,
  payload: benhs,
});

const deleteBenhFailure = () => ({
  type: benhTypes.DELETE_BENH_FAILURE,
});

const deleteBenh = (benh) => {
  return async (dispatch, getState) => {
    const {
      benh: { benhs },
    } = getState();
    dispatch(deleteBenhStart());
    try {
      await axios.delete("/benh/" + benh._id);
      const newbenhs = benhs.filter((item) => item._id !== benh._id);
      dispatch(deleteBenhSuccess(newbenhs));
    } catch (error) {
      console.log("looix");
      dispatch(deleteBenhFailure());
    }
  };
};

// Update Post
const updateBenhStart = () => ({
  type: benhTypes.UPDATE_BENH_START,
});

const updateBenhSuccess = (benhs) => ({
  type: benhTypes.UPDATE_BENH_SUCCESS,
  payload: benhs,
});

const updateBenhFailure = () => ({
  type: benhTypes.UPDATE_BENH_FAILURE,
});

const updateBenh = (benh) => {
  console.log(benh);
  return async (dispatch, getState) => {
    const {
      benh: { benhs },
    } = getState();
    dispatch(updateBenhStart());
    try {
      const res = await axios.put("/benh/" + benh._id, benh);
      console.log(res);

      let index = benhs.findIndex((item) => item._id === benh._id);
      benhs[index] = benh;

      dispatch(updateBenhSuccess(benhs));
    } catch (error) {
      dispatch(updateBenhFailure());
    }
  };
};

export { getBenhs, createBenh, deleteBenh, updateBenh, getBenh };

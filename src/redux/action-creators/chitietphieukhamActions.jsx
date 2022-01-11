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
      const res = await axios.get("/chitietphieukhambenh");

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
      const res = await axios.get("/chitietphieukhambenh/" + id);

      console.log(res.data);

      dispatch(getChitietphieukhamSuccess(res.data));
    } catch (error) {
      dispatch(getChitietphieukhamFailure());
    }
  };
};

// Get by phieukham
const getPKChitietphieukhamStart = () => ({
  type: chitietphieukhamTypes.GET_PKCHITIETPHIEUKHAM_START,
});

const getPKChitietphieukhamSuccess = (chitietphieukham) => ({
  type: chitietphieukhamTypes.GET_PKCHITIETPHIEUKHAM_SUCCESS,
  payload: chitietphieukham,
});

const getPKChitietphieukhamFailure = () => ({
  type: chitietphieukhamTypes.GET_PKCHITIETPHIEUKHAM_FAILURE,
});

const getPKChitietphieukham = (id) => {
  return async (dispatch) => {
    dispatch(getPKChitietphieukhamStart());
    try {
      const res = await axios.get("/chitietphieukhambenh/byphieukham/" + id);

      console.log(res.data);

      dispatch(getPKChitietphieukhamSuccess(res.data));
    } catch (error) {
      dispatch(getPKChitietphieukhamFailure());
    }
  };
};

// Get bybacsi
const getBSChitietphieukhamStart = () => ({
  type: chitietphieukhamTypes.GET_BSCHITIETPHIEUKHAM_START,
});

const getBSChitietphieukhamSuccess = (chitietphieukhams) => ({
  type: chitietphieukhamTypes.GET_BSCHITIETPHIEUKHAM_SUCCESS,
  payload: chitietphieukhams,
});

const getBSChitietphieukhamFailure = () => ({
  type: chitietphieukhamTypes.GET_BSCHITIETPHIEUKHAM_FAILURE,
});

const getBSChitietphieukham = (id) => {
  return async (dispatch) => {
    dispatch(getBSChitietphieukhamStart());
    try {
      const res = await axios.get("/chitietphieukhambenh/bybacsi/" + id);

      console.log(res.data);

      dispatch(getBSChitietphieukhamSuccess(res.data));
    } catch (error) {
      dispatch(getBSChitietphieukhamFailure());
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
    // console.log(chitietphieukham);
    const {
      chitietphieukham: { chitietphieukhams },
    } = getState();
    dispatch(createChitietphieukhamStart());
    try {
      const res = await axios.post("/chitietphieukhambenh", chitietphieukham);
      console.log(res);

      dispatch(createChitietphieukhamSuccess([res.data, ...chitietphieukhams]));
    } catch (error) {
      dispatch(createChitietphieukhamFailure());
    }
  };
};

// Delete Post
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
      await axios.delete("/chitietphieukhambenh/" + chitietphieukham._id);
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
        "/chitietphieukhambenh/" + chitietphieukham._id,
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

// Update Post
const updateDTChitietphieukhamStart = () => ({
  type: chitietphieukhamTypes.UPDATE_DTCHITIETPHIEUKHAM_START,
});

const updateDTChitietphieukhamSuccess = (chitietphieukham) => ({
  type: chitietphieukhamTypes.UPDATE_DTCHITIETPHIEUKHAM_SUCCESS,
  payload: chitietphieukham,
});

const updateDTChitietphieukhamFailure = () => ({
  type: chitietphieukhamTypes.UPDATE_DTCHITIETPHIEUKHAM_FAILURE,
});

const updateDTChitietphieukham = ({ chitietphieukham, ctpk_id }) => {
  console.log(ctpk_id);
  return async (dispatch) => {
    dispatch(updateDTChitietphieukhamStart());
    try {
      const res = await axios.put(
        "/chitietphieukhambenh/" + ctpk_id,
        chitietphieukham
      );
      dispatch(updateDTChitietphieukhamSuccess(res.data));
    } catch (error) {
      dispatch(updateDTChitietphieukhamFailure());
    }
  };
};

// Update Toa thuoc trong Chi tiet phieu kham
const updateTTChitietphieukhamStart = () => ({
  type: chitietphieukhamTypes.UPDATE_TTCHITIETPHIEUKHAM_START,
});

const updateTTChitietphieukhamSuccess = (chitietphieukhams) => ({
  type: chitietphieukhamTypes.UPDATE_TTCHITIETPHIEUKHAM_SUCCESS,
  payload: chitietphieukhams,
});

const updateTTChitietphieukhamFailure = () => ({
  type: chitietphieukhamTypes.UPDATE_TTCHITIETPHIEUKHAM_FAILURE,
});

const updateTTChitietphieukham = ({ toathuoc, chitietphieukham }) => {
  console.log(chitietphieukham);
  return async (dispatch) => {
    dispatch(updateTTChitietphieukhamStart());
    try {
      const resTT = await axios.post("/toathuoc", toathuoc);
      if (resTT.data) {
        const res = await axios.put(
          "/chitietphieukhambenh/" + chitietphieukham._id,
          { toathuoc: resTT.data._id }
        );
        dispatch(updateTTChitietphieukhamSuccess(res.data));
      }
    } catch (error) {
      dispatch(updateTTChitietphieukhamFailure());
    }
  };
};

export {
  getChitietphieukhams,
  createChitietphieukham,
  deleteChitietphieukham,
  updateChitietphieukham,
  getChitietphieukham,
  updateTTChitietphieukham,
  updateDTChitietphieukham,
  getPKChitietphieukham,
  getBSChitietphieukham,
};

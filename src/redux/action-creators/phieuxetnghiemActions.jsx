import axios from "src/helpers/axios";
import { phieuxetnghiemTypes } from "../types";

// Get All Posts
const getPhieuxetnghiemsStart = () => ({
  type: phieuxetnghiemTypes.GET_PHIEUXETNGHIEMS_START,
});

const getPhieuxetnghiemsSuccess = (phieuxetnghiems) => ({
  type: phieuxetnghiemTypes.GET_PHIEUXETNGHIEMS_SUCCESS,
  payload: phieuxetnghiems,
});

const getPhieuxetnghiemsFailure = () => ({
  type: phieuxetnghiemTypes.GET_PHIEUXETNGHIEMS_FAILURE,
});

const getPhieuxetnghiems = () => {
  return async (dispatch) => {
    dispatch(getPhieuxetnghiemsStart());
    try {
      const res = await axios.get("/phieuxetnghiem");

      console.log(res.data);

      dispatch(getPhieuxetnghiemsSuccess(res.data));
    } catch (error) {
      dispatch(getPhieuxetnghiemsFailure());
    }
  };
};

// Get One Post
const getPhieuxetnghiemStart = () => ({
  type: phieuxetnghiemTypes.GET_PHIEUXETNGHIEM_START,
});

const getPhieuxetnghiemSuccess = (phieuxetnghiem) => ({
  type: phieuxetnghiemTypes.GET_PHIEUXETNGHIEM_SUCCESS,
  payload: phieuxetnghiem,
});

const getPhieuxetnghiemFailure = () => ({
  type: phieuxetnghiemTypes.GET_PHIEUXETNGHIEM_FAILURE,
});

const getPhieuxetnghiem = (id) => {
  return async (dispatch) => {
    dispatch(getPhieuxetnghiemStart());
    try {
      const res = await axios.get("/phieuxetnghiem/" + id);

      dispatch(getPhieuxetnghiemSuccess(res.data));
    } catch (error) {
      dispatch(getPhieuxetnghiemFailure());
    }
  };
};

// Get By benhnhan
const getBnPhieuxetnghiemStart = () => ({
  type: phieuxetnghiemTypes.GET_BNPHIEUXETNGHIEM_START,
});

const getBnPhieuxetnghiemSuccess = (phieuxetnghiems) => ({
  type: phieuxetnghiemTypes.GET_BNPHIEUXETNGHIEM_SUCCESS,
  payload: phieuxetnghiems,
});

const getBnPhieuxetnghiemFailure = () => ({
  type: phieuxetnghiemTypes.GET_BNPHIEUXETNGHIEM_FAILURE,
});

const getBnPhieuxetnghiem = (id) => {
  return async (dispatch) => {
    dispatch(getBnPhieuxetnghiemStart());
    try {
      const res = await axios.get("/phieuxetnghiem/bybenhnhan/" + id);

      dispatch(getBnPhieuxetnghiemSuccess(res.data));
    } catch (error) {
      dispatch(getBnPhieuxetnghiemFailure());
    }
  };
};

// Create Post
const createPhieuxetnghiemStart = () => ({
  type: phieuxetnghiemTypes.CREATE_PHIEUXETNGHIEM_START,
});

const createPhieuxetnghiemSuccess = (phieuxetnghiems) => ({
  type: phieuxetnghiemTypes.CREATE_PHIEUXETNGHIEM_SUCCESS,
  payload: phieuxetnghiems,
});

const createPhieuxetnghiemFailure = () => ({
  type: phieuxetnghiemTypes.CREATE_PHIEUXETNGHIEM_FAILURE,
});

const createPhieuxetnghiem = (phieuxetnghiem) => {
  return async (dispatch, getState) => {
    const {
      phieuxetnghiem: { phieuxetnghiems },
    } = getState();
    console.log(getState());
    dispatch(createPhieuxetnghiemStart());
    try {
      const res = await axios.post("/phieuxetnghiem", phieuxetnghiem);
      console.log(res);

      dispatch(createPhieuxetnghiemSuccess([res.data, ...phieuxetnghiems]));
    } catch (error) {
      dispatch(createPhieuxetnghiemFailure());
    }
  };
};

// Create Post
const deletePhieuxetnghiemStart = () => ({
  type: phieuxetnghiemTypes.DELETE_PHIEUXETNGHIEM_START,
});

const deletePhieuxetnghiemSuccess = (phieuxetnghiems) => ({
  type: phieuxetnghiemTypes.DELETE_PHIEUXETNGHIEM_SUCCESS,
  payload: phieuxetnghiems,
});

const deletePhieuxetnghiemFailure = () => ({
  type: phieuxetnghiemTypes.DELETE_PHIEUXETNGHIEM_FAILURE,
});

const deletePhieuxetnghiem = (phieuxetnghiem) => {
  return async (dispatch, getState) => {
    const {
      phieuxetnghiem: { phieuxetnghiems },
    } = getState();
    dispatch(deletePhieuxetnghiemStart());
    try {
      await axios.delete("/phieuxetnghiem/" + phieuxetnghiem._id);
      const newphieuxetnghiems = phieuxetnghiems.filter(
        (item) => item._id !== phieuxetnghiem._id
      );
      dispatch(deletePhieuxetnghiemSuccess(newphieuxetnghiems));
    } catch (error) {
      console.log("looix");
      dispatch(deletePhieuxetnghiemFailure());
    }
  };
};

// Update Post
const updatePhieuxetnghiemStart = () => ({
  type: phieuxetnghiemTypes.UPDATE_PHIEUXETNGHIEM_START,
});

const updatePhieuxetnghiemSuccess = (phieuxetnghiems) => ({
  type: phieuxetnghiemTypes.UPDATE_PHIEUXETNGHIEM_SUCCESS,
  payload: phieuxetnghiems,
});

const updatePhieuxetnghiemFailure = () => ({
  type: phieuxetnghiemTypes.UPDATE_PHIEUXETNGHIEM_FAILURE,
});

const updatePhieuxetnghiem = (phieuxetnghiem) => {
  console.log(phieuxetnghiem);
  return async (dispatch, getState) => {
    const {
      phieuxetnghiem: { phieuxetnghiems },
    } = getState();
    dispatch(updatePhieuxetnghiemStart());
    try {
      const res = await axios.put(
        "/phieuxetnghiem/" + phieuxetnghiem._id,
        phieuxetnghiem
      );

      let index = phieuxetnghiems.findIndex(
        (item) => item._id === phieuxetnghiem._id
      );
      phieuxetnghiems[index] = res.data;

      dispatch(updatePhieuxetnghiemSuccess(phieuxetnghiems));
    } catch (error) {
      dispatch(updatePhieuxetnghiemFailure());
    }
  };
};

export {
  getPhieuxetnghiems,
  createPhieuxetnghiem,
  deletePhieuxetnghiem,
  updatePhieuxetnghiem,
  getPhieuxetnghiem,
  getBnPhieuxetnghiem,
};

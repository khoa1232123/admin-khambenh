import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getChitietphieukham } from "src/redux/action-creators";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { chitietphieukham } = useSelector((state) => state.chitietphieukham);

  console.log(chitietphieukham);

  useEffect(() => {
    dispatch(getChitietphieukham(id));
  }, [dispatch, id]);

  return <>Chi tieets detail</>;
};

export default Detail;

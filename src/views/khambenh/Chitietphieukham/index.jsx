import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteChitietphieukham,
  getChitietphieukhams,
} from "src/redux/action-creators";
import ModalChitietphieukham from "./ModalChitietphieukham";

const Chitietphieukham = () => {
  const dispatch = useDispatch();
  const [oldChitietphieukham, setOldChitietphieukham] = useState({});
  const [modal, setModal] = useState(false);

  const { chitietphieukhams } = useSelector((state) => state.chitietphieukham);

  useEffect(() => {
    dispatch(getChitietphieukhams());
  }, [dispatch]);

  console.log(chitietphieukhams);

  const handleUpdate = (item) => {
    setOldChitietphieukham(item);
    setModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteChitietphieukham(item));
    }
  };

  const handleClick = () => {
    setModal(true);
  };

  console.log(chitietphieukhams);

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Posts</span>
              <CButton color="success" onClick={handleClick}>
                Add Post
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={chitietphieukhams}
                fields={[
                  "Mã Số",
                  "Bác sĩ",
                  "Phiếu khám",
                  "Bệnh Nhân",
                  // "Tên bệnh nhân",
                  // "email",
                  // "Số điện thoại",
                  "actions",
                ]}
                striped
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  "Mã Số": (item) => (
                    <td>
                      <Link
                        to={"/khambenh/chitietphieukham/detail/" + item._id}
                      >
                        {item.mso}
                      </Link>
                    </td>
                  ),
                  "Bác sĩ": (item) => (
                    <td>
                      {item.bacsi.mso} - {item.bacsi.ten}
                    </td>
                  ),
                  "Phiếu khám": (item) => <td>{item.phieukhambenh && item.phieukhambenh.mso}</td>,
                  "Bệnh Nhân": (item) => (
                    <td>
                      {item.phieukhambenh && item.phieukhambenh.hosobenhnhan.mso} -{" "}
                      {item.phieukhambenh && item.phieukhambenh.hosobenhnhan.ten}
                    </td>
                  ),
                  actions: (item) => (
                    <td>
                      <CButton
                        color="warning"
                        onClick={(e) => handleUpdate(item)}
                      >
                        Edit
                      </CButton>{" "}
                      <CButton
                        color="danger"
                        onClick={(e) => handleDelete(item)}
                      >
                        Delete
                      </CButton>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <ModalChitietphieukham
        modal={modal}
        setModal={setModal}
        oldChitietphieukham={oldChitietphieukham}
      />
    </>
  );
};

export default Chitietphieukham;

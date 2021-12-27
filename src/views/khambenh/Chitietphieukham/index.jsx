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
                  // "Ngày Nhập viện",
                  // "Ngày Xuất viện",
                  // "Mã Bệnh Nhân",
                  // "Tên bệnh nhân",
                  // "email",
                  // "Số điện thoại",
                  "actions",
                ]}
                striped
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  "Mã Số": (item) => <td>{item.mso}</td>,
                  // "Ngày Nhập viện": (item) => (
                  //   <td>{formatDate(item.ngayNhap)}</td>
                  // ),
                  // "Ngày Xuất viện": (item) => (
                  //   <td>{formatDate(item.ngayXuat)}</td>
                  // ),
                  // "Mã Bệnh Nhân": (item) => <td>{item.hosobenhnhan.mso}</td>,
                  // "Tên bệnh nhân": (item) => <td>{item.hosobenhnhan.ten}</td>,
                  // email: (item) => <td>{item.hosobenhnhan.email}</td>,
                  // "Số điện thoại": (item) => (
                  //   <td>{item.hosobenhnhan.sodienthoai}</td>
                  // ),
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

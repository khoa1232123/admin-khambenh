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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { formatDate } from "src/helpers";
import {
  getPhieukhambenhs,
  deletePhieukhambenh,
} from "src/redux/action-creators";
import ModalPhieukhambenh from "./ModalPhieukhambenh";

const Phieukhambenh = () => {
  const dispatch = useDispatch();
  const [oldPhieukhambenh, setOldPhieukhambenh] = useState({});
  const [modal, setModal] = useState(false);

  const { phieukhambenhs } = useSelector((state) => state.phieukhambenh);

  useEffect(() => {
    dispatch(getPhieukhambenhs());
  }, [dispatch]);

  const handleUpdate = (item) => {
    setOldPhieukhambenh(item);
    setModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deletePhieukhambenh(item));
    }
  };

  const handleClick = () => {
    setModal(true);
  };

  console.log(phieukhambenhs);

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
                items={phieukhambenhs}
                fields={[
                  "Mã Số",
                  "Ngày giờ khám",
                  "Mã Bệnh Nhân",
                  "Tên bệnh nhân",
                  "email",
                  "Số điện thoại",
                  "actions",
                ]}
                striped
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  "Mã Số": (item) => <td>{item.mso}</td>,
                  "Ngày giờ khám": (item) => (
                    <td>{formatDate(item.ngaygiokham)}</td>
                  ),
                  "Mã Bệnh Nhân": (item) => <td>{item.hosobenhnhan.mso}</td>,
                  "Tên bệnh nhân": (item) => <td>{item.hosobenhnhan.ten}</td>,
                  email: (item) => <td>{item.hosobenhnhan.email}</td>,
                  "Số điện thoại": (item) => (
                    <td>{item.hosobenhnhan.sodienthoai}</td>
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
      <ModalPhieukhambenh
        modal={modal}
        setModal={setModal}
        oldPhieukhambenh={oldPhieukhambenh}
      />
    </>
  );
};

export default Phieukhambenh;

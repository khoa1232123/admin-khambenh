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
  getPhieuxetnghiems,
  deletePhieuxetnghiem,
} from "src/redux/action-creators";
import ModalPhieuxetnghiem from "./ModalPhieuxetnghiem";

const Phieuxetnghiem = () => {
  const dispatch = useDispatch();
  const [oldPhieuxetnghiem, setOldPhieuxetnghiem] = useState({});
  const [modal, setModal] = useState(false);

  const { phieuxetnghiems } = useSelector((state) => state.phieuxetnghiem);

  useEffect(() => {
    dispatch(getPhieuxetnghiems());
  }, [dispatch]);

  const handleUpdate = (item) => {
    setOldPhieuxetnghiem(item);
    setModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deletePhieuxetnghiem(item));
    }
  };

  const handleClick = () => {
    setModal(true);
  };

  console.log(phieuxetnghiems);

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
                items={phieuxetnghiems}
                fields={[
                  "Mã Số",
                  "Tên xét nghiệm",
                  "Ngày",
                  "Kết quả",
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
                  "Tên xét nghiệm": (item) => <td>{item.ten}</td>,
                  Ngày: (item) => <td>{formatDate(item.ngay)}</td>,
                  "Kết quả": (item) => <td>{item.ketqua}</td>,
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
      <ModalPhieuxetnghiem
        modal={modal}
        setModal={setModal}
        oldPhieuxetnghiem={oldPhieuxetnghiem}
      />
    </>
  );
};

export default Phieuxetnghiem;

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
import { getLephis, deleteLephi } from "src/redux/action-creators";
import ModalLephi from "./ModalLephi";

const Lephi = () => {
  const dispatch = useDispatch();
  const [oldLephi, setOldLephi] = useState({});
  const [modal, setModal] = useState(false);

  const { lephis } = useSelector((state) => state.lephi);

  useEffect(() => {
    dispatch(getLephis());
  }, [dispatch]);

  const handleUpdate = (item) => {
    setOldLephi(item);
    setModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteLephi(item));
    }
  };

  const handleClick = () => {
    setModal(true);
  };

  console.log(lephis);

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
                items={lephis}
                fields={[
                  "Mã Số",
                  "Ngày Đóng",
                  "Số tiền",
                  "Mã Bệnh Nhân",
                  "Tên bệnh nhân",
                  "email",
                  "Số điện thoại",
                  "actions",
                ]}
                striped
                itemsPerPage={10}
                pagination
                sorter
                hover
                tableFilter
                scopedSlots={{
                  "Mã Số": (item) => <td>{item.mso}</td>,
                  "Ngày Đóng": (item) => <td>{formatDate(item.ngaydong)}</td>,
                  "Số tiền": (item) => <td>{item.sotien}</td>,
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
      <ModalLephi modal={modal} setModal={setModal} oldLephi={oldLephi} />
    </>
  );
};

export default Lephi;

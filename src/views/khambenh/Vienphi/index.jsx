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
import { getVienphis, deleteVienphi } from "src/redux/action-creators";
import ModalVienphi from "./ModalVienphi";

const Vienphi = () => {
  const dispatch = useDispatch();
  const [oldVienphi, setOldVienphi] = useState({});
  const [modal, setModal] = useState(false);

  const { vienphis } = useSelector((state) => state.vienphi);

  useEffect(() => {
    dispatch(getVienphis());
  }, [dispatch]);

  const handleUpdate = (item) => {
    setOldVienphi(item);
    setModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteVienphi(item));
    }
  };

  const handleClick = () => {
    setModal(true);
  };

  console.log(vienphis);

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
                items={vienphis}
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
      <ModalVienphi modal={modal} setModal={setModal} oldVienphi={oldVienphi} />
    </>
  );
};

export default Vienphi;

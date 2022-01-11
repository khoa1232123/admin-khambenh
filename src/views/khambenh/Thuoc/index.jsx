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
import { deleteThuoc, getThuocs } from "src/redux/action-creators";
import ModalThuoc from "./ModalThuoc";

const Thuoc = () => {
  const dispatch = useDispatch();
  const [oldThuoc, setOldThuoc] = useState({});
  const [modal, setModal] = useState(false);

  const { thuocs } = useSelector((state) => state.thuoc);

  useEffect(() => {
    dispatch(getThuocs());
  }, [dispatch]);

  const handleUpdate = (item) => {
    setOldThuoc(item);
    setModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteThuoc(item));
    }
  };

  const handleClick = () => {
    setModal(true);
  };

  console.log(thuocs);

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
                items={thuocs}
                fields={["Mã Số", "Tên thuốc", "Hướng dẫn", "actions"]}
                striped
                itemsPerPage={10}
                pagination
                sorter
                hover
                tableFilter
                scopedSlots={{
                  "Mã Số": (item) => <td>{item.mso}</td>,
                  "Tên thuốc": (item) => <td>{item.ten}</td>,
                  "Hướng dẫn": (item) => <td>{item.huongdansudung}</td>,
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
      <ModalThuoc modal={modal} setModal={setModal} oldThuoc={oldThuoc} />
    </>
  );
};

export default Thuoc;

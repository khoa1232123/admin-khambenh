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
import { getBenhs, deleteBenh } from "src/redux/action-creators";
import ModalBenh from "./ModalBenh";

const Benh = () => {
  const dispatch = useDispatch();
  const [oldBenh, setOldBenh] = useState({});
  const [modal, setModal] = useState(false);

  const { benhs } = useSelector((state) => state.benh);

  useEffect(() => {
    dispatch(getBenhs());
  }, [dispatch]);

  const handleUpdate = (item) => {
    setOldBenh(item);
    setModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteBenh(item));
    }
  };

  const handleClick = () => {
    setModal(true);
  };

  console.log(benhs);

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
                items={benhs}
                fields={["_id", "Mã Số", "ten", "actions"]}
                striped
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  "Mã Số": (item) => <td>{item.mso}</td>,
                  ten: (item) => <td>{item.ten}</td>,
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
      <ModalBenh modal={modal} setModal={setModal} oldBenh={oldBenh} />
    </>
  );
};

export default Benh;

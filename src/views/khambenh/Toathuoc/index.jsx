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
import { formatDate } from "src/helpers";
import { deleteToathuoc, getToathuocs } from "src/redux/action-creators";
import ModalToathuoc from "./ModalToathuoc";

const Toathuoc = () => {
  const dispatch = useDispatch();
  const [oldToathuoc, setOldToathuoc] = useState({});
  const [modal, setModal] = useState(false);

  const { toathuocs } = useSelector((state) => state.toathuoc);

  useEffect(() => {
    dispatch(getToathuocs());
  }, [dispatch]);

  const handleUpdate = (item) => {
    setOldToathuoc(item);
    setModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteToathuoc(item));
    }
  };

  const handleClick = () => {
    setModal(true);
  };

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
                items={toathuocs}
                fields={["Mã Số", "Ngày lập", "Chi tiết", "actions"]}
                striped
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  "Mã Số": (item) => <td>{item.mso}</td>,
                  "Ngày lập": (item) => <td>{formatDate(item.ngaylap)}</td>,
                  "Chi tiết": (item) => (
                    <td>
                      {item.chitiet.map((item, index) => {
                        return (
                          <div key={index}>
                            {item.soluong} x {item.thuoc.mso} - {item.thuoc.ten}
                          </div>
                        );
                      })}
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
      <ModalToathuoc
        modal={modal}
        setModal={setModal}
        oldToathuoc={oldToathuoc}
      />
    </>
  );
};

export default Toathuoc;

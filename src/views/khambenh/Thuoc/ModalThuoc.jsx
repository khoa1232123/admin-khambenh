import {
  CButton,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { randomMaso } from "src/helpers";
import { createThuoc, updateThuoc } from "src/redux/action-creators";

const ModalThuoc = ({ modal, setModal, oldThuoc }) => {
  const dispatch = useDispatch();

  const [thuoc, setThuoc] = useState({});

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setThuoc({ ...thuoc, [name]: value });
  };

  useEffect(() => {
    if (oldThuoc) {
      setThuoc(oldThuoc);
    }
  }, [oldThuoc]);

  const handleClick = () => {
    console.log({ thuoc, oldThuoc });
    if (thuoc.ten !== "") {
      if (Object.keys(oldThuoc).length === 0) {
        thuoc["mso"] = randomMaso("vp");

        dispatch(createThuoc(thuoc));
      } else {
        dispatch(updateThuoc(thuoc));
      }
      setThuoc({});
      setModal(false);
    }
  };

  const closeModal = () => {
    setThuoc({});
    setModal(false);
  };

  return (
    <CModal show={modal} onClose={closeModal}>
      <CModalHeader closeButton>
        <CModalTitle>Update Thuoc</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Tên thuốc</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ten"
                type="text"
                name="ten"
                placeholder="Tên thuốc"
                value={thuoc.ngaydong || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Số tiền</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="sotien"
                type="number"
                name="sotien"
                placeholder="Số tiền"
                value={thuoc.sotien || 0}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="primary" onClick={handleClick}>
          Submit
        </CButton>{" "}
        <CButton color="secondary" onClick={closeModal}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ModalThuoc;

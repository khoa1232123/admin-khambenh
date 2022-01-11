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
  CRow,
  CSelect,
  CTextarea,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatInputDate, randomMaso } from "src/helpers";
import { renderOptions } from "src/helpers/renderOptions";
import {
  updateToathuoc,
  getThuocs,
  getChitietphieukham,
  updateTTChitietphieukham,
} from "src/redux/action-creators";

const ModalTrieuchung = ({
  modal,
  setModal,
  oldTrieuchung,
  chitietphieukham,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThuocs());
  }, [dispatch]);

  console.log(oldTrieuchung);

  const [trieuchung, setTrieuchung] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setTrieuchung(value);
  };

  useEffect(() => {
    if (oldTrieuchung !== "") {
      setTrieuchung(oldTrieuchung);
    }
  }, [oldTrieuchung]);

  const handleClick = () => {
    if (trieuchung) {
      dispatch();
    }
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <CModal show={modal} onClose={closeModal} size="lg">
      <CModalHeader closeButton>
        <CModalTitle>Toathuoc</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Triệu chứng</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CTextarea
                id="trieuchung"
                type="text"
                name="trieuchung"
                placeholder="Triệu chứng"
                value={trieuchung || ""}
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

export default ModalTrieuchung;

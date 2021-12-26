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
import { getBenhs, createBenh, updateBenh } from "src/redux/action-creators";

const ModalBenh = ({ modal, setModal, oldBenh }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBenhs());
  }, [dispatch]);

  const [benh, setBenh] = useState({});

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setBenh({ ...benh, [name]: value });
  };

  useEffect(() => {
    if (oldBenh) {
      setBenh(oldBenh);
    }
  }, [oldBenh]);

  const handleClick = () => {
    console.log({ benh, oldBenh });
    if (benh.ten !== "") {
      if (Object.keys(oldBenh).length === 0) {
        benh["mso"] = randomMaso("ka");

        dispatch(createBenh(benh));
      } else {
        dispatch(updateBenh(benh));
      }
      setBenh({});
      setModal(false);
    }
  };

  const closeModal = () => {
    setBenh({});
    setModal(false);
  };

  return (
    <CModal show={modal} onClose={closeModal}>
      <CModalHeader closeButton>
        <CModalTitle>Update Benh</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Title</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ten"
                name="ten"
                placeholder="Tên Benh"
                value={benh.ten || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="primary" onClick={handleClick}>
          Do Something
        </CButton>{" "}
        <CButton color="secondary" onClick={closeModal}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ModalBenh;

import {
  CButton,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CSelect,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { renderOptions } from "src/helpers/renderOptions";
import { getBenhs } from "src/redux/action-creators";
import {
  getChitietphieukham,
  updateDTChitietphieukham,
} from "src/redux/action-creators/chitietphieukhamActions";

const ModalChitietbenh = ({
  modal,
  setModal,
  oldChitietbenh,
  chitietphieukham,
}) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { benhs } = useSelector((state) => state.benh);

  useEffect(() => {
    dispatch(getBenhs());
  }, [dispatch]);

  console.log(oldChitietbenh);

  const [chitietbenh, setChitietbenh] = useState([{ benh: "" }]);

  const handleChangeMulti = (e, index) => {
    console.log(e);
    let newChitiet = [...chitietbenh];
    let name = e.target.name;
    let value = e.target.value;
    if (name === "soluong") {
      newChitiet[index][name] = Number(value);
    } else {
      newChitiet[index][name] = value;
    }
    setChitietbenh(newChitiet);
  };

  useEffect(() => {
    if (oldChitietbenh.length !== 0) {
      setChitietbenh([...oldChitietbenh]);
    }
  }, [oldChitietbenh]);

  const handleClick = () => {
    console.log(chitietbenh);
    if (Object.keys(chitietphieukham).length !== 0) {
      dispatch(updateDTChitietphieukham({ chitietbenh, chitietphieukham }));
    }
    dispatch(getChitietphieukham(id));
    setChitietbenh([{ benh: "" }]);
    setModal(false);
  };

  const addBenh = () => {
    setChitietbenh([...chitietbenh, { benh: "" }]);
  };

  const closeModal = () => {
    setChitietbenh([{ benh: "" }]);
    setModal(false);
  };

  const handleRemoveBenh = (e, index) => {
    console.log(chitietbenh);
    let newChitiet = [...chitietbenh];
    newChitiet.splice(index, 1);
    setChitietbenh(newChitiet);
  };

  return (
    <CModal show={modal} onClose={closeModal} size="lg">
      <CModalHeader closeButton>
        <CModalTitle>Chi tiết bệnh</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Danh sách Bệnh</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              {chitietbenh.map((item, index) => (
                <CRow key={index}>
                  <CCol xs="10" md="10">
                    <CSelect
                      name="benh"
                      value={(item.benh && item.benh._id) || item.benh || ""}
                      onChange={(e) => handleChangeMulti(e, index)}
                    >
                      {renderOptions(benhs)}
                    </CSelect>
                  </CCol>
                  <CCol xs="2" md="2">
                    <CButton
                      color="danger"
                      onClick={(e) => handleRemoveBenh(e, index)}
                    >
                      X
                    </CButton>
                  </CCol>

                  <CCol xs="12" md="12">
                    <br />
                  </CCol>
                </CRow>
              ))}
              <CCol xs="12" md="12">
                <CButton type="button" color="success" onClick={addBenh}>
                  Thêm thuốc
                </CButton>
              </CCol>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3"></CCol>
            <CCol xs="12" md="9"></CCol>
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

export default ModalChitietbenh;

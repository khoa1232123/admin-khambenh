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
  CSelect,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatInputDate } from "src/helpers";
import { randomMaso } from "src/helpers";
import { renderOptions } from "src/helpers/renderOptions";
import {
  createPhieukhambenh,
  getBenhnhans,
  updatePhieukhambenh,
} from "src/redux/action-creators";

const ModalPhieukhambenh = ({ modal, setModal, oldPhieukhambenh }) => {
  const dispatch = useDispatch();

  const { benhnhans } = useSelector((state) => state.benhnhan);

  useEffect(() => {
    dispatch(getBenhnhans());
  }, [dispatch]);

  const [phieukhambenh, setPhieukhambenh] = useState({});

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setPhieukhambenh({ ...phieukhambenh, [name]: value });
  };

  useEffect(() => {
    if (oldPhieukhambenh) {
      setPhieukhambenh(oldPhieukhambenh);
    }
  }, [oldPhieukhambenh]);

  const handleClick = () => {
    console.log({ phieukhambenh, oldPhieukhambenh });
    if (phieukhambenh.ten !== "") {
      if (Object.keys(oldPhieukhambenh).length === 0) {
        phieukhambenh["mso"] = randomMaso("xn");

        dispatch(createPhieukhambenh(phieukhambenh));
      } else {
        dispatch(updatePhieukhambenh(phieukhambenh));
      }
      setPhieukhambenh({});
      setModal(false);
    }
  };

  const closeModal = () => {
    setPhieukhambenh({});
    setModal(false);
  };

  return (
    <CModal show={modal} onClose={closeModal}>
      <CModalHeader closeButton>
        <CModalTitle>Update Phieukhambenh</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Bệnh Nhân</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CSelect
                id="hosobenhnhan"
                name="hosobenhnhan"
                value={phieukhambenh.hosobenhnhan || ""}
                onChange={handleChange}
              >
                {renderOptions(benhnhans)}
              </CSelect>
            </CCol>
          </CFormGroup>

          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Ngày Đóng</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ngaydong"
                type="date"
                name="ngaydong"
                placeholder="Ngày Nhập Viện"
                value={formatInputDate(phieukhambenh.ngaydong) || ""}
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
                value={phieukhambenh.sotien || 0}
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

export default ModalPhieukhambenh;

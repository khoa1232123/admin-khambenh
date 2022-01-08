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
  CTextarea,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formatInputDate } from "src/helpers";
import { randomMaso } from "src/helpers";
import {
  createPhieuxetnghiem,
  updatePhieuxetnghiem,
} from "src/redux/action-creators";

const ModalPhieuxetnghiem = ({
  modal,
  setModal,
  oldPhieuxetnghiem,
  benhnhan,
}) => {
  const dispatch = useDispatch();

  const [phieuxetnghiem, setPhieuxetnghiem] = useState({});

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setPhieuxetnghiem({ ...phieuxetnghiem, [name]: value });
  };

  useEffect(() => {
    if (oldPhieuxetnghiem) {
      setPhieuxetnghiem(oldPhieuxetnghiem);
    }
  }, [oldPhieuxetnghiem]);

  const handleClick = () => {
    console.log({ phieuxetnghiem, oldPhieuxetnghiem });
    if (phieuxetnghiem.ten !== "") {
      if (Object.keys(oldPhieuxetnghiem).length === 0) {
        phieuxetnghiem["mso"] = randomMaso("xn");

        dispatch(createPhieuxetnghiem(phieuxetnghiem));
      } else {
        dispatch(updatePhieuxetnghiem(phieuxetnghiem));
      }
      setPhieuxetnghiem({});
      setModal(false);
    }
  };

  const closeModal = () => {
    setPhieuxetnghiem({});
    setModal(false);
  };

  return (
    <CModal show={modal} onClose={closeModal}>
      <CModalHeader closeButton>
        <CModalTitle>Update Phieuxetnghiem</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Bệnh Nhân</CLabel>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Tên xét nghiệm</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ten"
                type="text"
                name="ten"
                placeholder="Tên xét nghiệm"
                value={phieuxetnghiem.ten || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Kết quả:</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CTextarea
                id="ketqua"
                type="text"
                name="ketqua"
                placeholder="Kết quả"
                value={phieuxetnghiem.ketqua || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Ngày làm xét nghiệm</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ngay"
                type="date"
                name="ngay"
                placeholder="Ngày Nhập Viện"
                value={formatInputDate(phieuxetnghiem.ngay) || ""}
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

export default ModalPhieuxetnghiem;

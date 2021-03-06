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
  CTextarea,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatInputDate } from "src/helpers";
import { randomMaso } from "src/helpers";
import { renderOptions } from "src/helpers/renderOptions";
import {
  createPhieuxetnghiem,
  getBenhnhans,
  updatePhieuxetnghiem,
} from "src/redux/action-creators";

const ModalPhieuxetnghiem = ({ modal, setModal, oldPhieuxetnghiem }) => {
  const dispatch = useDispatch();

  const { benhnhans } = useSelector((state) => state.benhnhan);

  console.log(benhnhans);

  useEffect(() => {
    dispatch(getBenhnhans());
  }, [dispatch]);

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
            <CCol xs="12" md="9">
              {benhnhans && (
                <CSelect
                  id="hosobenhnhan"
                  name="hosobenhnhan"
                  value={phieuxetnghiem.hosobenhnhan || ""}
                  onChange={handleChange}
                >
                  {renderOptions(benhnhans)}
                </CSelect>
              )}
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

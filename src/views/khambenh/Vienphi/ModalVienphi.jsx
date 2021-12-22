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
  createVienphi,
  getBenhnhans,
  updateVienphi,
} from "src/redux/action-creators";

const ModalVienphi = ({ modal, setModal, oldVienphi }) => {
  const dispatch = useDispatch();

  const { benhnhans } = useSelector((state) => state.benhnhan);

  useEffect(() => {
    dispatch(getBenhnhans());
  }, [dispatch]);

  const [vienphi, setVienphi] = useState({});

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setVienphi({ ...vienphi, [name]: value });
  };

  useEffect(() => {
    if (oldVienphi) {
      setVienphi(oldVienphi);
    }
  }, [oldVienphi]);

  const handleClick = () => {
    console.log({ vienphi, oldVienphi });
    if (vienphi.ten !== "") {
      if (Object.keys(oldVienphi).length === 0) {
        vienphi["mso"] = randomMaso("vp");

        dispatch(createVienphi(vienphi));
      } else {
        dispatch(updateVienphi(vienphi));
      }
      setVienphi({});
      setModal(false);
    }
  };

  const closeModal = () => {
    setVienphi({});
    setModal(false);
  };

  return (
    <CModal show={modal} onClose={closeModal}>
      <CModalHeader closeButton>
        <CModalTitle>Update Vienphi</CModalTitle>
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
                value={vienphi.hosobenhnhan || ""}
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
                value={formatInputDate(vienphi.ngaydong) || ""}
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
                value={vienphi.sotien || 0}
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

export default ModalVienphi;

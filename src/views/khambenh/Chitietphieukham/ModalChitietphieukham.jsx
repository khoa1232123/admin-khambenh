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
  createChitietphieukham,
  getBenhnhans,
  updateChitietphieukham,
} from "src/redux/action-creators";

const ModalChitietphieukham = ({ modal, setModal, oldChitietphieukham }) => {
  const dispatch = useDispatch();

  // const { benhs } = useSelector((state) => state.benh);
  const { phieukhambenhs } = useSelector((state) => state.phieukhambenh);
  const { toathuocs } = useSelector((state) => state.toathuoc);
  const { bacsis } = useSelector((state) => state.bacsi);

  useEffect(() => {
    // dispatch(getBenhs());
  }, [dispatch]);

  const [chitietphieukham, setChitietphieukham] = useState({});

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setChitietphieukham({ ...chitietphieukham, [name]: value });
  };

  useEffect(() => {
    if (oldChitietphieukham) {
      setChitietphieukham(oldChitietphieukham);
    }
  }, [oldChitietphieukham]);

  const handleClick = () => {
    console.log({ chitietphieukham, oldChitietphieukham });
    if (chitietphieukham.ten !== "") {
      if (Object.keys(oldChitietphieukham).length === 0) {
        chitietphieukham["mso"] = randomMaso("xn");

        dispatch(createChitietphieukham(chitietphieukham));
      } else {
        dispatch(updateChitietphieukham(chitietphieukham));
      }
      setChitietphieukham({});
      setModal(false);
    }
  };

  const closeModal = () => {
    setChitietphieukham({});
    setModal(false);
  };

  return (
    <CModal show={modal} onClose={closeModal}>
      <CModalHeader closeButton>
        <CModalTitle>Update Chitietphieukham</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Hồ sơ bệnh nhân</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CSelect
                id="hosobenhnhan"
                name="hosobenhnhan"
                value={chitietphieukham.hosobenhnhan || ""}
                onChange={handleChange}
              >
                {/* {renderOptions(benhnhans)} */}
              </CSelect>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Ngày Nhập viện</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ngayNhap"
                type="date"
                name="ngayNhap"
                placeholder="Ngày Nhập Viện"
                value={formatInputDate(chitietphieukham.ngayNhap) || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Ngày Xuất viện</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ngayXuat"
                type="date"
                name="ngayXuat"
                placeholder="Ngày Xuất Viện"
                value={formatInputDate(chitietphieukham.ngayXuat) || ""}
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

export default ModalChitietphieukham;

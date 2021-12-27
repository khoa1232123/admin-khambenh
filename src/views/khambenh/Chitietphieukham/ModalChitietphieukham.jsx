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
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatInputDate, randomMaso } from "src/helpers";
import { convertPhieukham, renderOptions } from "src/helpers/renderOptions";
import {
  createChitietphieukham,
  getBenhs,
  updateChitietphieukham,
} from "src/redux/action-creators";
import { getBacsis } from "src/redux/action-creators/bacsiActions";
import { getPhieukhambenhs } from "src/redux/action-creators/phieukhambenhActions";
import { getToathuocs } from "src/redux/action-creators/toathuocActions";

const ModalChitietphieukham = ({ modal, setModal, oldChitietphieukham }) => {
  const dispatch = useDispatch();

  const { benhs } = useSelector((state) => state.benh);
  const { phieukhambenhs } = useSelector((state) => state.phieukhambenh);
  const { toathuocs } = useSelector((state) => state.toathuoc);
  const { bacsis } = useSelector((state) => state.bacsi);

  const [chitietbenh, setChitietbenh] = useState([{}]);

  useEffect(() => {
    dispatch(getBenhs());
    dispatch(getToathuocs());
    dispatch(getBacsis());
    dispatch(getPhieukhambenhs());
  }, [dispatch]);

  console.log(phieukhambenhs);

  const [chitietphieukham, setChitietphieukham] = useState({});

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setChitietphieukham({ ...chitietphieukham, [name]: value });
  };

  const handleChangeMulti = (e, index) => {
    console.log(e);
    let newChitiet = [...chitietbenh];
    let name = e.target.name;
    let value = e.target.value;
    newChitiet[index][name] = value;

    setChitietbenh(newChitiet);
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

  const addBenh = () => {
    setChitietbenh([...chitietbenh, { benh: "" }]);
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
              <CLabel htmlFor="text-input">Phiếu khám bệnh</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CSelect
                id="phieukhambenh"
                name="phieukhambenh"
                value={chitietphieukham.phieukhambenh || ""}
                onChange={handleChange}
              >
                {renderOptions(convertPhieukham(phieukhambenhs))}
              </CSelect>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Toa thuốc</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CSelect
                id="toathuoc"
                name="toathuoc"
                value={chitietphieukham.toathuoc || ""}
                onChange={handleChange}
              >
                {renderOptions(toathuocs)}
              </CSelect>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Bác sĩ</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CSelect
                id="bacsi"
                name="bacsi"
                value={chitietphieukham.bacsi || ""}
                onChange={handleChange}
              >
                {renderOptions(bacsis)}
              </CSelect>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Danh sách thuốc</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              {chitietbenh.map((item, index) => (
                <CRow key={index}>
                  <CCol xs="12" md="12">
                    <CSelect
                      name="benh"
                      value={(item.benh && item.benh._id) || item.benh || ""}
                      onChange={(e) => handleChangeMulti(e, index)}
                    >
                      {renderOptions(benhs)}
                    </CSelect>
                  </CCol>

                  <CCol xs="12" md="12">
                    <br />
                  </CCol>
                </CRow>
              ))}
              <CCol xs="12" md="12">
                <CButton type="button" color="success" onClick={addBenh}>
                  Thêm Bệnh
                </CButton>
              </CCol>
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

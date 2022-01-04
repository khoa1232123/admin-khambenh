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
  CSelect,
  CTextarea,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomMaso } from "src/helpers";
import { convertPhieukham, renderOptions } from "src/helpers/renderOptions";
import {
  createChitietphieukham,
  getBacsis,
  getPhieukhambenhs,
  updateChitietphieukham,
} from "src/redux/action-creators";

const ModalChitietphieukham = ({ modal, setModal, oldChitietphieukham }) => {
  const dispatch = useDispatch();

  const { phieukhambenhs } = useSelector((state) => state.phieukhambenh);
  const { bacsis } = useSelector((state) => state.bacsi);

  useEffect(() => {
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
    <CModal show={modal} onClose={closeModal} size="lg">
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
                value={
                  (chitietphieukham.phieukhambenh &&
                    chitietphieukham.phieukhambenh._id) ||
                  chitietphieukham.phieukhambenh ||
                  ""
                }
                onChange={handleChange}
              >
                {renderOptions(convertPhieukham(phieukhambenhs))}
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
                value={
                  (chitietphieukham.bacsi && chitietphieukham.bacsi._id) ||
                  chitietphieukham.bacsi ||
                  ""
                }
                onChange={handleChange}
              >
                {renderOptions(bacsis)}
              </CSelect>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Triệu chứng</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CTextarea
                id="trieuchung"
                name="trieuchung"
                rows={5}
                placeholder="Triệu chứng"
                value={chitietphieukham.trieuchung || ""}
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

export default ModalChitietphieukham;

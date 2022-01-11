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
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convertPhieuDKKB, renderOptions } from "src/helpers/renderOptions";
import {
  createChitietphieukham,
  getPdkkbs,
  getPhieukhambenhs,
  updateChitietphieukham,
} from "src/redux/action-creators";

const ModalChitietphieukham = ({ modal, setModal, bacsi }) => {
  const dispatch = useDispatch();

  const { phieukhambenhs } = useSelector((state) => state.phieukhambenh);
  const { pdkkbs } = useSelector((state) => state.pdkkb);

  console.log(pdkkbs);

  useEffect(() => {
    dispatch(getPhieukhambenhs());
    dispatch(getPdkkbs());
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
    if (bacsi._id) {
      setChitietphieukham({ bacsi: bacsi._id });
    }
  }, [bacsi]);

  const handleClick = () => {
    console.log({ chitietphieukham });
    if (chitietphieukham) {
      dispatch(createChitietphieukham(chitietphieukham));
    } else {
      dispatch(updateChitietphieukham(chitietphieukham));
    }
    setChitietphieukham({});
    setModal(false);
  };

  const closeModal = () => {
    setChitietphieukham({});
    setModal(false);
  };

  return (
    <CModal show={modal} onClose={closeModal} size="lg">
      <CModalHeader closeButton>
        <CModalTitle>Tạo phiếu khám</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Phiếu khám bệnh</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              {pdkkbs && (
                <CSelect
                  id="hosobenhnhan"
                  name="hosobenhnhan"
                  value={""}
                  onChange={handleChange}
                >
                  {renderOptions(convertPhieuDKKB(pdkkbs))}
                </CSelect>
              )}
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

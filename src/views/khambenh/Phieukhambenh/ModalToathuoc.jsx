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
import { useParams } from "react-router-dom";
import { formatInputDate, randomMaso } from "src/helpers";
import { renderOptions } from "src/helpers/renderOptions";
import {
  updateToathuoc,
  getThuocs,
  getChitietphieukham,
  updateTTChitietphieukham,
} from "src/redux/action-creators";

const ModalToathuoc = ({ modal, setModal, oldToathuoc, chitietphieukham }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { thuocs } = useSelector((state) => state.thuoc);

  useEffect(() => {
    dispatch(getThuocs());
  }, [dispatch]);

  console.log(oldToathuoc);

  const [toathuoc, setToathuoc] = useState({});

  const [chitiettoathuoc, setChitiettoathuoc] = useState([
    { thuoc: "", soluong: 0 },
  ]);

  const handleChange = (e) => {
    console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    setToathuoc({ ...toathuoc, [name]: value });
  };

  const handleChangeMulti = (e, index) => {
    console.log(e);
    let newChitiet = [...chitiettoathuoc];
    let name = e.target.name;
    let value = e.target.value;
    if (name === "soluong") {
      newChitiet[index][name] = Number(value);
    } else {
      newChitiet[index][name] = value;
    }
    setChitiettoathuoc(newChitiet);
  };

  useEffect(() => {
    if (Object.keys(oldToathuoc).length !== 0) {
      setToathuoc(oldToathuoc);
      setChitiettoathuoc([...oldToathuoc.chitiet]);
    }
  }, [oldToathuoc]);

  const handleClick = () => {
    console.log({ toathuoc, oldToathuoc, chitiettoathuoc });
    toathuoc["chitiet"] = chitiettoathuoc;
    if (Object.keys(oldToathuoc).length === 0) {
      toathuoc["mso"] = randomMaso("tt");
      dispatch(updateTTChitietphieukham({ toathuoc, chitietphieukham }));
      dispatch(getChitietphieukham(id));
    } else {
      dispatch(updateToathuoc(toathuoc));
      dispatch(getChitietphieukham(id));
    }
    setToathuoc({});
    setChitiettoathuoc([{ thuoc: "", soluong: 0 }]);
    setModal(false);
  };

  const addThuoc = () => {
    setChitiettoathuoc([...chitiettoathuoc, { thuoc: "", soluong: 0 }]);
  };

  const closeModal = () => {
    setToathuoc({});
    setChitiettoathuoc([{ thuoc: "", soluong: 0 }]);
    setModal(false);
  };

  const handleRemoveThuoc = (e, index) => {
    console.log(chitiettoathuoc);
    let newChitiet = [...chitiettoathuoc];
    newChitiet.splice(index, 1);
    setChitiettoathuoc(newChitiet);
  };

  return (
    <CModal show={modal} onClose={closeModal} size="lg">
      <CModalHeader closeButton>
        <CModalTitle>Toathuoc</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Ngày lập</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ngaylap"
                type="date"
                name="ngaylap"
                placeholder="Ngày lập"
                value={formatInputDate(toathuoc.ngaylap) || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Danh sách thuốc</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              {chitiettoathuoc.map((item, index) => (
                <CRow key={index}>
                  <CCol xs="7" md="7">
                    <CSelect
                      name="thuoc"
                      value={(item.thuoc && item.thuoc._id) || item.thuoc || ""}
                      onChange={(e) => handleChangeMulti(e, index)}
                    >
                      {renderOptions(thuocs)}
                    </CSelect>
                  </CCol>
                  <CCol xs="3" md="3">
                    <CInput
                      name="soluong"
                      type="number"
                      value={item.soluong || 0}
                      onChange={(e) => handleChangeMulti(e, index)}
                    />
                  </CCol>
                  <CCol xs="2" md="2">
                    <CButton
                      color="danger"
                      onClick={(e) => handleRemoveThuoc(e, index)}
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
                <CButton type="button" color="success" onClick={addThuoc}>
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

export default ModalToathuoc;

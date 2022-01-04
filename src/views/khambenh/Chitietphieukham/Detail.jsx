import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getChitietphieukham } from "src/redux/action-creators";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import ModalToathuoc from "./ModalToathuoc";
import ModalChitietbenh from "./ModalChitietbenh";

const Detail = () => {
  const { id } = useParams();
  const [modalTT, setModalTT] = useState(false);
  const [modalCB, setModalCB] = useState(false);

  const dispatch = useDispatch();
  const { chitietphieukham } = useSelector((state) => state.chitietphieukham);
  console.log(chitietphieukham);

  const handleClickTT = () => {
    setModalTT(true);
  };

  const handleClickCB = () => {
    setModalCB(true);
  };

  useEffect(() => {
    dispatch(getChitietphieukham(id));
  }, [dispatch, id]);
  if (!chitietphieukham) {
    return <div>No data</div>;
  } else {
    return (
      <>
        <CRow>
          <CCol xs="12" lg="12">
            <CCard>
              <CCardHeader
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>Detail Chi tiết phiếu khám</span>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs={2}>Mã số:</CCol>
                  <CCol xs={10}>
                    {chitietphieukham.mso && chitietphieukham.mso}
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Bác sĩ:</CCol>
                  <CCol xs={10}>
                    {chitietphieukham.bacsi && chitietphieukham.bacsi.ten}
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Phiếu khám:</CCol>
                  <CCol xs={10}>
                    {chitietphieukham.phieukhambenh &&
                      chitietphieukham.phieukhambenh.mso}{" "}
                    -{" "}
                    {chitietphieukham.phieukhambenh &&
                      chitietphieukham.phieukhambenh.hosobenhnhan.mso +
                        " - " +
                        chitietphieukham.phieukhambenh.hosobenhnhan.ten}
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Triệu Chứng:</CCol>
                  <CCol xs={10}>
                    {chitietphieukham.trieuchung && chitietphieukham.trieuchung}
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Danh sách Bệnh:</CCol>
                  <CCol xs={10}>
                    <CCard style={{ paddingBottom: "0px", marginTop: "20px" }}>
                      <CCardHeader
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>Danh sách Bệnh:</span>
                        <CButton color="success" onClick={handleClickCB}>
                          Add Post
                        </CButton>
                      </CCardHeader>
                      <CCardBody style={{ paddingBottom: "0px" }}>
                        <CDataTable
                          style={{ marginBottom: "0px" }}
                          items={
                            chitietphieukham.chitiet && chitietphieukham.chitiet
                          }
                          fields={["Mã Số", "Tên Bệnh"]}
                          striped
                          itemsPerPage={10}
                          pagination
                          scopedSlots={{
                            "Mã Số": (item) => (
                              <td>{item.benh && item.benh.mso}</td>
                            ),
                            "Tên Bệnh": (item) => (
                              <td>{item.benh && item.benh.ten}</td>
                            ),
                          }}
                        />
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={12}>
                    <CCard style={{ paddingBottom: "0px", marginTop: "20px" }}>
                      <CCardHeader
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>
                          Toa thuốc:{" "}
                          <b>
                            {chitietphieukham.toathuoc &&
                              chitietphieukham.toathuoc.mso}
                          </b>
                        </span>
                        <CButton color="success" onClick={handleClickTT}>
                          Add Post
                        </CButton>
                      </CCardHeader>
                      <CCardBody style={{ paddingBottom: "0px" }}>
                        <CDataTable
                          style={{ marginBottom: "0px" }}
                          items={
                            chitietphieukham.toathuoc &&
                            chitietphieukham.toathuoc.chitiet
                          }
                          fields={["Mã Số", "Tên thuốc", "Số lượng"]}
                          striped
                          itemsPerPage={10}
                          pagination
                          scopedSlots={{
                            "Mã Số": (item) => (
                              <td>{item.thuoc && item.thuoc.mso}</td>
                            ),
                            "Tên thuốc": (item) => (
                              <td>{item.thuoc && item.thuoc.ten}</td>
                            ),
                            "Số lượng": (item) => <td>{item.soluong}</td>,
                          }}
                        />
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <ModalToathuoc
          modal={modalTT}
          setModal={setModalTT}
          oldToathuoc={
            (chitietphieukham.toathuoc && chitietphieukham.toathuoc) || ""
          }
          chitietphieukham={chitietphieukham}
        />
        <ModalChitietbenh
          modal={modalCB}
          setModal={setModalCB}
          oldChitietbenh={
            (chitietphieukham.chitiet && chitietphieukham.chitiet) || ""
          }
          chitietphieukham={chitietphieukham}
        />
      </>
    );
  }
};

export default Detail;

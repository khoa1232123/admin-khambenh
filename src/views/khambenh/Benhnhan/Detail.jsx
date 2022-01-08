import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatDate } from "src/helpers";
import {
  getBenhnhan,
  getPhieukhambenhByBenhnhan,
} from "src/redux/action-creators";
import ModalPhieuxetnghiem from "./ModalPhieuxetnghiem";

const Detail = () => {
  const { id } = useParams();
  const [modalPXN, setModalPXN] = useState(false);

  const dispatch = useDispatch();
  const { benhnhan } = useSelector((state) => state.benhnhan);
  const { phieukhambenhs } = useSelector((state) => state.phieukhambenh);
  const { phieuxetnghiems } = useSelector((state) => state.phieuxetnghiem);
  console.log({ benhnhan, phieukhambenhs, phieuxetnghiems });

  useEffect(() => {
    dispatch(getBenhnhan(id));
    dispatch(getPhieukhambenhByBenhnhan(id));
  }, [dispatch, id]);
  if (!benhnhan) {
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
                <span>Bệnh nhân</span>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs={2}>Mã số:</CCol>
                  <CCol xs={10}>{benhnhan.mso && benhnhan.mso}</CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Tên:</CCol>
                  <CCol xs={10}>{benhnhan.ten && benhnhan.ten}</CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Số điện thoại:</CCol>
                  <CCol xs={10}>
                    {benhnhan.sodienthoai && benhnhan.sodienthoai}
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Email:</CCol>
                  <CCol xs={10}>{benhnhan.email && benhnhan.email}</CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Địa chỉ:</CCol>
                  <CCol xs={10}>{benhnhan.diachi && benhnhan.diachi}</CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Giới tính:</CCol>
                  <CCol xs={10}>{benhnhan.gioitinh && benhnhan.gioitinh}</CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Ngày sinh:</CCol>
                  <CCol xs={10}>
                    {benhnhan.ngaysinh && formatDate(benhnhan.ngaysinh)}
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Danh sách phiếu khám bệnh:</CCol>
                  <CCol xs={10}>
                    <CCard style={{ paddingBottom: "0px", marginTop: "20px" }}>
                      <CCardHeader
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>Danh sách phiếu khám bệnh:</span>
                        <CButton color="success">Add Post</CButton>
                      </CCardHeader>
                      <CCardBody style={{ paddingBottom: "0px" }}>
                        <CDataTable
                          style={{ marginBottom: "0px" }}
                          items={phieukhambenhs}
                          fields={["Mã Số", "Ngày giờ khám"]}
                          striped
                          itemsPerPage={10}
                          pagination
                          scopedSlots={{
                            "Mã Số": (item) => <td>{item.mso}</td>,
                            "Ngày giờ khám": (item) => (
                              <td>{item && formatDate(item.ngaygiokham)}</td>
                            ),
                          }}
                        />
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Danh sách phiếu xét nghiệm:</CCol>
                  <CCol xs={10}>
                    <CCard style={{ paddingBottom: "0px", marginTop: "20px" }}>
                      <CCardHeader
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>Danh sách phiếu xét nghiệm:</span>
                        <CButton color="success">Add Post</CButton>
                      </CCardHeader>
                      <CCardBody style={{ paddingBottom: "0px" }}>
                        <CDataTable
                          style={{ marginBottom: "0px" }}
                          items={phieukhambenhs}
                          fields={["Mã Số", "Ngày giờ khám"]}
                          striped
                          itemsPerPage={10}
                          pagination
                          scopedSlots={{
                            "Mã Số": (item) => <td>{item.mso}</td>,
                            "Ngày giờ khám": (item) => (
                              <td>{item && formatDate(item.ngaygiokham)}</td>
                            ),
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
        <ModalPhieuxetnghiem
          modal={modalPXN}
          setModal={setModalPXN}
          oldPhieuxetnghiem
          benhnhan={benhnhan}
        />
      </>
    );
  }
};

export default Detail;

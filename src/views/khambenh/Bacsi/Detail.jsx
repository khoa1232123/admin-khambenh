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
import { Link, useParams } from "react-router-dom";
import { formatDate } from "src/helpers";
import { getBacsi, getBSChitietphieukham } from "src/redux/action-creators";
import ModalChitietphieukham from "./ModalChitietphieukham";

const Detail = () => {
  const { id } = useParams();

  const [modalCTPK, setModalCTPK] = useState(false);

  const dispatch = useDispatch();
  const { bacsi } = useSelector((state) => state.bacsi);
  const { chitietphieukhams } = useSelector((state) => state.chitietphieukham);
  console.log({ bacsi, chitietphieukhams });

  useEffect(() => {
    dispatch(getBacsi(id));
    dispatch(getBSChitietphieukham(id));
  }, [dispatch, id]);

  const handleClickCTKB = (e) => {
    setModalCTPK(true);
  };

  if (!bacsi) {
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
                <span>Bác sĩ</span>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs={2}>Mã số:</CCol>
                  <CCol xs={10}>{bacsi.mso && bacsi.mso}</CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Tên:</CCol>
                  <CCol xs={10}>{bacsi.ten && bacsi.ten}</CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Số điện thoại:</CCol>
                  <CCol xs={10}>{bacsi.sodienthoai && bacsi.sodienthoai}</CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Email:</CCol>
                  <CCol xs={10}>{bacsi.email && bacsi.email}</CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Địa chỉ:</CCol>
                  <CCol xs={10}>{bacsi.diachi && bacsi.diachi}</CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Giới tính:</CCol>
                  <CCol xs={10}>{bacsi.gioitinh && bacsi.gioitinh}</CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Ngày sinh:</CCol>
                  <CCol xs={10}>
                    {bacsi.ngaysinh && formatDate(bacsi.ngaysinh)}
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={2}>Khoa:</CCol>
                  <CCol xs={10}>
                    {bacsi.khoa && bacsi.khoa.mso + " - " + bacsi.khoa.ten}
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>

            <CCard>
              <CCardHeader
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>Danh sách phiếu khám bệnh:</span>
                <CButton color="success" onClick={handleClickCTKB}>
                  khám bệnh
                </CButton>
              </CCardHeader>
              <CCardBody style={{ paddingBottom: "0px" }}>
                <CDataTable
                  style={{ marginBottom: "0px" }}
                  items={chitietphieukhams}
                  fields={[
                    "Mã Số",
                    "Ngày giờ khám",
                    "Bệnh nhân",
                    "Số điện thoại",
                  ]}
                  striped
                  itemsPerPage={10}
                  pagination
                  scopedSlots={{
                    "Mã Số": (item) => (
                      <td>
                        <Link to={"/khambenh/chitietphieukham/" + item._id}>
                          {item.mso}
                        </Link>
                      </td>
                    ),
                    "Ngày giờ khám": (item) => (
                      <td>
                        {item && formatDate(item.phieukhambenh.ngaygiokham)}
                      </td>
                    ),
                    "Bệnh nhân": (item) => (
                      <td>
                        {item &&
                          item.phieukhambenh.hosobenhnhan.mso +
                            " - " +
                            item.phieukhambenh.hosobenhnhan.ten}
                      </td>
                    ),
                    "Số điện thoại": (item) => (
                      <td>
                        {item && item.phieukhambenh.hosobenhnhan.sodienthoai}
                      </td>
                    ),
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <ModalChitietphieukham
          modal={modalCTPK}
          setModal={setModalCTPK}
          bacsi={bacsi}
        />
      </>
    );
  }
};

export default Detail;

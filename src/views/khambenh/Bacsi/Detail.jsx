import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatDate } from "src/helpers";
import { getBacsi } from "src/redux/action-creators";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { bacsi } = useSelector((state) => state.bacsi);
  console.log(bacsi);

  useEffect(() => {
    dispatch(getBacsi(id));
  }, [dispatch, id]);
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
          </CCol>
        </CRow>
      </>
    );
  }
};

export default Detail;

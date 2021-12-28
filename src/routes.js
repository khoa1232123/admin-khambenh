import React from "react";
import UpdateUser from "./views/users/UpdateUser";

// Button
const Dashboard = React.lazy(() => import("./views/Dashboard"));

// Icon
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));
const CreateUser = React.lazy(() => import("./views/users/CreateUser"));

const Bacsi = React.lazy(() => import("./views/khambenh/Bacsi"));
const Khoa = React.lazy(() => import("./views/khambenh/Khoa"));
const Benhnhan = React.lazy(() => import("./views/khambenh/Benhnhan"));
const Pdkkb = React.lazy(() => import("./views/khambenh/Pdkkb"));
const Pxnv = React.lazy(() => import("./views/khambenh/Pxnv"));
const Lephi = React.lazy(() => import("./views/khambenh/Lephi"));
const Vienphi = React.lazy(() => import("./views/khambenh/Vienphi"));
const Thuoc = React.lazy(() => import("./views/khambenh/Thuoc"));
const Toathuoc = React.lazy(() => import("./views/khambenh/Toathuoc"));
const Benh = React.lazy(() => import("./views/khambenh/Benh"));
const Chitietphieukham = React.lazy(() =>
  import("./views/khambenh/Chitietphieukham")
);

const Phieuxetnghiem = React.lazy(() =>
  import("./views/khambenh/Phieuxetnghiem")
);
const Phieukhambenh = React.lazy(() =>
  import("./views/khambenh/Phieukhambenh")
);

const DetailChitietphieukham = React.lazy(() =>
  import("./views/khambenh/Chitietphieukham/Detail")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },

  { path: "/users", exact: true, name: "Users", component: Users },
  {
    path: "/users/create",
    exact: true,
    name: "Create User",
    component: CreateUser,
  },
  {
    path: "/users/update/:id",
    exact: true,
    name: "Update User",
    component: UpdateUser,
  },
  {
    path: "/users/find/:id",
    exact: true,
    name: "User Details",
    component: User,
  },
  {
    path: "/khambenh/bacsi",
    exact: true,
    name: "Bác sĩ",
    component: Bacsi,
  },
  {
    path: "/khambenh/khoa",
    exact: true,
    name: "Khoa",
    component: Khoa,
  },
  {
    path: "/khambenh/benhnhan",
    exact: true,
    name: "Bệnh nhân",
    component: Benhnhan,
  },
  {
    path: "/khambenh/phieudangkykhambenh",
    exact: true,
    name: "Phiếu đăng ký khám bệnh",
    component: Pdkkb,
  },
  {
    path: "/khambenh/phieuxuatnhapvien",
    exact: true,
    name: "Phiếu xuất nhập viện",
    component: Pxnv,
  },
  {
    path: "/khambenh/lephi",
    exact: true,
    name: "Lệ Phí",
    component: Lephi,
  },
  {
    path: "/khambenh/vienphi",
    exact: true,
    name: "Viện Phí",
    component: Vienphi,
  },
  {
    path: "/khambenh/phieuxetnghiem",
    exact: true,
    name: "Phiếu xét nghiệm",
    component: Phieuxetnghiem,
  },
  {
    path: "/khambenh/phieukhambenh",
    exact: true,
    name: "Phiếu xét nghiệm",
    component: Phieukhambenh,
  },
  {
    path: "/khambenh/thuoc",
    exact: true,
    name: "Thuốc",
    component: Thuoc,
  },
  {
    path: "/khambenh/toathuoc",
    exact: true,
    name: "Toa Thuốc",
    component: Toathuoc,
  },
  {
    path: "/khambenh/chitietphieukham",
    exact: true,
    name: "Chi tiết phiếu khám",
    component: Chitietphieukham,
  },
  {
    path: "/khambenh/chitietphieukham/detail/:id",
    exact: true,
    name: "Chi tiết phiếu khám",
    component: DetailChitietphieukham,
  },
  {
    path: "/khambenh/benh",
    exact: true,
    name: "Bệnh",
    component: Benh,
  },
];

export default routes;

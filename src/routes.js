import React from "react";
import UpdateUser from "./views/users/UpdateUser";

// Button
const Dashboard = React.lazy(() => import("./views/Dashboard"));

// Icon
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));
const CreateUser = React.lazy(() => import("./views/users/CreateUser"));

const Bacsi = React.lazy(() => import("./views/khambenh/Bacsi"));
const DetailBacsi = React.lazy(() => import("./views/khambenh/Bacsi/Detail"));

const Khoa = React.lazy(() => import("./views/khambenh/Khoa"));
const Benhnhan = React.lazy(() => import("./views/khambenh/Benhnhan"));
const DetailBenhnhan = React.lazy(() =>
  import("./views/khambenh/Benhnhan/Detail")
);
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

const DetailPhieukhambenh = React.lazy(() =>
  import("./views/khambenh/Phieukhambenh/Detail")
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
    name: "B??c s??",
    component: Bacsi,
  },
  {
    path: "/khambenh/bacsi/:id",
    exact: true,
    name: "Chi ti???t",
    component: DetailBacsi,
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
    name: "B???nh nh??n",
    component: Benhnhan,
  },
  {
    path: "/khambenh/benhnhan/:id",
    exact: true,
    name: "Chi ti???t",
    component: DetailBenhnhan,
  },
  {
    path: "/khambenh/phieudangkykhambenh",
    exact: true,
    name: "Phi???u ????ng k?? kh??m b???nh",
    component: Pdkkb,
  },
  {
    path: "/khambenh/phieuxuatnhapvien",
    exact: true,
    name: "Phi???u xu???t nh???p vi???n",
    component: Pxnv,
  },
  {
    path: "/khambenh/lephi",
    exact: true,
    name: "L??? Ph??",
    component: Lephi,
  },
  {
    path: "/khambenh/vienphi",
    exact: true,
    name: "Vi???n Ph??",
    component: Vienphi,
  },
  {
    path: "/khambenh/phieuxetnghiem",
    exact: true,
    name: "Phi???u x??t nghi???m",
    component: Phieuxetnghiem,
  },
  {
    path: "/khambenh/phieukhambenh",
    exact: true,
    name: "Phi???u x??t nghi???m",
    component: Phieukhambenh,
  },
  {
    path: "/khambenh/phieukhambenh/:id",
    exact: true,
    name: "Chi ti???t",
    component: DetailPhieukhambenh,
  },
  {
    path: "/khambenh/thuoc",
    exact: true,
    name: "Thu???c",
    component: Thuoc,
  },
  {
    path: "/khambenh/toathuoc",
    exact: true,
    name: "Toa Thu???c",
    component: Toathuoc,
  },
  {
    path: "/khambenh/chitietphieukham",
    exact: true,
    name: "Chi ti???t phi???u kh??m",
    component: Chitietphieukham,
  },
  {
    path: "/khambenh/chitietphieukham/:id",
    exact: true,
    name: "Chi ti???t phi???u kh??m",
    component: DetailChitietphieukham,
  },
  {
    path: "/khambenh/benh",
    exact: true,
    name: "B???nh",
    component: Benh,
  },
];

export default routes;

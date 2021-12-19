import React from "react";
import Categories from "./views/Categories";
import Posts, { PostForm } from "./views/Posts";
import UpdateUser from "./views/users/UpdateUser";

const Toaster = React.lazy(() =>
  import("./views/notifications/toaster/Toaster")
);

// Base
const Tables = React.lazy(() => import("./views/base/tables/Tables"));

const Breadcrumbs = React.lazy(() =>
  import("./views/base/Breadcrumbs/Breadcrumbs")
);

const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const BasicForms = React.lazy(() => import("./views/base/forms/BasicForms"));

const Jumbotrons = React.lazy(() =>
  import("./views/base/jumbotrons/Jumbotrons")
);
const ListGroups = React.lazy(() =>
  import("./views/base/list-groups/ListGroups")
);
const Navbars = React.lazy(() => import("./views/base/navbars/Navbars"));
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/base/paginations/Pagnations")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const ProgressBar = React.lazy(() =>
  import("./views/base/progress-bar/ProgressBar")
);
const Switches = React.lazy(() => import("./views/base/switches/Switches"));

const Tabs = React.lazy(() => import("./views/base/tabs/Tabs"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));

// Button
const BrandButtons = React.lazy(() => import("./views/buttons/BrandButtons"));
const ButtonDropdowns = React.lazy(() =>
  import("./views/buttons/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() => import("./views/buttons/ButtonGroups"));
const Buttons = React.lazy(() => import("./views/buttons/Buttons"));
const Charts = React.lazy(() => import("./views/Charts"));
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const CoreUIIcons = React.lazy(() => import("./views/icons/CoreUIIcons"));

// Icon
const Flags = React.lazy(() => import("./views/icons/Flags"));
const Brands = React.lazy(() => import("./views/icons/Brands"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);
const Widgets = React.lazy(() => import("./views/Widgets"));
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));
const CreateUser = React.lazy(() => import("./views/users/CreateUser"));

const Bacsi = React.lazy(() => import("./views/khambenh/Bacsi"));
const Khoa = React.lazy(() => import("./views/khambenh/Khoa"));
const Benhnhan = React.lazy(() => import("./views/khambenh/Benhnhan"));
const Pdkkb = React.lazy(() => import("./views/khambenh/Pdkkb"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/forms", name: "Forms", component: BasicForms },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/button-dropdowns",
    name: "Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/widgets", name: "Widgets", component: Widgets },

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
    path: "/categories",
    exact: true,
    name: "Categories",
    component: Categories,
  },
  {
    path: "/posts",
    exact: true,
    name: "Posts",
    component: Posts,
  },
  {
    path: "/posts/updated/:id",
    exact: true,
    name: "Post Update",
    component: PostForm,
  },
  {
    path: "/posts/create",
    exact: true,
    name: "Post Create",
    component: PostForm,
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
];

export default routes;

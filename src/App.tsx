// import React from "react";
// import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  ServicesPage,
  TomographyPage,
  HomePage,
  TeamPage,
  EmployeePage,
  ContactsPage,
  InitialAppointmentPage,
  InternalOrderPage,
  XRayPage,
  UltrasonographyPage,
  CardiogramPage,
  GastroscopyPage,
  FetalPage,
  GalleryPage,
  PricesPage,
} from "pages";
import {
  AdminAppointmentPage,
  AdminCallRequestsPage,
  AdminGalleryPage,
  AdminServicesPage,
  AdminTeamPage,
} from "adminPages";
import "./App.css";

const App = () => (
  <div className="admin-wrapper">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/tomography" element={<TomographyPage />} />
      <Route path="/services/x-ray" element={<XRayPage />} />
      <Route
        path="/services/ultrasonography"
        element={<UltrasonographyPage />}
      />
      <Route path="/services/cardiogram" element={<CardiogramPage />} />
      <Route path="/services/gastroscopy" element={<GastroscopyPage />} />
      <Route path="/services/fetal" element={<FetalPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/team/:id" element={<EmployeePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/prices" element={<PricesPage />} />
      <Route
        path="/for_patient/initial_appointment"
        element={<InitialAppointmentPage />}
      />
      <Route
        path="/for_patient/internal_order"
        element={<InternalOrderPage />}
      />
      <Route path="/admin/services" element={<AdminServicesPage />} />
      <Route path="/admin/team" element={<AdminTeamPage />} />
      <Route path="/admin/gallery" element={<AdminGalleryPage />} />
      <Route path="/admin/call-requests" element={<AdminCallRequestsPage />} />
      <Route path="/admin/appointment" element={<AdminAppointmentPage />} />
      {/* <Route path="/contacts" element={<ContactsPage />} /> */}
    </Routes>
    {/* <Routes>
      <Route
                exact
                path="/admin/signin"
                render={() => (isAuth ? <Navigate to="/admin" /> : <Auth />)}
            />
            <Route
                exact
                path={[
                    "/admin",
                    "/admin/statistics",
                    "/admin/about",
                    "/admin/catalog",
                    "/admin/news",
                    "/admin/comments",
                    "/admin/orders"
                ]}
                render={() => (isAuth ? <Home /> : <Navigate to="/admin/signin" />)}
            />
            <Route
                render={() =>
                    isAuth ? <div>Ошибка</div> : <Navigate to="/admin/signin" />
                }
            />
    </Routes> */}
  </div>
);

export default App;
// export default connect(({ admin }) => ({ isAuth: admin.isAuth }), null)(App);

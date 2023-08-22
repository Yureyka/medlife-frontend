// import React from "react";
// import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  ServicesPage,
  HomePage,
  TeamPage,
  EmployeePage,
  ContactsPage,
  InitialAppointmentPage,
  InternalOrderPage,
} from "pages";

const App = () => (
  <div className="admin-wrapper">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/team/123" element={<EmployeePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route
        path="/for_patient/initial_appointment"
        element={<InitialAppointmentPage />}
      />
      <Route
        path="/for_patient/internal_order"
        element={<InternalOrderPage />}
      />
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

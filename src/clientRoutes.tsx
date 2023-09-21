import { Route, Routes } from "react-router-dom";
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
  NewsDetailsPage,
} from "pages";

export const ClientRoutes = () => {
  return (
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
      <Route path="/news/:id" element={<NewsDetailsPage />} />
      <Route
        path="/for_patient/initial_appointment"
        element={<InitialAppointmentPage />}
      />
      <Route
        path="/for_patient/internal_order"
        element={<InternalOrderPage />}
      />
    </Routes>
  );
};

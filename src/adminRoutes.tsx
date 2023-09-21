import { useQuery } from "@tanstack/react-query";
import { UserApi } from "api";
import { useState } from "react";
import { Navigate, Route, Routes, redirect } from "react-router-dom";
import {
  AdminAppointmentPage,
  AdminAuthPage,
  AdminCallRequestsPage,
  AdminCommentsPage,
  AdminGalleryPage,
  AdminNewsPage,
  AdminServiceGroupsPage,
  AdminServicesPage,
  AdminTeamPage,
} from "adminPages";
import { Loader } from "ui";

export const AdminRoutes = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const { isFetching, isLoading, isSuccess } = useQuery(
    ["getMe"],
    UserApi.getMe,
    {
      enabled: !!localStorage.getItem("authToken") && !isAuthorized,
      onSuccess: ({ token }) => {
        localStorage.setItem("authToken", token);
        setIsAuthorized(true);
      },
      onError: () => {
        localStorage.removeItem("authToken");
        setIsAuthorized(false);
      },
    }
  );

  const handleLogin = (token: string) => {
    localStorage.setItem("authToken", token);
    setIsAuthorized(true);
  };

  if (isFetching) {
    return <Loader />;
  }

  if (!isAuthorized && !Boolean(localStorage.getItem("authToken"))) {
    return (
      <Routes>
        <Route path="/" element={<AdminAuthPage handleLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/admin" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/admin/appointment" />} />
      <Route path="/services" element={<AdminServicesPage />} />
      <Route path="/team" element={<AdminTeamPage />} />
      <Route path="/gallery" element={<AdminGalleryPage />} />
      <Route path="/call-requests" element={<AdminCallRequestsPage />} />
      <Route path="/appointment" element={<AdminAppointmentPage />} />
      <Route path="/news" element={<AdminNewsPage />} />
      <Route path="/groups" element={<AdminServiceGroupsPage />} />
      <Route path="/comments" element={<AdminCommentsPage />} />
    </Routes>
  );
};

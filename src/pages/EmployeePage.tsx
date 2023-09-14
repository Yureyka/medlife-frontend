import React from "react";
import { EmployeeInfo } from "blocks";
import { PageLayout } from "./PageLayout";

import testImage from "assets/images/x-ray.jpg";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { TeamApi } from "api";

export const EmployeePage: React.FC = () => {
  const { id } = useParams();

  const { data } = useQuery(["getDoctorInfo"], () =>
    TeamApi.getDoctorInfo(id!)
  );

  return (
    <PageLayout title={data?.fullName!}>
      <EmployeeInfo
        experienceYears={data?.experience!}
        experience={data?.experienceDetails!}
        image={`http://localhost:3004/${data?.image}`}
      />
    </PageLayout>
  );
};

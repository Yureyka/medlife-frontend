import React from "react";
import { NewsDetails } from "blocks";
import { PageLayout } from "./PageLayout";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { NewsApi } from "api";
import { BACKEND_URL } from "helpers";
import moment from "moment";

export const NewsDetailsPage: React.FC = () => {
  const { id } = useParams();

  const { data } = useQuery(["getNewsById"], () => NewsApi.getNewsById(id!));

  return (
    <PageLayout title="Новость">
      <NewsDetails
        title={data?.title!}
        description={data?.description!}
        image={`${BACKEND_URL}/${data?.image}`}
        createdAt={moment(data?.createdAt!).format("DD MMM YYYY")}
      />
    </PageLayout>
  );
};

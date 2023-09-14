import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { Container } from "ui";

import styles from "./InfiniteScroll.module.scss";
import { IInfiniteScroll } from "interfaces";

export const InfiniteScroll: React.FC<IInfiniteScroll> = ({
  size = 10,
  list,
  fetchPage,
}) => {
  const [page, setPage] = useState(1);

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery("items", ({ pageParam = 1 }) => fetchPage(pageParam), {
      getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
    });

  if (error) {
    return <div>Error loading data</div>;
  }

  const items = data?.pages.flatMap((page) => page.data) || [];

  return (
    <Container>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            {item.text}
          </li>
        ))}
      </ul>
      {hasNextPage && (
        <button
          className={styles.loadMoreButton}
          onClick={() => {
            fetchNextPage();
            setPage((prevPage) => prevPage + 1);
          }}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </Container>
  );
};

import React from "react";
import "rc-table/assets/index.css";
import "./Table.scss";

import Table from "rc-table";
import { ITable } from "interfaces";

export const TableWrapper: React.FC<ITable<any>> = ({
  columns,
  data,
  onRowClick,
  formatter,
}) => {
  return (
    <div className="table">
      <Table
        tableLayout="fixed"
        columns={columns}
        data={formatter ? formatter(data) : data}
        rowKey={(entry) => entry._id}
        onRow={(_, index) => ({
          onClick: () => onRowClick(data[index!]),
        })}
      />
    </div>
  );
};

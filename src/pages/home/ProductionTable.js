import React, { useEffect, useState } from "react";
import CommonTable from "../../components/ui/CommonTable";
import { v4 as uuidv4 } from "uuid";

const ProductionTable = ({ data, columns, nextHandler, prevHandler, currentPage }) => {
console.log(data)
  const buildItems = (__items) => {
    return (
      __items &&
      __items.length > 0 &&
      __items.map((item, index) => (
        <tr key={index}>
          <td>{uuidv4()}</td>
          <td>{item?.year}</td>
          <td>{item?.month}</td>
          <td>{item?.wellapi}</td>
          <td>{item?.boreid}</td>
          <td>{item?.compsubid}</td>
          <td>{item?.bhp}</td>
          <td>{item?.qo}</td>
          <td>{item?.qw}</td>
          <td>{item?.qg}</td>
          <td>{item?.qs}</td>
          <td>{item?.compl}</td>
          <td>{item?.flowdays}</td>
          <td>{item?.pressure}</td>
          <td>{item?.status}</td>
        </tr>
      ))
    );
  };
  
  console.log(buildItems(data))

  return (
    <>
      <CommonTable
        nextHandler={nextHandler}
        prevHandler={prevHandler}
        columns={columns}
        currentPage={currentPage}
        items={buildItems(data)}
      />
    </>
  );
};

export default ProductionTable;

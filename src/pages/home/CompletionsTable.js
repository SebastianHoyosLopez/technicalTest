import React, { useState } from "react";
import CommonTable from "../../components/ui/CommonTable";
import { v4 as uuidv4 } from "uuid";

const CompletionsTable = ({
  data,
  columns,
  nextHandler,
  prevHandler,
  currentPage,
  setDataPagesitems,
}) => {
  const buildItems = (__items) => {
    return (
      __items &&
      __items.length > 0 &&
      __items.map((item, index) => ({
        id: uuidv4(),
        wellname: item.wellname,
        wellapi: item.wellapi,
        boreid: item.boreid,
        compsubid: item.compsubid,
        type: item.type,
        x: item.x,
        y: item.y,
        TD: item.td,
        ishorizontal: item.ishorizontal,
        reservoir: item.reservoir,
        faultblock: item.faultblock,
        compartment: item.compartment,
        maxbhp: item.maxbhp,
        long: item.long,
        lat: item?.lat,
      }))

      // <tr key={index}>
      //   <td>
      //     <button className="btn btn-secondary">Edit</button>
      //     <button className="btn btn-secondary">Delete</button>
      //   </td>
      //   <td>{uuidv4()}</td>
      //   <td>{item.wellname}</td>
      //   <td>{item?.wellapi}</td>
      //   <td>{item?.boreid}</td>
      //   <td>{item?.compsubid}</td>
      //   <td>{item?.type}</td>
      //   <td>{item?.x}</td>
      //   <td>{item?.y}</td>
      //   <td>{item?.td}</td>
      //   <td>{item?.ishorizontal}</td>
      //   <td>{item?.reservoir}</td>
      //   <td>{item?.faultblock}</td>
      //   <td>{item?.compartment}</td>
      //   <td>{item?.maxbhp}</td>
      //   <td>{item?.long}</td>
      //   <td>{item?.lat}</td>
      // </tr>
    );
  };

  console.log(buildItems(data));
  return (
    <>
      <CommonTable
        nextHandler={nextHandler}
        prevHandler={prevHandler}
        columns={columns}
        currentPage={currentPage}
        itemsCompletions={buildItems(data)}
      />
    </>
  );
};

export default CompletionsTable;

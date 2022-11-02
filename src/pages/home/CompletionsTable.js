
import React from "react";
import CommonTable from "../../components/ui/CommonTable";
import { v4 as uuidv4 } from "uuid";

const CompletionsTable = ({ data, columns, nextHandler, prevHandler, currentPage, setDataPagesitems }) => {
// console.log(data)
  const buildItems = (__items) => {
    return (
      __items &&
      __items.length > 0 &&
      __items.map((item) => (
        <tr key={item.wellname}>
          <td>{uuidv4()}</td>
          <td>{item?.wellname}</td>
          <td>{item?.wellapi}</td>
          <td>{item?.boreid}</td>
          <td>{item?.compsubid}</td>
          <td>{item?.type}</td>
          <td>{item?.x}</td>
          <td>{item?.y}</td>
          <td>{item?.td}</td>
          <td>{item?.ishorizontal}</td>
          <td>{item?.reservoir}</td>
          <td>{item?.faultblock}</td>
          <td>{item?.compartment}</td>
          <td>{item?.maxbhp}</td>
          <td>{item?.long}</td>
          <td>{item?.lat}</td>
        </tr>
      ))
    );
  };

  // setDataPagesitems(buildItems(data))
  console.log(data)

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

export default CompletionsTable;

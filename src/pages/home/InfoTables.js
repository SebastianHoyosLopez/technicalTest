import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import CompletionsTable from "./CompletionsTable";
import ProductionTable from "./ProductionTable";

const InfoTables = ({ columns, columns2 }) => {
  const ITEMS_PER_PAGE = 10;
  const [dataCsv, setDataCsv] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // console.log(dataPagesitems)

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g),
  };

  const handleFile = (data, fileInfo) => {
    setTotalData(data);
    // console.log(data, fileInfo);
    if(data.length > 0){
      setCurrentPage(currentPage + 1)
    }
    setDataCsv(data.splice(0, ITEMS_PER_PAGE));
    console.log(dataCsv)
  };

  const nextHandler = () => {
    const totalElements = totalData.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE;
    // console.log(nextPage, firstIndex);
    if (firstIndex === totalElements) return;
    setDataCsv(totalData.splice(totalData[firstIndex], ITEMS_PER_PAGE));
    setCurrentPage(nextPage);

    console.log("next");
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;

    const firstIndex = prevPage * ITEMS_PER_PAGE;
    console.log(prevPage, firstIndex);

    setDataCsv(totalData.splice(totalData[firstIndex], ITEMS_PER_PAGE));
    setCurrentPage(prevPage);

    console.log("prev");
  };
  return (
    <>
      <CSVReader
        inputId="1"
        cssClass="react-csv-input"
        label="Select CSV with secret Death Star statistics"
        onFileLoaded={handleFile}
        parserOptions={papaparseOptions}
      />
      {columns && (
        <>
          <ProductionTable
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            currentPage={currentPage}
            data={dataCsv}
            columns={columns}
          />
        </>
      )}
      {columns2 && (
        <div className="row">
          <div className="col-6">
            <CompletionsTable
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              currentPage={currentPage}
              data={dataCsv}
              columns={columns2}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default InfoTables;

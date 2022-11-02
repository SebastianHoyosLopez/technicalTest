import React, { useState } from "react";
import file from "../../production.csv";
import CompletionsTable from "./CompletionsTable";
import InfoTables from "./InfoTables";

const Home = () => {
  return (
    <>
      <label htmlFor="csvInput" style={{ display: "block" }}>
        tabla uno production
      </label>
      <div className="container">
        <InfoTables
          columns={[
            "id",
            "Year",
            "Month",
            "wellAPI",
            "boreID",
            "compSubId",
            "BHP",
            "Qo",
            "Qw",
            "Qg",
            "Qs",
            "CompL",
            "FlowDays",
            "Pressure",
            "Status",
          ]}
        />
      </div>
      <label htmlFor="csvInput" style={{ display: "block" }}>
        tabla dos Completions
      </label> 
      <div className="container">
        <InfoTables
          columns2={[
            "id",
            "wellName",
            "wellAPI",
            "boreID",
            "compSubld",
            "Type",
            "X",
            "Y",
            "TD",
            "isHorizontal",
            "reservoir",
            "faultBlock",
            "compartment",
            "maxBHP",
            "long",
            "lat",
          ]}
        />
      </div>
    </>
  );
};

export default Home;

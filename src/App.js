import React from "react";
import "./App.css";
import { useState } from "react";
import { BillInputFields } from "./components/BillInputFields";
import { SalaryInputs } from "./components/SalaryInputs";
import { TotalSumContext } from "./context/TotalSumContext";
import { StyledAppWrapper } from "./Styles/Styling";

function App() {
  const [totalBillSum, setTotalBillSum] = useState();

  return (
    <>
      <TotalSumContext.Provider value={{ totalBillSum, setTotalBillSum }}>
        <StyledAppWrapper>
          <BillInputFields />
          <SalaryInputs />
        </StyledAppWrapper>
      </TotalSumContext.Provider>
    </>
  );
}

export default App;

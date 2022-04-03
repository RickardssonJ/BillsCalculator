import React, { useContext, useState } from "react"
import { TotalSumContext } from "../context/TotalSumContext"
import {
  StyledSpan,
  StyledCountButton,
  StyledSalaryDiv,
} from "../Styles/Styling"

export const Salarys = ({ salaryOne, salaryTwo }) => {
  const { totalBillSum } = useContext(TotalSumContext)
  const [left, setLeft] = useState()
  const totalSalary = salaryOne + salaryTwo
  let lefAfterBillsPaid = 0

  const leftForEachPerson = () => {
    lefAfterBillsPaid = totalSalary - totalBillSum
    setLeft(lefAfterBillsPaid / 2)
  }
  return (
    <StyledSalaryDiv>
      <div>
        {totalBillSum ? <p>{`Räkningar totalt = ${totalBillSum}`}</p> : null}
      </div>
      <div>
        {totalSalary ? <div>{`Löner totalt = ${totalSalary}`}</div> : null}
      </div>
      <StyledCountButton onClick={leftForEachPerson}>Räkna</StyledCountButton>
      {left ? (
        <div>
          {`Kvar per person = ${totalSalary} - ${totalBillSum} /2 = `}
          <StyledSpan>{left}:-</StyledSpan>
        </div>
      ) : null}
    </StyledSalaryDiv>
  )
}

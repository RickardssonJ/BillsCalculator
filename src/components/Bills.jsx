import React, { useContext } from "react"
import { TotalSumContext } from "../context/TotalSumContext"
import {
  StyledBillsWrapper,
  StyledBillsDiv,
  StyledP,
  StyledPriceWrapper,
  StyledButton,
  StyledH3,
} from "../Styles/Styling"

export const Bills = ({ billsArray, setBillsArray }) => {
  const { setTotalBillSum } = useContext(TotalSumContext)

  const handleOnClick = (id) => {
    setBillsArray(billsArray.filter((obj) => obj.id !== id))
  }

  return (
    <StyledBillsWrapper>
      <StyledBillsDiv>
        <h3>Företag</h3>
        {billsArray.map((obj) => {
          return <StyledP>{obj.company}</StyledP>
        })}
      </StyledBillsDiv>
      <StyledBillsDiv>
        <h3>Pris</h3>
        {billsArray.map((obj) => {
          return (
            <StyledPriceWrapper>
              <div>
                <StyledP>{`${obj.price}:-`}</StyledP>{" "}
              </div>
              <div>
                <StyledButton onClick={() => handleOnClick(obj.id)}>
                  Tabort
                </StyledButton>
              </div>
            </StyledPriceWrapper>
          )
        })}
        <StyledH3>Totalt kosnad</StyledH3>
        {billsArray.reduce((sum, obj) => {
          const totalSum = Number(sum) + Number(obj.price)
          setTotalBillSum(totalSum)
          return totalSum
        }, 0)}
      </StyledBillsDiv>
    </StyledBillsWrapper>
  )
}

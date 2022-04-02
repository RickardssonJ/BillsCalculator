import React from "react"
import {
  StyledWrapper,
  StyledBillsDiv,
  StyledP,
  StyledPriceWrapper,
  StyledButton,
  StyledH3,
} from "../Styles/Styling"

export const Bills = ({ billsArray, setBillsArray }) => {
  const handleOnClick = (id) => {
    setBillsArray(billsArray.filter((obj) => obj.id !== id))
    console.log(id)
  }
  console.log(billsArray)
  return (
    <StyledWrapper>
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
          return totalSum
        }, 0)}
      </StyledBillsDiv>
    </StyledWrapper>
  )
}

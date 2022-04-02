import React from "react"
import { StyledSalaryInputDiv } from "../Styles/Styling"
import { Salarys } from "./Salarys"

export const SalaryInputs = () => {
  const handelOnSubmit = (e) => {
    e.preventDefault()

    console.log("Salary")
  }
  return (
    <>
      <StyledSalaryInputDiv>
        <form onSubmit={handelOnSubmit}>
          <label>
            Lön ett:
            <input type="text" name="company" />
          </label>
          <label>
            Lön 2:
            <input type="number" name="price" />
          </label>
          <input type="submit" value="Lägg till" />
        </form>
      </StyledSalaryInputDiv>
      <Salarys />
    </>
  )
}

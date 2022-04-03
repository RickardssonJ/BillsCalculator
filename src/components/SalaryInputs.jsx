import React, { useState } from "react"
import { StyledSalaryInputDiv, StyledInputField } from "../Styles/Styling"
import { Salarys } from "./Salarys"

export const SalaryInputs = () => {
  const [salaryOne, setSalaryOne] = useState()
  const [salaryTwo, setSalaryTwo] = useState()

  const handelOnSubmit = (e) => {
    e.preventDefault()

    setSalaryOne(Number(e.target.salaryOne.value))
    setSalaryTwo(Number(e.target.salaryTwo.value))

    e.target.salaryOne.value = ""
    e.target.salaryTwo.value = ""
  }

  return (
    <>
      <StyledSalaryInputDiv>
        <form onSubmit={handelOnSubmit}>
          <div>
            <label>
              <span>Lön ett: </span>
              <StyledInputField type="number" name="salaryOne" />
            </label>
          </div>
          <div>
            <label>
              <span>Lön två: </span>
              <StyledInputField type="number" name="salaryTwo" />
            </label>
            <input type="submit" value="Lägg till löner" />
          </div>
        </form>
      </StyledSalaryInputDiv>
      <Salarys salaryOne={salaryOne} salaryTwo={salaryTwo} />
    </>
  )
}

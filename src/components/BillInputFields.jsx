import React, { useState } from "react"
import { Bills } from "./Bills"
import { StyledBillsInputDiv } from "../Styles/Styling"

let id = 0
export const BillInputFields = () => {
  const [billsArray, setBillsArray] = useState([])
  const handelOnSubmit = (e) => {
    e.preventDefault()
    let company = e.target.company.value
    let price = e.target.price.value

    const billObj = {
      company: company,
      price: price,
      id: id,
    }

    setBillsArray([...billsArray, billObj])

    id++
    e.target.company.value = ""
    e.target.price.value = ""
  }

  return (
    <>
      <StyledBillsInputDiv>
        <form onSubmit={handelOnSubmit}>
          <label>
            Företag:
            <input type="text" name="company" />
          </label>
          <label>
            Pris:
            <input type="number" name="price" />
          </label>
          <input type="submit" value="Lägg till" />
        </form>
      </StyledBillsInputDiv>
      <Bills billsArray={billsArray} setBillsArray={setBillsArray} />
    </>
  )
}

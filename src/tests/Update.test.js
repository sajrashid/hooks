import { fireEvent, render, screen } from '@testing-library/react'

import React from 'react'
import Table from "../components/react-dj-table/index";
import data from "../data.json";

const options = {
    editable: true,
    pageable: true,
    dateCols: [{ PurchaseDate: 'en-GB' }]
}
const div = document.createElement("DIV");
document.body.appendChild(div);

const setup = () => {

    const { getByText } = render(<Table json={data} options={options} />)

    expect(getByText(/CreditCards/i)).toBeInTheDocument()
    fireEvent.click(getByText('Vantage'))
    const input = screen.getByDisplayValue("Vantage")

    return {
        input,
        getByText,
    }
}

it('shows if row value has been updated', () => {
    const { input, getByText } = setup()
    fireEvent.change(input, { target: { value: 'abc' } })
    fireEvent.click(getByText('update'))
    console.log(input.value)
    expect(input.value).toBe('abc')
})
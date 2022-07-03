import React from "react"

export default function Table({ list }) {
  return (
    <>
      <table width="100%" className="tble">
        <thead>
          <tr className="content">
            <td className="font-bold">Product Name</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        
        {list.map(({ id, description, qunatity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="body">
                <td>{description}</td>
                <td>{qunatity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
         
      </table>

      <div>
       
      </div>
    </>
  )
}
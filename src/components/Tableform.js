import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"
import React from "react"
import { useEffect ,useState } from "react"
export default function TableForm({ description,
  setDescription,
  qunatity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList}){
    const [isEditing, setIsEditing] = useState(false)
  const handlesubmit=(e)=>{
    e.preventDefault();
    if (!description || !qunatity || !price) {
      alert("Please fill in all inputs")
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        qunatity,
        price,
        amount,
      }
      setDescription("")
      setQuantity("")
      setPrice("")
      setAmount("")
      setList([...list, newItems])
      setIsEditing(false)
    }
  }
  
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(qunatity * price)
    }

    calculateAmount(amount)
  }, [amount, price, qunatity, setAmount])
  
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)
  }
  // Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id))
  return (
    <>
    <form onSubmit={handlesubmit}>
    <div className="descrip">
    <label htmlFor="description">Product Name</label>
    <input type="text" name="description" value={description} id="description" onChange={(e)=>setDescription(e.target.value)}/>
    </div>
    <div className="values">
      <div className="valueone">
    <label htmlFor="qunatity">Quantity</label>
    <input type="text" name="qunatity" value={qunatity} id="qunatity" onChange={(e)=>setQuantity(e.target.value)}/>
    </div>
    <div className="valuetwo"> 
    <label htmlFor="price">Price</label>
    <input type="text" name="price" value={price} id="price" onChange={(e)=>setPrice(e.target.value)}/>
    </div>
    <div className="valuethree">
    <label htmlFor="amount">Amount</label>
   <p className="amnt">{amount}</p>
    </div>
   
    </div>
    <button type="submit" className="btn add">{isEditing ? "Editing Row Item" : "Add Table Item"}</button>
    </form>
    <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, qunatity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{qunatity}</td>
                <td>{price}</td>
                <td className="amount">{amount}</td>
                <td>
                  <button onClick={() => editRow(id)} className="btn">
                    <AiOutlineEdit className="icon" />
                  </button>
                </td>
                <td><button onClick={()=>deleteRow(id)} className="btn"><AiOutlineDelete className="icon"/></button></td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </>
  )

}
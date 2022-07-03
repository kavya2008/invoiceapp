import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Clientdetails from './components/Clientdetails';
import Notes from './components/Notes';
import Footer from './components/Footer';
import Table from './components/Table';
import TableForm from './components/Tableform';
import { useState , useEffect ,useRef } from 'react';
import ReactToPrint from "react-to-print";
import axios from 'axios';

function App() {
  const [showdata,setshowdata]=useState(false);
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [description, setDescription] = useState("")
  const [qunatity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])


  const componentRef = useRef()
  const print=()=>{
window.print()
  }
  const baseURL = "https://rscdev.taxadda.com/api/invoice/list";
  
  
  return (
    <>
    <div className='App'>
    <ReactToPrint
            trigger={() => (
              <button className="btn dwnload">
                Print / Download
              </button>
            )}
            content={() => componentRef.current}
          />
      {
        showdata ?<>
        <div ref={componentRef} className="ctent">
          <Header print={print}/>
     <Main/>
 
   
     <Table description={description}
              qunatity={qunatity}
              price={price}
              amount={amount}
              list={list}
              setList={setList}
     />
      <Notes notes={notes} />
      
     <Footer/>
    
     </div>
     <button onClick={()=>setshowdata(false)} className="btn edit">Edit Item</button>
     </>:(<>
     <TableForm
     description={description}
     setDescription={setDescription}
     qunatity={qunatity}
     setQuantity={setQuantity}
     price={price}
     setPrice={setPrice}
     amount={amount}
     setAmount={setAmount}
     list={list}
     setList={setList}
     />
     <label htmlFor="notes"><span>Additional Notes</span></label><br></br>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
              <br></br>
              <br></br>
     <button onClick={()=>setshowdata(true)} className="btn preview">Preview Invoice</button>
     </>
     )
  }
  </div>
    
    </>
  );
}

export default App;

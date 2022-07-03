import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
const Main=()=>{
  const [nme,setnme]=useState("")
  const[amnt,setamnt]=useState("");
  const[grossamnt,setgrossamnt]=useState("");
  const[billno,setbillno]=useState("");
  const[billdate,setbilldate]=useState("");
    useEffect(() => {
   
      axios.get('https://rscdev.taxadda.com/api/invoice/list')
      .then((response)=>{
        var inv=response.data.invoices;
        console.log(inv);
        console.log(inv[0].grossAmount)
     setnme( inv[0].name);
      setamnt(inv[0].netAmount);
      setgrossamnt(inv[0].grossAmount);
      setbillno(inv[0].billNo);
      setbilldate(inv[0].status)
      console.log(nme);
      })
      }, []);
    return(
        <>
        <section className="lefttext">
          
        <p><span>Name</span>{nme}</p>
            <p><span>Net Amount</span>{amnt}</p>
        </section>
        <section className='sidetext'>
           
            <p><span>Gross Amount</span>{grossamnt}</p>
            <p><span>BillNo</span>{billno}</p>
            <p><span>Status</span>{billdate}</p>
</section>
        </>
    )
}
export default Main
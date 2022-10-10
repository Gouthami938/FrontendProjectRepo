import {toast} from "react-toastify";
import axios from "axios";
import React, { useState ,useEffect} from 'react';
import { Button } from 'reactstrap';
import BaseUD from "../components/BaseUD";
import {Table} from "reactstrap";


function Acceptlist() {
 
    const [data,setData]=useState([]);
    useEffect(() => {
 async function fetchMyAPI(){
        let result = await fetch("http://localhost:8080/api/user/list");
        result= await result.json();
        setData(result)
        console.warn("data",data);
        if (result.status==200) {
            console.log("navigating");
            // navigate('/Acceptlist')
            //setIsSubmitted(true);
            toast.success("Details Submited")
        }
 }
 fetchMyAPI()
  },[])
  
  return(
<div>
<BaseUD/>
<h2><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>AvailableProfiles</span></h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          {/* <th>Age</th> */}
          <th>DOB</th>
          {/* <th>Age</th> */}
          <th>Place</th>
          <th>Hobbies</th>
          {/* <th>Gender</th> */}
          <th>Image</th>

        </tr>
      </thead>
      <tbody>
        { 
        data.map((item)=>
        <tr>
         
          <td>{item.id}</td>
          <td>{item.name}</td>
          {/* <td>{item.age}</td> */}
          <td>{item.date.substring(0, 10)}</td>
          {/* <td>{item.age.substring(0, 10)}</td> */}
          <td>{item.place}</td>
          <td>{item.hobbies}</td>
          {/* <td>{item.gender}</td> */}
          <td><img src={item.image}/></td>
          <td><Button onClick={()=>toast.success("Accepted!")}>Accept</Button></td>
          <td><Button onClick={()=>toast("Declained!")}>Declaine</Button></td>

        </tr>)
}
      </tbody>
    </Table>


</div>
  )
}
  

export default Acceptlist;







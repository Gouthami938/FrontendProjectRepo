
import {toast} from "react-toastify";
import axios from "axios";
import React, { useState ,useEffect} from 'react';
import { Button } from 'reactstrap';
import BaseUD from "../components/BaseUD";
import {Table} from "reactstrap";


function Silverlist() {
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
  <h1> <span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>     Available Profiles </span></h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>DOB</th>
          {/* <th>Place</th> */}
          {/* <th>Hobbies</th> */}
          {/* <th>Gender</th> */}
          {/* <th>Image</th> */}

        </tr>
      </thead>
      <tbody>
        { 
        data.map((item)=>
        <tr>
         
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.date.substring(0,10)}</td>
          {/* <td>{item.place}</td> */}
          {/* <td>{item.hobbies}</td> */}
          {/* <td>{item.gender}</td> */}
          {/* <td><img src={item.image}/></td> */}
          <td><Button onClick={()=>toast.success("Accepted!")}>Accept</Button></td>
          <td><Button onClick={()=>toast("Declained!")}>Declaine</Button></td>

        </tr>)
}
      </tbody>
    </Table>


</div>
  )
}






  

export default Silverlist;







// import Base from "../components/Base";
// import { Button, Row } from "reactstrap";
// import { toast } from "react-toastify";


// const Acceptlist=()=>{

//     const userAccept = (e) => {
//         e.preventDefault();
       
//         }   
//     return(
//         <Base>
//         <Row className="mt-4"></Row>
//         {/* <div className='bg-image'></div>
//         {/* <img src={picc1} width="1400px" height="700px" /> */}
        
//             <div>
//     <th>
//      <img src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' width="250px"  className='img-fluid' alt='Sample' />
//        </th>
//          <th>
//         <h5>Name:'Mark'</h5>
//         Age:30<br></br>
//         <Button onClick={e=>userAccept(e)}>Accept</Button> <Button >Declaine</Button>
//        </th>
//             </div>
//             <div>
//     <th>
//     <Row className="mt-4"></Row>
//         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_B2lerxs2J5Mwrg420VNbt1DoqRvuPb9pYti77UTSEyxKhqpH386mC1iyeBvPS08-ng&usqp=CAU' width="250px"  className='img-fluid' alt='Sample' />
//        </th>
        
//             <th>
//             <h5> Name:'Rita'</h5>
//                 Age:32<br></br>
//                 <Button onClick={e=>userAccept(e)}>Accept</Button> <Button >Declaine</Button>
//           </th>
//             </div>
//         </Base>       
//     );
// };




















// import {toast} from "react-toastify";
// import axios from "axios";
// import React, { useState ,useEffect} from 'react';
// // import { Button } from 'reactstrap';
// import BaseUD from "../components/BaseUD";
// import {Table} from "reactstrap";
// import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";


// function Silverlist() {
//     const [data,setData]=useState([]);
//     useEffect(() => {
//  async function fetchMyAPI(){
//         let result = await fetch("http://localhost:8080/api/user/list");
//         result= await result.json();
//         setData(result)
//         console.warn("data",data);
//         if (result.status==200) {
//             console.log("navigating");
//             // navigate('/Acceptlist')
//             //setIsSubmitted(true);
//             toast.success("Details Submited")
//         }
//  }
//  fetchMyAPI()
//   },[])
  
//   return(
// <div>
// <BaseUD/>
// <h2><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>AvailableProfiles</span></h2>

// {
// data.map((item)=>

// <Row className="mt-4">
        
//         {/* {JSON.stringify(data)} */}


//         <Col  sm={3} >
//         <Card color="secondary" >
//         <CardHeader>
//         <h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>Name: {item.name}</span></h3>
// <h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>DOB:{item.date.substring(0,10)}</span></h3>
//         <Button color='dark' onClick={()=>toast.success("Accepted!") }>Accept</Button>
//      <span></span>  <Button color='dark' onClick={()=>toast("Declained!")}> Declaine</Button>
// </CardHeader>
// </Card>
// </Col>
// </Row>  
// )
// }
// </div>
//   )
// }






// {/* 

// //   const insertAction = async (e) => {
   
// //       fetch("http://localhost:8080/api/user/list")
    
// //         .then(res => res.json())
// //         .then(
// //           (result) => {
// //             console.log('called get items')
// //             console.log(result)
// //             setItems(result);
// //           },
// //           // Note: it's important to handle errors here
// //           // instead of a catch() block so that we don't swallow
// //           // exceptions from actual bugs in components.
// //           (error) => {
// //             setError(error);
// //             }
// //           )
    
// //       } */}



  

// export default Silverlist;






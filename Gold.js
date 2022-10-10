import BaseUD from "../components/BaseUD";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";
import { useState } from "react";
import {toast } from 'react-toastify';
import { loginUser } from "../services/user-service";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
 import card from "./card.jpg";
import BaseMem from "../components/BaseMem";

function Gold() {

        const navigate=useNavigate();
        const user= JSON.parse(localStorage.getItem('user-info'))
        console.warn(user)
        
        function redirectp()
        {
          
          navigate('/Goldlist')
          toast.success('Gold Membership Availed')

        }

    return (
<div style={{
 backgroundImage:'url("https://cdn.anewmode.com/wp-content/uploads/2018/07/how-to-make-him-fall-for-you-4.jpg")',width:1300,height:608,backgroundSize:'Cover'


}}>
<BaseMem>
<Container>
        
        <Row className="mt-4">
        
                {/* {JSON.stringify(data)} */}
        
        
                <Col  sm={4}>
                <Card color="secondary" >
                <CardHeader>
                <h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>Gold Subscription</span></h3>
       <h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>From INR</span></h5>  
        <h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>Local charges may apply</span></h5>
        <h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>{'\u20B9'}1500/month</span></h3>
        <h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>#Profile pictures can't be viewed</span></h5>
        <Button onClick={redirectp} color={'dark'}>Pay{'\u20B9'}1500</Button>
        <h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold'}}>Offer price {'\u20B9'}0 grab the offer</span></h5>

        
        </CardHeader>
           </Card>
           </Col>
           </Row>
        
            </Container>

</BaseMem>
</div>
  
        
          );
        }
        export default Gold;
        
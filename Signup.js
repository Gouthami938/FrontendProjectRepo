import React , {useState }from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Card, CardBody, CardHeader, Container, FormGroup, Input } from "reactstrap";
import Base from "../components/Base";
import {Form} from "reactstrap";
import {Row} from "reactstrap";
import {Col} from "reactstrap";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";




function Register() {
 const navigate=useNavigate();
 const [errorMessages, setErrorMessages] = useState({});
 const [isSubmitted, setIsSubmitted] = useState(false);
 const [formErrors, setFormErrors] = useState({});
 const [username,setUserName] = useState("");
   const [password,setPassword] = useState("");
   const [email,setEmail] = useState("");

   const errors = {
     pass: "invalid password",
     noerr: ""
   };
  

 const data={
   "username":username,
   "password":password
 };


 const Validate = (values) => {
   const error = {};
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   if (!values.username) {
     error.username = "Username is required!";
   }else if(values.username.length<5){
    error.username="Username must be more than 5 characters"
   }
   if (!email) {
     error.email = "Email is required!";
   } else if (!regex.test(email)) {
     error.email = "This is not a valid email format!";
   }
   if (!values.password) {
     error.password = "Password is required";
   } else if (values.password.length < 4) {
     error.password = "Password must be more than 4 characters";
   } else if (values.password.length > 10) {
     error.password = "Password cannot exceed more than 10 characters";
   }
   return error;
 };

 const onInputChangeUsername = event => {
   setUserName(event.target.value)
}

const onInputChangePassword = event => {
   setPassword(event.target.value)
}
const onInputChangeEmail= event => {
 setEmail(event.target.value)
}

const onChangePassword = event => {
 let value=event.target.value;
 if(value!=password){
 
    setErrorMessages({ name: "pass", message: errors.pass });
 }
 else{
   setErrorMessages({name: "noerr",message: errors.noerr})
 }
}
const insertAction= async(e)=>{   
  e.preventDefault();
  if(!data.username || !data.password || !email||data.password.length < 4 || data.password.length > 10 ){ 
  setFormErrors(Validate(data));}
 else{
 await axios.post('http://localhost:8080/api/auth/signup',data).then(
  (response) => { 
      console.log(response);
      if (response.status==200) {
        setIsSubmitted(true);
          toast.success("Registration successful"); 
      }
  }, (error) => {
    toast("Operation failed");
  }
);
 }
  
   };

   const renderErrorMessage = (name) =>
  name!=password && (
    <div className="error">{errorMessages.message}</div>
  ) ;


const renderForm=(<div className="register-wrapper">
  
  
<div style={{

backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:605

}}>

<Base>
<Container>

<Row className="mt-4">

        {/* {JSON.stringify(data)} */}


        <Col  sm={{size:6,offset:3}}>
        <Card color="secondary" >
        <CardHeader>

<h3>Fill Information to Register</h3>   


</CardHeader>
   
<CardBody>
    <Form>
    <FormGroup> 
   
       <Input type="text" name="username" id="username" placeholder="Enter Name"
         value={username} 
       onChange={(e) => onInputChangeUsername(e)}
       required
      />
      {formErrors.username}
      </FormGroup>
      </Form>
      <Form>
      <FormGroup>
       <Input type="text" name="email" id="email"  placeholder="Enter Email" 
      //  value={email}
      //  onChange={emailValidation}
      onChange={(e) => onInputChangeEmail(e)} 
      required
       />
       {formErrors.email}

        
        </FormGroup>
        </Form>
        <Form>
        <FormGroup>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          
          value={password}
       onChange={(e) => onInputChangePassword(e)} required
        />
        {formErrors.password}
        </FormGroup>
        </Form>

     <Form>
     <FormGroup>
        <Input
          type="password"
          name="retypepassword"
          id="retypepassword"
          placeholder="Retype Password"
        
          onChange={(e) => onChangePassword(e)}
          
          required
        />
        {renderErrorMessage("retypepassword")}
        </FormGroup>
        </Form>

     <Container className="text-center">

<Button  onClick={e => insertAction(e)} color="dark">Register</Button>

      </Container>
  
    </CardBody>
</Card>

</Col>
</Row>
  </Container>
  </Base>
</div>
  </div>
  )


    return (

    <div>
  
    {isSubmitted ? navigate("/Login") : renderForm}
   
    </div>


  );
}
export default Register;
























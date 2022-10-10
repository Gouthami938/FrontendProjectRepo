import Base from "../components/Base";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";
import { useState } from "react";
import {toast } from 'react-toastify';
import { loginUser } from "../services/user-service";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Baselogin from "../components/Baselogin";
import { Link } from "react-router-dom";

const Login=()=>{

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [username,setUserName] = useState("");
      const [password,setPassword] = useState("");
  
    const navigate=useNavigate();
  
   const loginData = {
          "username": username,
          "password": password
      }
    const errors = {
      pass: ("invalid username/password")
    };
  
    const userLogin = (e) => {
      e.preventDefault();
      authenticateUser(loginData)
  }

  
  function redirectforgot()
  {
    
    navigate('/ContactUs')
    toast("Your now redirected to admin contact!")
  }

  
  
  const authenticateUser = (data) => {
      console.log(data);
      axios.post("http://localhost:8080/api/auth/signin", data).then(
          (response) => {
              
              console.log(response);
          
              if (response.status==200) {
                  console.log("navigating");
                  navigate('/UserDetails')
                  setIsSubmitted(true);
                  toast.success("Login successfull");
                  
              }
              
          }, (error) => {
            setErrorMessages({ name: "pass", message: errors.pass });
          }
      );
  
  
    }

    const onInputChangeUsername = event => {
      setUserName(event.target.value)
  }
  
  const onInputChangePassword = event => {
      setPassword(event.target.value)
  }
  
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  
 


  


  
const renderForm=(


<div style={{

backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:605

}}>


       <Baselogin>
        
        <Container>

        <Row className="mt-4">
        <Col sm={{size:6,offset:3}} >
            
        <Card color="secondary">

        <CardHeader>

        <h3>Login Here</h3>
        </CardHeader>
      <CardBody>
        
         {/* Email Field*/}
         <Form>
            <FormGroup>
            <Input type="text"
            placeholder="Enter Username"
            id="username"
            name="username"
            value={username} 
            onChange={e=>onInputChangeUsername(e)} required
            /* // value={loginDetail.username}
            // onChange={(e)=>handleChange(e,'username')}
           */
        //   {renderErrorMessage("uname")}

            ></Input>
             {renderErrorMessage("uname")}
            </FormGroup>
            </Form>


            <Form>
         {/* Password Field*/}

            <FormGroup>
            <Input type="password"
            placeholder="Enter Password"
            id="password"
            value={password} onChange={e => onInputChangePassword(e)} required 
            // value={loginDetail.password}
            // onChange={(e)=>handleChange(e,'password')}
          

            ></Input>
            {renderErrorMessage("pass")}
            </FormGroup>
            </Form>

            <Container  className="text-center">

            <Button  onClick={e => userLogin(e)} color="dark">Login</Button>
              {/* <br></br><Link href="redirectforgot"> Forgot your password?</Link> */}
              <b> </b><Button  onClick={redirectforgot} color="dark">Forgot</Button>


            </Container>

            </CardBody>
        </Card>
        </Col>
        </Row>
    </Container>
       </Baselogin>

       {/* {isSubmitted ? navigate("/") : renderForm} */}

       </div>


);
   return(

   <div>
    {isSubmitted?navigate("/UserDetails"):renderForm}
     </div>

    );
};
export default Login;


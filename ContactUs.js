import Base from "../components/Base";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";

const ContactUs = () => {
   

        return (
            <div style={{

                backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:605
                
                }}>   

    <Base>   
    <Row className="mt-4">
<pre><h2><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>                                                              GET IN TOUCH</span></h2></pre>
</Row>
<Row className="mt-4">
<Col sm={{size:'3',offset:2}}>
        <Card color="secondary" >
        <CardHeader>
<pre>            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAXMc0WX1KKjtTz1TrNEBL5O4u5GX5Odky6tZIvjaZW0x9uDbimwOWIACatgk8wRDbVc&usqp=CAU' width="50px"  className='center' alt='Sample'/></pre>
 <br></br><h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>ADDRESS</span></h3> 
<h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>Northern Division Office</span></h5>
<h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>146 Yuma Street</span></h5>
<h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>Denver CO 80223</span></h5>


</CardHeader>
</Card>

</Col>

<Col sm={3}>
        <Card color="secondary" >
        <CardHeader>
    <pre>             <img src='data:image/png;base64,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' width="50px"  alt='Sample'/></pre>
<br></br><h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>PHONE</span></h3> 
<h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>TOLL-FREE</span></h5>
<h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>1-877-930-7483
</span></h5>
<h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>International:
1-604-637-0780</span></h5>
</CardHeader>
</Card>

</Col>

<Col sm={3}>
        <Card color="secondary" >
        <CardHeader>
    <pre>             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGKFcg5RxsO5vzMA4q7vAhCylQW900TWc3w&usqp=CAU' width="50px"  alt='Sample'/></pre>
<br></br><h3><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>Email</span></h3> 
<h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>#Northern Division Office</span></h5>
<h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>@meetme.gmail.com</span></h5>
<h5><span style={{fontFamily:'Times new Roman',fontWeight:'bold',textAlign:'right'}}>@division.gmail.com</span></h5>
</CardHeader>
</Card>

</Col>

</Row>
    </Base> 
  </div>
    );
};
export default ContactUs;
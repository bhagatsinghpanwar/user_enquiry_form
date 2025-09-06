import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import  "bootstrap/dist/js/bootstrap.bundle.js"
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  let [formData, setFormData] = useState({
    uname:"",
    uemail: "",
    unumber: "",
    umessage:"",
    index: ""
  })
  let getValue = (event)=>{
    let oldData= {...formData}
  }


  
  return (
    <Container fluid>
      <Container>
        <Row>
          <Col className='text-center py-5'>
          <h1>Enquiry Form  </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <form>
              <div className='pb-3' >
                <label className='form-label'>Name</label>
                <input type='text' onChange={getValue} value={formData.uname} name='uname' className='form-control' />
              </div>
              <div className='pb-3' >
                <label className='form-label'>Email</label>
                <input type='email' onChange={getValue} value={formData.uemail} name='uemail' className='form-control' />
              </div>
              <div className='pb-3' >
                <label className='form-label'>Number</label>
                <input type='number' onChange={getValue} value={formData.unumber} name='unumber' className='form-control'/>
              </div>
              <div className='pb-3' >
                <label className='form-label'>Message</label>
                <textarea onChange={getValue} value={formData.umessage} name='umessage'  className='form-control'></textarea>
              </div>

              <button className='btn btn-primary'>{
                formData.index!=="" ? "Update" : "Save"
                }</button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
    
  );
}

export default App;

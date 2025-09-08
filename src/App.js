import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import  "bootstrap/dist/js/bootstrap.bundle.js"
import { Container, Row, Col, Table } from 'react-bootstrap';
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
    let oldData= {...formData }
    let inputName = event.target.name ;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
  setFormData(oldData)

  }

 let [userdata, setUserData] = useState([])


  let handleSubmit = (event)=>{

    let currentUserFormData = {
      uname : formData.uname,
       uemail : formData.uemail,
        unumber: formData.unumber,
         umessage: formData.umessage
     
    }
     let oldUserData  = [...userdata, currentUserFormData];
     console.log(oldUserData)

    setUserData(oldUserData)
    setFormData( {uname:"",
    uemail: "",
    unumber: "",
    umessage:"",
    index: ""})

    event.preventDefault();

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
          {userdata.length}
            <form onSubmit={handleSubmit}>
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
          <Col lg={7}>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userdata.length>= 1 ?
        userdata.map((obj,i)=>{
          return(
            <tr key={i}> 
          <td>{i+1}</td>
          <td>{obj.uname}</td>
          <td>{obj.uemail}</td>
          <td>{obj.unumber}</td>
          <td>{obj.umessage}</td>
          <td>
            <button>Delete</button>
            <button>Edit</button>
          </td>
        </tr>

          )
        })
         :
        <tr>
          <td colSpan={6}> No Data Found </td>
        </tr> 
      
      }
      </tbody>  
        
    </Table>
  

          </Col>
        </Row>
      </Container> 
    </Container>                
    
  );
}

export default App;

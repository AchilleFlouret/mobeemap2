import React, { Component } from 'react';
import './App.css';
import { Modal, Button ,ButtonToolbar, Nav,Image, ProgressBar, Tab, Tabs, Col , Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';





class App extends Component {
 constructor(props)
 {
 super(props)

     this.state = 
    {
      startDate: "",
      startDates: "",
      rooms:[],
      city: '',
      place: '',
      showModal:false,

    };
     this.open = this.open.bind(this);

 }

     open() {
        this.setState({ showModal: true })
    }

    close() {
        this.setState({ showModal: false })
        }

  render() {


  return (
<div>
<Modal
show={this.state.showModal}
onHide={()=>this.close()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
       
         <Image style={{height:250, width:'100%', opacity:0.9, borderRadius:15}} src="https://www.aperodujeudi.com/wp-content/uploads/2016/06/lyon-880x495.jpeg"  />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <Tabs defaultActiveKey="score" id="uncontrolled-tb-example">
  <Tab eventKey="score" title="Score">
 <div>
 <Container>
  <Row >
 <Col style={{height:40, width:'100%', textAlign:'center', paddingTop:8,  fontSize:18}}>  Mobee Score</Col>
  <Col style={{height:40, width:'100%',  textAlign:'center', paddingTop:8,  fontSize:18}}>   Transport</Col>
  </Row>
  <Row>
    <Col>  <ProgressBar variant="success" now={40} /></Col>
    <Col><ProgressBar variant="success" now={20} /></Col>
  </Row> 
  <Row >
 <Col style={{height:40, width:'100%', textAlign:'center', paddingTop:8,  fontSize:18}}>  Coût</Col>
  <Col style={{height:40, width:'100%',  textAlign:'center', paddingTop:8,  fontSize:18}}>   Hébergement</Col>
  </Row>
    <Row>
    <Col><ProgressBar variant="success" now={80} /></Col>
    <Col><ProgressBar variant="success" now={10} /></Col>
  </Row>
     <Row >
 <Col style={{height:40, width:'100%', textAlign:'center', paddingTop:8,  fontSize:18}}>  Loisir</Col>
  <Col style={{height:40, width:'100%',  textAlign:'center', paddingTop:8, fontSize:18}}>   Vie nocturne</Col>
  </Row>
    <Row>
    <Col><ProgressBar variant="success" now={75} /></Col>
    <Col><ProgressBar variant="success" now={75} /></Col>
  </Row>
    <Row >
 <Col style={{height:40, width:'100%', textAlign:'center', paddingTop:8,  fontSize:18}}>  Famille</Col>
  <Col style={{height:40, width:'100%',  textAlign:'center', paddingTop:8,  fontSize:18}}>   Maitrise de l'anglais</Col>
  </Row>
    <Row>
    <Col><ProgressBar variant="success" now={95} /></Col>
    <Col><ProgressBar variant="success" now={50} /></Col>
  </Row>

</Container>

</div>
  </Tab>
  <Tab eventKey="heb" title="Hébergement">
   
  </Tab>
  <Tab eventKey="mg" title="Mobee Guide" >
  
  </Tab>
    <Tab eventKey="transport" title="Transport" >
  
  </Tab>
    <Tab eventKey="coms" title="Commentaires" >
  
  </Tab>

</Tabs>

      </Modal.Body>
      <Modal.Footer>
      <Button href="/note"> Noter </Button>
        <Button  variant="danger" onClick={() => this.close()}>Close</Button>
      </Modal.Footer>
    </Modal>
    <ButtonToolbar>
      <div
              style = {{padding: "10px",color:'white',fontWeight:'bold',height:200,width:350, backgroundColor:'grey', textAlign:'center', borderRadius:15,}} 
              onClick={() => this.open()}
                >
        Lyon
        <Container>
         <div style={{height:15}}></div>
        <Row>
        <Col style={{textAlign:'left'}}> Mobee score
        </Col>
        <Col>
       
        <ProgressBar variant="success" now={10} />
           </Col>
        </Row>
        <div style={{height:10}}></div>
              <Row>
        <Col style={{textAlign:'left'}}> Hebergement
        </Col>
        <Col>
       
        <ProgressBar variant="success" now={80} />
           </Col>
        </Row>
         <div style={{height:10}}></div>
              <Row>
        <Col style={{textAlign:'left'}}> Loisirs
        </Col>
        <Col>
       
        <ProgressBar variant="success" now={40} />
           </Col>
        </Row>
         <div style={{height:10}}></div>
              <Row>
        <Col style={{textAlign:'left'}}> Anglais
        </Col>
        <Col>
       
        <ProgressBar variant="success" now={70} />
           </Col>
        </Row>

     
        </Container>
      </div>


    </ButtonToolbar>

</div>
        );
  }

}





export default App;

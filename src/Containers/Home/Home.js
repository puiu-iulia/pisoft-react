import { Row, Button, Carousel } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory()

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div  style={{height: 400, backgroundColor: '#485152'}}>
                        <p style={{fontSize: 40, color: '#4f877c', textAlign: 'center', paddingTop: 24}}>MOBILE DEVELOPEMNT</p>
                        <Row className="justify-content-center">
                            <div style={{height: 160, width: 80, backgroundColor: '#e4f4f0', borderRadius: 4, borderColor: '#485152', borderWidth: 16}} >
                                <img
                                    className="d-block w-100"
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/59/Gaming_PC_set_up.jpg"
                                    alt="First slide"
                                />
                            </div>
                        </Row>
                    </div>

                    <Carousel.Caption>
                    <h3>React Native</h3>
                    <p>iOS and Android</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/59/Gaming_PC_set_up.jpg"
                    alt="Second slide"
                    /> */}
                    <div  style={{height: 400, backgroundColor: '#485152'}}>
                        <p style={{fontSize: 40, color: '#4f877c', textAlign: 'center', paddingTop: 24}}>FULL-STACK DEVELOPEMNT</p>
                        <Row className="justify-content-center">
                            <div style={{height: 120, width: 160, marginTop: 20, backgroundColor: '#e4f4f0', borderRadius: 2, borderBottomColor: '#485152', borderBottomWidth: 32}} />
                        </Row> 
                    </div>
                
                    <Carousel.Caption>
                        <h3>React + Node.js</h3>
                        <p>Web</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
          
            <Row>
                <p style={{ color: '#485152', fontSize: 18, textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a elementum tellus. Aenean aliquam posuere libero, in dictum orci iaculis at. Morbi eu feugiat est. Duis pharetra aliquet dui at auctor. In hendrerit at lorem ultricies scelerisque. Sed eros arcu, faucibus et cursus a, molestie nec orci. Vestibulum quis placerat sem. Sed nec ligula nulla.</p>
            </Row>
            <Row className="justify-content-center">
                {/* <Col></Col> */}
                {/* <Col> */}
                    <Button 
                        style={{width: 200, backgroundColor: '#874f54', borderColor: '#874f54', marginBottom: 48}}
                        onClick={() => history.push('/contact')}
                    >
                        Get in touch
                    </Button>
                {/* </Col> */}
                {/* <Col></Col> */}
            </Row>
        </div>
    )
}

export default Home;
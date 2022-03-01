import { Carousel, Row, Image } from 'react-bootstrap'
import mobileApp from '../../Assets/Images/mobile-app.jpeg'
import webApp from '../../Assets/Images/web-app.jpeg'

const CustomCarousel = props => {
    return (
        <Carousel>
            <Carousel.Item>
                <div  style={{height: 500, backgroundColor: '#485152'}}>
                    <p style={{fontSize: 32, color: '#e4f4f0', textAlign: 'center', paddingTop: 24}}>MOBILE DEVELOPEMNT</p>
                    <Row className="justify-content-center">
                        <Image
                            style={{ height: 280, width: 160, borderRadius: 8, overflow: 'hidden'}}
                            src={mobileApp}
                            alt="First slide"
                            fluid
                        />
                    </Row>
                </div>
                <Carousel.Caption>
                    <h3>React Native</h3>
                    <p>iOS and Android</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div  style={{height: 500, backgroundColor: '#485152'}}>
                    <p style={{fontSize: 32, color: '#e4f4f0', textAlign: 'center', paddingTop: 24}}>FULL-STACK DEVELOPEMNT</p>
                    <Row className="justify-content-center">
                        <Image
                            style={{ height: 280, width: 360, margin: 2, borderRadius: 2, overflow: 'hidden'}}
                            src={webApp}
                            alt="First slide"
                            fluid
                        />
                    </Row> 
                </div>
                <Carousel.Caption>
                    <h3>React + Django</h3>
                    <p>Web</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
  };

export default CustomCarousel;
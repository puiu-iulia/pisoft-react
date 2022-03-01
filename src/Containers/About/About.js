import { Container, Row, Image, Button } from 'react-bootstrap'
import profilePic from '../../Assets/Images/profile-pic.jpeg';

const About = () => {
    return (
        <Container id="about" fluid>
            <Row>
                <Row className="justify-content-center" style={{marginTop: 24}}>
                    <Image src={profilePic} style={{width: 300, margin: 16, alignSelf: 'center'}} alt="profile" roundedCircle fluid/>
                    <h1 style={{color: '#485152', textAlign: 'center'}}>Puiu Iulia</h1>
                    <h3 style={{color: '#485152', textAlign: 'center', marginBottom: 16}}>Software Developer</h3>
                </Row>
                <Row style={{margin: 16}}>
                    <p style={{ color: '#485152', fontSize: 18, textAlign: 'center'}}>
                        Experienced Web and Mobile Developer, capable of creating complete solutions for Web, Android, and iOS, with strong React, React Native, Django, and Android Studio (Java) skills.
                    </p>
                    <p style={{ color: '#485152', fontSize: 18, textAlign: 'center'}}>
                        I am results-driven, proactive and truly passionate about my work. With great communication skills, I am adept at interpreting requirements and transform them into great software products.
                    </p>
                    <p style={{ color: '#485152', fontSize: 18, textAlign: 'center'}}>
                        Versatile in the development process and dedicated to delivering on time, my goal is to increase your business online presence.
                    </p>
                    <p style={{ color: '#485152', fontSize: 18, textAlign: 'center'}}>
                        Skills: Javascript, TyppeScript, Python, Django, Android Studio, React Native, React, Bootstrap, Git, XML, HTML5, CSS3.
                    </p>
                </Row>
                <Row className="justify-content-center">
                    <Button 
                        style={{width: 200, backgroundColor: '#4f877c', borderColor: '#4f877c', marginBottom: 48}}
                        onClick={() => window.open('https://www.linkedin.com/in/iuliapuiu/')}
                    >
                        Get in touch
                    </Button>
                </Row>
            </Row>
        </Container>
    )
}

export default About
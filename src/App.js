import 'bootstrap/dist/css/bootstrap.min.css'
import { Card} from 'react-bootstrap'
import Header from './Components/Header/Header'
import Home from './Containers/Home/Home'
import About from './Containers/About/About'

function App() {

  return (
    <>
        <Header />
        <Home />
        <About />
        <Card.Footer style={{backgroundColor: '#e4f4f0', padding: 48}}>
            <Card.Text style={{textAlign: 'center'}}>&copy; 2022 PIsoft. All rights reserved.</Card.Text>
        </Card.Footer>
    </>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Navbar, Nav, Text, Image, Button, Carousel } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { withRouter } from "react-router"
import AppRouter from './AppRouter/AppRouter'

function App() {

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;

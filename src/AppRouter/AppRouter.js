import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { withRouter } from "react-router"
import Header from '../Components/Header/Header'
import Home from '../Containers/Home/Home'
import About from '../Containers/About/About'
import Contact from '../Containers/Contact/Contact'
import Services from '../Services/Services'

const AppRouter = () => {

    const HeaderWithRouter = withRouter(Header);

    return (
        <Router>
            <HeaderWithRouter />
            {/* <div  style={{height: 1, backgroundColor: '#4f877c'}}/> */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Container>
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                </Container>
            </Switch>
            <div  style={{height: 100, backgroundColor: '#4f877c'}}/>
        </Router>
    )
}

export default AppRouter;
import React from 'react';
import App from './App'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Redirect , Route ,Switch}  from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Header } from 'antd/lib/layout/layout';
const App =() => {
    return(
        <>
        <BrowserRouter>
       
        <Navbar />
        <Header />
        <Switch>

            <Route exact path="/" component={Home} />
            
            <Route exact path="/ About" component={About} />
            
            <Route exact path="/Services" component={Services} />
            
            <Route exact path="/Contact" component={Contact} />
            <Redirect to="/" />
        </Switch>
        </BrowserRouter>
    </>
    );
}
export default App;

import React, {Component} from "react";
import {  Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Posts from '../Post/Posts/Posts';


class TopNav extends Component {
    render(){
        return(
            <Router>
            <div>

                <Navbar bg="dark" variant={"dark"} expand="lg" >
                    <Navbar.Brand href="/home">Anon Ideas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px' }}
                            
                        >
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
                            <Nav.Link as={Link} to="/auth">Auth</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route exact path='/Home' element={<Posts/>}></Route>
                    <Route Route exact path='/Posts' element={<Posts/>}></Route>
                    <Route Route exact path='/Home' element={<Posts/>}></Route>
                    
                </Routes>
            </div>
        </Router>
        );
    }
}

export default TopNav;
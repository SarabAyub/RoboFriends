import React, { Component } from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import { AddRobot } from "./Components/AddRobot";
import { Login } from "./Components/Login";
import { SignUp } from "./Components/SignUp";
import { Edit } from "./Components/Edit";

class App extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/addrobot" element={<AddRobot/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path= '/login' element={<Login/>}/>
                    <Route path= '/signup' element= {<SignUp/>} />
                    <Route path= '/edit/:id' element= {<Edit/>} />
                </Routes>
            </>
        );
    }
}

export default App;
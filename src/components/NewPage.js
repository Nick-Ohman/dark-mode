import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


const Button = () => {
    return(
        <div>
        <button>Click here to see the charts</button>
        </div>
    )
}

export default Button;
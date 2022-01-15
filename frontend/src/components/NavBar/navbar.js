import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import Logo from "./logo";
import "./styles.css"

export function NavBar() {
    return (
        <div className={"headerBox"}>
            <Link to="/"><Logo /></Link>
        </div>
    );
}
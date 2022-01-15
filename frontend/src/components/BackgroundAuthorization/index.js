import React from "react";
import "./styles.css";
import Foot from "../Foot";
import BackgroudImg from "./background_img";
import NavBar from "../NavBar";

function BackgroundAuthorization() {
    return <div id={"box"}>
        <BackgroudImg />
        <NavBar />
        <div className={"text"} id={"title"}><p>Трекер посещений по физической культуре</p></div>
        <button className={"text"} id={"entryButton"}>Войти в личный кабинет</button>
        <Foot/>
        

    </div>
}

export default BackgroundAuthorization;
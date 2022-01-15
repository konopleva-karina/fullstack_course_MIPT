import React from "react";
import "./styles.css"
import Header from "../../Header";
import Foot from "../../Foot";
import BackgroundAuthorization from "../../BackgroundAuthorization";

function Authorization() {
    return (
        <div>
            <BackgroundAuthorization />
            <Header />
            <Foot />
        </div>
    );
}

export default Authorization;
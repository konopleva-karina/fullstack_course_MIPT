import React from "react";
import "./styles.css"
import {ReactComponent as Person} from "../../pics/avatar-user-svgrepo-com.svg"

function Avatar() {
    return (
        <div id={"avatarBox"}>
            <Person id={"person"}/>
        </div>
    );
}

export default Avatar;
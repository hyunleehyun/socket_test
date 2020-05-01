import React, { useState, useEffect } from "react";

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({room}) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online" />
            <h3>roomName</h3>

        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close"></img></a>
        </div>
    </div>
)

export default InfoBar;
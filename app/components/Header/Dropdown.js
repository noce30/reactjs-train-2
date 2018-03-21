import React from 'react';/*eslint-disable*/
import HambergerMenu from './HambergerMenu';


function Dropdown(props) {

    return (
        <div className="dd-wrapper">
            <HambergerMenu />
            <HambergerMenu />
            <HambergerMenu />
        </div>
    );

}
export default Dropdown;
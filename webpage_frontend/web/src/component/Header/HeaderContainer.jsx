import React from 'react';


import Languagebar from "./Languagebar.jsx"
import Topbanner from "./Topbanner.jsx"
import Navbar from "./Navbar.jsx"



export default class HeaderContainer extends React.Component {
    render() {
        return (
            <div>
                <Languagebar></Languagebar>
                <Topbanner></Topbanner>
                <Navbar></Navbar>
            </div>
        );
    }
}   
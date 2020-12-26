
import React, { Component } from 'react';
import { menus } from "../../services/menuService";


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: menus
        }
    }
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">{this.props.name}</div>
                </a>
                <hr className="sidebar-divider my-0" />
                {this.state.menus.map(element =>
                    <li className="nav-item active">
                        <a className="nav-link" href={element.url}>
                            <i className={element.icon}></i> 
                            <span> {element.name}</span>
                        </a>
                    </li>
                )}
            </ul>
        )
    }
}

export default Sidebar;
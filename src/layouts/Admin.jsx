// @ts-nocheck
import React, { Component } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { Switch, Route } from 'react-router-dom';
import routes from "routes.js";
import Footer from '../components/Footer/Footer';
import Topbar from '../components/Topbar/Topbar'
import '../assets/css/font-awesome.css';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: 'New Style boutique'
        }
    }
    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={props => (
                            <prop.component
                                {...props}
                            />
                        )}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    render() {
        return (
            <div id="page-top">
                <div id="wrapper">
                    <Sidebar {...this.props} name={this.state.companyName}></Sidebar>

                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar {...this.props}></Topbar>
                            <Switch>{this.getRoutes(routes)}</Switch>
                            <Footer {...this.props}></Footer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;
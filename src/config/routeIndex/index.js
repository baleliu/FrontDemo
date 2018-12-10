import React from "react";
import MyLayout from "../../view/layout";
import {HashRouter, Route} from "react-router-dom";
import HomePage from "../../view/homePage";
import Page1 from "../../view/page1";
import Page2 from "../../view/page2";

export default class RouteIndex extends React.Component {
    render() {
        return (
            <HashRouter>
                <MyLayout>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/page1" component={Page1}/>
                    <Route path="/page2" component={Page2}/>
                </MyLayout>
            </HashRouter>
        );
    }
}
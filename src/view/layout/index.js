import React from 'react';
import {Link} from 'react-router-dom';
import style from './style.css'

export default class MyLayout extends React.Component {
    render() {
        return (
            <div>
                <ul className={style.test}>
                    <li><Link to="/">HomePage</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/page2">Page2</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
import React, {Component} from 'react';
import logo from './logo.svg';
import style from './App.css';
import {DatePicker} from 'antd';
import {Tree} from 'antd';
import pe from './print';

const { TreeNode } = Tree;

class App extends Component {
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

    render() {
        return (
            <div>
                <div>
                    {pe()}
                    <DatePicker/>
                    <Tree
                        checkable
                        defaultExpandedKeys={['0-0-0', '0-0-1']}
                        defaultSelectedKeys={['0-0-0', '0-0-1']}
                        defaultCheckedKeys={['0-0-0', '0-0-1']}
                        onSelect={this.onSelect}
                        onCheck={this.onCheck}
                    >
                        <TreeNode title="parent 1" key="0-0">
                            <TreeNode title="parent 1-0" key="0-0-0" disabled>
                                <TreeNode title="leaf" key="0-0-0-0" disableCheckbox/>
                                <TreeNode title="leaf" key="0-0-0-1"/>
                            </TreeNode>
                            <TreeNode title="parent 1-1" key="0-0-1">
                                <TreeNode title={<span style={{color: '#1890ff'}}>sss</span>} key="0-0-1-0"/>
                            </TreeNode>
                        </TreeNode>
                    </Tree>
                </div>
                <div className={style.App}>
                    <header className={style["App-header"]}>
                        <img src={logo} className={style["App-logo"]} alt="logo"/>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className={style["App-link"]}
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </div>
        );
    }
}

export default App;

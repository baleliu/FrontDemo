import React from 'react';

export default class Page2 extends React.Component{
    render() {
        return(
          <div>
              <h1>Page Two</h1>
              <iframe
                src={"file:///Users/liuwentao/development/workspace/github-space/FrontDemo/src/extension/test_v_0_0_1/index.html"}
              >
              </iframe>
          </div>
        );
    }
}
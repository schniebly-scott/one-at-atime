import React from "react";

class TopBar extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      testState: false
    };
  }

  statusCheck() {
    const { testState } = this.state
    if(testState) {
      console.log('test')
    }
  }

  render() {
    return (
      <div className="TopBar">
        <div className="draggable">
          <p>one@atime</p>
        </div>
        <div className="Controls">
          <button type="button" className="miniButton" onClick={() => window.tools.mini()}>─</button>
          <button type="button" className="closeButton" onClick={() => window.tools.close()}>x</button>
        </div>
      </div>
    );
  }
}

export default TopBar;

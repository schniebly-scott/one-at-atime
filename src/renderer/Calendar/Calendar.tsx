import React from "react";

class Calendar extends React.Component<any, any> {
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
      <div className="Calendar">
        <p>Test</p>
      </div>
    );
  }
}

export default Calendar;

import React, { Component } from 'react';

class button extends Component {
  render() {
    return (
      <div className="editor-Buttons">
          <button className="doneButton btn btn-success" type="button">Reset</button>
          <button className="checkButton btn btn-success" type="button">Check code</button>
    </div>
    );
  }

}

export default button;
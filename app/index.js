import React from 'react';
import ReactDOM from 'react-dom';

const BuilderApp = React.createClass({
  render() {
    return <div>Hello</div>;
  }
});

ReactDOM.render(<BuilderApp />, document.getElementById('app'));
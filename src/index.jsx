import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from 'components/App';

class Index extends React.Component {
  render() {
    return <App/>
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
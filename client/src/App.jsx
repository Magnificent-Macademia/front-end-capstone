import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsAnswers from './questions-answers/index.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
          <h1>Hello World</h1>
          <QuestionsAnswers />
      </div>
    )
  }
}

export default App;

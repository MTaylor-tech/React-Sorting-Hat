import React from 'react';
import './App.css';
import {questions} from './data/questions';
import {houses} from './data/houses';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: questions,
      houses: houses,
      question: 0,
      points: [0,0,0,0]
    };
  }

  renderQuestion() {
    if (this.state.question<=0) {
      return (<p><a onClick={()=>this.nextQuestion()}>Click here to begin</a></p>);
    } else if (this.state.question<=this.state.questions.length) {
      return (
        <div>
          <p>{this.state.questions[this.state.question-1].question}</p>
          {this.state.questions[this.state.question-1].possibleAnswers.map((a,i)=><p onClick={()=>this.chooseAnswer(i)}>{a}</p>)}
        </div>
      );
    } else {
      return (<p>Results go here</p>);
    }
  }

  nextQuestion() {
    this.setState({question: this.state.question+1});
    console.log(this.state.points);
  }

  chooseAnswer(answerIndex) {
    console.log(this.state.questions[this.state.question-1].possibleAnswers[answerIndex]);
    const pointGoesTo = this.state.questions[this.state.question-1].points[answerIndex];
    const newPoints = this.state.points.map((p,i)=>{
      if (i===pointGoesTo-1) {
        return p + 1;
      } else {
        return p;
      }
    });
    console.log(newPoints);
    this.setState({points: newPoints});
    this.nextQuestion();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sorting Hat</h1>
            {this.renderQuestion()}
        </header>
      </div>
    );
  }

}

export default App;

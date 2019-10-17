import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Question from './Question';
import PageSelector from './PageSelector';
import Button from './Button';
import { questionAnswer, changeCurrentQuestion, finishGame, restartGame, initGame } from './redux/actions';

class App extends React.Component {
  componentDidMount(){
    fetch("https://quiz.dit.upm.es/api/quizzes/random10wa?token=5ef285733ffdf65b8049")
      .then((res) => res.json())
      .then( questions => {
        return this.props.dispatch(initGame(questions))
      })
  }
  render () {
      if (this.props.questions.length === 0){
        return (<h2> Loading... </h2>)
      }
      if (this.props.finished){
        var score = 0;
        this.props.questions.forEach( (question) => {
            if (question.userAnswer && question.answer.toLowerCase() === question.userAnswer.toLowerCase() ){
                score++;
            }
        } )
        const questions = this.props.questions.map( (question, index) => {
            const isCorrect = question.userAnswer && question.answer.toLowerCase() === question.userAnswer.toLowerCase()
            const result = isCorrect
                            ? "correct" 
                            : question.userAnswer && question.userAnswer !== ''? "wrong": "empty" 
            return (
                    <div className={"question_resume " + result}>
                        <div><img src={question.attachment? question.attachment.url : "/default.jpg"} alt="Default"/></div>
                        <span>{question.question}</span>
                        <span className="user_answer">{question.userAnswer? question.userAnswer : ""}</span>
                        <span>{result}</span>
                        
                    </div>
                )
        })
        return (
            [
                <header>
                    QUIZZ FINISHED
                </header>,
                <div> YOUR SCORE: {score}</div>,
                <div className="answers">{questions}</div>,
                <Button 
                  extraClasses="" 
                  text="RETRY QUIZZES"
                  value={0}
                  action={(param) => {
                    this.props.dispatch(restartGame())
                  }}/>,
                  <Button 
                    extraClasses="" 
                    text="RESTART GAME"
                    value={0}
                    action={(param) => {
                      window.location.reload(true)
                  }}/>
            ]
        )
      } else {
        return (
          
          [
              <header>
              QUIZ
              </header>,
              <Question currentQuestion={this.props.currentQuestion} question={this.props.questions[this.props.currentQuestion]}
                  onQuestionAnswer={ (answer) => {
                    this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                  } }
                  onPageChange={ (index) => {
                    this.props.dispatch(changeCurrentQuestion(index))
                  }}
              />,
              <PageSelector currentQuestion={this.props.currentQuestion} numberOfQuestions={this.props.questions.length} 
                onPageChange= { (index) => {
                  this.props.dispatch(changeCurrentQuestion(index))
                }}
              />,
              <Button 
                  extraClasses="" 
                  text="SUBMIT"
                  value={0}
                  action={(param) => {
                    this.props.dispatch(finishGame())
                  }}/>,
          ]
        );
      }
  }
}

function mapStateToProps(state){
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);

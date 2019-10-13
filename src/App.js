import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Question from './Question';
import PageSelector from './PageSelector'
import { questionAnswer, changeCurrentQuestion } from './redux/actions'

function App(props) {
  return (
    
    [
        <header>
        QUIZ
        </header>,
        <Question currentQuestion={props.currentQuestion} question={props.questions[props.currentQuestion]}
            onQuestionAnswer={ (answer) => {
              props.dispatch(questionAnswer(props.currentQuestion, answer))
            } }
            onPageChange={ (index) => {
              props.dispatch(changeCurrentQuestion(index))
            }}
        />,
        <PageSelector currentQuestion={props.currentQuestion} numberOfQuestions={props.questions.length} 
          onPageChange= { (index) => {
            props.dispatch(changeCurrentQuestion(index))
          }}
        />,
        <div className="button"> SUBMIT </div>
    ]
  );
}

function mapStateToProps(state){
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);

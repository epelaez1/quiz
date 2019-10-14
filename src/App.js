import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Question from './Question';
import PageSelector from './PageSelector'
import Button from './Button'
import { questionAnswer, changeCurrentQuestion, finishGame, restartGame } from './redux/actions'

function App(props) {
  if (props.finished){
    var score = 0;
    props.questions.forEach( (question) => {
        if (question.userAnswer && question.answer.toLowerCase() === question.userAnswer.toLowerCase() ){
            score++;
        }
    } )
    const questions = props.questions.map( (question, index) => {
        const isCorrect = question.userAnswer && question.answer.toLowerCase() === question.userAnswer.toLowerCase()
        const result = isCorrect
                        ? "correct" 
                        : question.userAnswer && question.userAnswer != ''? "wrong": "empty" 
        return (
                <div class={"question_resume " + result}>
                    <div><img src={question.attachment? question.attachment.url : "/default.jpg"} alt="Default"/></div>
                    <span>{question.question}</span>
                    <span class="user_answer">{question.userAnswer? question.userAnswer : ""}</span>
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
            <div class="answers">{questions}</div>,
            <Button 
              extraClasses="" 
              text="RESTART GAME"
              value={0}
              action={(param) => {
                props.dispatch(restartGame())
              }}/>
        ]
    )
  } else {
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
          <Button 
              extraClasses="" 
              text="SUBMIT"
              value={0}
              action={(param) => {
                props.dispatch(finishGame())
              }}/>,
      ]
    );
  }
}

function mapStateToProps(state){
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);

// /* eslint-disable no-unused-vars */

import { useContext } from "react";
import { QuizContext } from "../context/quizContent";
import Option from "./Option";

import "./Question.css";

function Question() {
  const [quizState, dispatch] = useContext(QuizContext);

  let currQuestion = quizState.data[quizState.currentQuestion];
  // console.log(quizState);

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: {answer: currQuestion.answer, option}
    })
  }
  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.data.length}
      </p>
      <h2>{currQuestion.question}</h2>
      <div id="questions-container">
        {currQuestion.options.map((option) => (
          <Option 
            option={option} 
            key={option} 
            answer={currQuestion.answer}
            selectOption = {() => {onSelectOption(option)}}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
}

export default Question;

import { useEffect, useState } from "react";

import QuestionStyle from "../styles/QuestionStyle";

import seta_play from "../images/seta_play.png";
import seta_virar from "../images/seta_virar.png";

const Question = (props) => {
    const [clickedStep, setClickedStep] = useState(0);
    const [canChange, setCanChange] = useState([false, false]);

    function flipCardClick() {
        setClickedStep(clickedStep + 1);
    }

    useEffect(() => {
        if (clickedStep === 1)  {
            setTimeout(() => setCanChange([true, false]), 400);
        }
        if (clickedStep === 2) {
            flipCardClick();
            setTimeout(() => setCanChange([true, true]), 400);
        }
    });

    return (
        <QuestionStyle.QuestionDiv clickedStep={clickedStep}>
            {!canChange[0] ? <QuestionStyle.ContentDiv clickedStep={clickedStep}>
                <QuestionStyle.QuestionText>Pergunta {props.questionNumber}</QuestionStyle.QuestionText>
                <QuestionStyle.QuestionPlayImage src={seta_play} alt="" onClick={clickedStep === 0 ? () => flipCardClick() : null}></QuestionStyle.QuestionPlayImage>
            </QuestionStyle.ContentDiv> : !canChange[1] ? <QuestionStyle.ContentDiv clickedStep={clickedStep}>
                <QuestionStyle.QuestionRevealedText>{props.card.question}</QuestionStyle.QuestionRevealedText>
                <QuestionStyle.QuestionRotateImage src={seta_virar} alt="" onClick={clickedStep === 1 ? () => flipCardClick() : null}></QuestionStyle.QuestionRotateImage>
            </QuestionStyle.ContentDiv> : <div>asdasdsad</div>}
        </QuestionStyle.QuestionDiv>
    );
};

export default Question;
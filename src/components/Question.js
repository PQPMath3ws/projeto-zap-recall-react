import { useEffect, useState } from "react";

import QuestionStyle from "../styles/QuestionStyle";

import icone_certo from "../images/icone_certo.png";
import icone_erro from "../images/icone_erro.png";
import icone_quase from "../images/icone_quase.png";
import seta_play from "../images/seta_play.png";
import seta_virar from "../images/seta_virar.png";

const Question = (props) => {
    const [canNormalize, setCanNormalize] = useState(true);
    const [clickedStep, setClickedStep] = useState(0);
    const [canChange, setCanChange] = useState([false, false, false]);

    function normalizeCards() {
        let cards = [...props.cards];
        cards.forEach(card => delete card.result);
        props.setCards(cards);
        setCanNormalize(false);
    }

    function flipCardClick() {
        setClickedStep(clickedStep + 1);
    }

    function setQuestionStatus(status) {
        let cards = [...props.cards];
        cards[props.index].result = status;
        props.setCards(cards);
        flipCardClick();
    }

    useEffect(() => {
        if (clickedStep === 0 && canNormalize) normalizeCards();
        if (clickedStep === 1)  {
            setTimeout(() => setCanChange([true, false, false]), 400);
        }
        if (clickedStep === 2) {
            flipCardClick();
            setTimeout(() => setCanChange([true, true, false]), 400);
        }
        if (clickedStep === 4) {
            flipCardClick();
            setTimeout(() => setCanChange([true, true, true]), 400);
        }
    });

    return (
        <QuestionStyle.QuestionDiv clickedStep={clickedStep} data-test="flashcard">
            {!canChange[0] ? <QuestionStyle.ContentDiv clickedStep={clickedStep}>
                <QuestionStyle.QuestionText data-test="flashcard-text">Pergunta {props.questionNumber}</QuestionStyle.QuestionText>
                <QuestionStyle.QuestionPlayImage src={seta_play} alt="" onClick={clickedStep === 0 ? () => flipCardClick() : null} data-test="play-btn"></QuestionStyle.QuestionPlayImage>
            </QuestionStyle.ContentDiv> : !canChange[1] ? <QuestionStyle.ContentDiv clickedStep={clickedStep}>
                <QuestionStyle.QuestionRevealedText data-test="flashcard-text">{props.card.question}</QuestionStyle.QuestionRevealedText>
                <QuestionStyle.QuestionRotateImage src={seta_virar} alt="" onClick={clickedStep === 1 ? () => flipCardClick() : null} data-test="turn-btn"></QuestionStyle.QuestionRotateImage>
            </QuestionStyle.ContentDiv> : !canChange[2] ? <QuestionStyle.ContentDiv clickedStep={clickedStep}>
                <QuestionStyle.AnswerRevealedText data-test="flashcard-text">{props.card.answer}</QuestionStyle.AnswerRevealedText>
                <QuestionStyle.AlternativesDiv>
                    <QuestionStyle.WrongButton onClick={() => setQuestionStatus("wrong")} data-test="no-btn">Não lembrei</QuestionStyle.WrongButton>
                    <QuestionStyle.DoubtButton onClick={() => setQuestionStatus("almost")} data-test="partial-btn">Quase não lembrei</QuestionStyle.DoubtButton>
                    <QuestionStyle.CorrectButton onClick={() => setQuestionStatus("correct")} data-test="zap-btn">Zap!</QuestionStyle.CorrectButton>
                </QuestionStyle.AlternativesDiv>
            </QuestionStyle.ContentDiv> : <QuestionStyle.ContentDiv clickedStep={clickedStep}>
                <QuestionStyle.QuestionText status={props.card.result} data-test="flashcard-text">Pergunta {props.questionNumber}</QuestionStyle.QuestionText>
                <QuestionStyle.QuestionStatusImage src={props.card.result === "wrong" ? icone_erro : props.card.result === "almost" ? icone_quase : icone_certo} alt="" data-test={props.card.result === "wrong" ? "no-icon" : props.card.result === "almost" ? "partial-icon" : "zap-icon"}></QuestionStyle.QuestionStatusImage>
            </QuestionStyle.ContentDiv>}
        </QuestionStyle.QuestionDiv>
    );
};

export default Question;
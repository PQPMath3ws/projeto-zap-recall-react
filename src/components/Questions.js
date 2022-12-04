import { useState } from "react";

import icone_certo from "../images/icone_certo.png";
import icone_erro from "../images/icone_erro.png";
import icone_quase from "../images/icone_quase.png";
import logo from "../images/logo.png";
import party from "../images/party.png";
import sad from "../images/sad.png";

import QuestionsStyle from "../styles/QuestionsStyle";

import Cards from "../const/Cards";

import Question from "./Question";

const Questions = (props) => {
    const [cards, setCards] = useState(Cards);

    return (
        <QuestionsStyle.QuestionsDiv isStartingComponent={props.isStartingComponent}>
            <QuestionsStyle.HeaderDiv>
                <QuestionsStyle.LogoImage src={logo} alt="Logo do ZapRecall, constituída por uma imagem de um raio amarela, com contorno vermelho"></QuestionsStyle.LogoImage>
                <QuestionsStyle.ZapRecallText>ZapRecall</QuestionsStyle.ZapRecallText>
            </QuestionsStyle.HeaderDiv>
            <QuestionsStyle.Questions answeredQuestions={cards.filter(card => card.result).length} totalQuestions={cards.length}>
                {cards.map((card, index) => <Question card={card} cards={cards} setCards={setCards} index={index} questionNumber={index + 1}></Question>)}
            </QuestionsStyle.Questions>
            <QuestionsStyle.StatusDiv answeredQuestions={cards.filter(card => card.result).length} totalQuestions={cards.length}>
                <QuestionsStyle.StatusDivContent answeredQuestions={cards.filter(card => card.result).length} totalQuestions={cards.length} data-test="finish-text">
                    {cards.length === cards.filter(card => card.result).length ? <>
                        {cards.filter(card => card.result === "wrong").length > 0 ? <>
                            <QuestionsStyle.FinalStatusMessageDiv>
                                <QuestionsStyle.FinalStatusMessageDivImage src={sad} alt=""></QuestionsStyle.FinalStatusMessageDivImage>
                                <QuestionsStyle.FinalStatusMessageDivP>Puts...</QuestionsStyle.FinalStatusMessageDivP>
                            </QuestionsStyle.FinalStatusMessageDiv>
                            <QuestionsStyle.FinalStatusMessage>
                                Ainda faltam alguns... Mas não desanime!
                            </QuestionsStyle.FinalStatusMessage>
                        </> : <>
                            <QuestionsStyle.FinalStatusMessageDiv>
                                <QuestionsStyle.FinalStatusMessageDivImage src={party} alt=""></QuestionsStyle.FinalStatusMessageDivImage>
                                <QuestionsStyle.FinalStatusMessageDivP>Parabéns!</QuestionsStyle.FinalStatusMessageDivP>
                            </QuestionsStyle.FinalStatusMessageDiv>
                            <QuestionsStyle.FinalStatusMessage>
                                Você não esqueceu de nenhum flashcard!
                            </QuestionsStyle.FinalStatusMessage>
                        </>}
                    </> : null}
                    <QuestionsStyle.StatusText data-test="footer">
                        {cards.filter(card => card.result).length}/{cards.length} CONCLUÍDOS
                    </QuestionsStyle.StatusText>
                    {cards.filter(card => card.result).length > 0 ? <QuestionsStyle.StatusImagesDiv>
                        {cards.filter(card => card.result).map(question => <QuestionsStyle.StatusImage src={question.result === "wrong" ? icone_erro : question.result === "almost" ? icone_quase : icone_certo} alt="" data-test={question.result === "wrong" ? "no-icon" : question.result === "almost" ? "partial-icon" : "zap-icon"}></QuestionsStyle.StatusImage>)}
                    </QuestionsStyle.StatusImagesDiv> : null}
                </QuestionsStyle.StatusDivContent>
            </QuestionsStyle.StatusDiv>
        </QuestionsStyle.QuestionsDiv>
    );
};

export default Questions;
import logo from "../images/logo.png";

import QuestionsStyle from "../styles/QuestionsStyle";

import Cards from "../const/Cards";

import Question from "./Question";
import { useState } from "react";

const Questions = (props) => {
    const [cards, setCards] = useState(Cards);

    return (
        <QuestionsStyle.QuestionsDiv isStartingComponent={props.isStartingComponent}>
            <QuestionsStyle.HeaderDiv>
                <QuestionsStyle.LogoImage src={logo} alt="Logo do ZapRecall, constituída por uma imagem de um raio amarela, com contorno vermelho"></QuestionsStyle.LogoImage>
                <QuestionsStyle.ZapRecallText>ZapRecall</QuestionsStyle.ZapRecallText>
            </QuestionsStyle.HeaderDiv>
            <QuestionsStyle.Questions>
                {cards.map((card, index) => <Question card={card} cards={cards} setCards={setCards} index={index} questionNumber={index + 1}></Question>)}
            </QuestionsStyle.Questions>
            <QuestionsStyle.StatusDiv>
                <QuestionsStyle.StatusText>
                    {cards.filter(card => card.result).length}/{cards.length} CONCLUÍDOS
                </QuestionsStyle.StatusText>
            </QuestionsStyle.StatusDiv>
        </QuestionsStyle.QuestionsDiv>
    );
};

export default Questions;
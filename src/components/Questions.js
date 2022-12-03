import { useState } from "react";

import icone_certo from "../images/icone_certo.png";
import icone_erro from "../images/icone_erro.png";
import icone_quase from "../images/icone_quase.png";
import logo from "../images/logo.png";

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
            <QuestionsStyle.Questions>
                {cards.map((card, index) => <Question card={card} cards={cards} setCards={setCards} index={index} questionNumber={index + 1}></Question>)}
            </QuestionsStyle.Questions>
            <QuestionsStyle.StatusDiv>
                <QuestionsStyle.StatusText>
                    {cards.filter(card => card.result).length}/{cards.length} CONCLUÍDOS
                    {cards.filter(card => card.result).length > 0 ? <QuestionsStyle.StatusImagesDiv>
                        {cards.filter(card => card.result).map(question => <QuestionsStyle.StatusImage src={question.result === "wrong" ? icone_erro : question.result === "almost" ? icone_quase : icone_certo} alt=""></QuestionsStyle.StatusImage>)}
                    </QuestionsStyle.StatusImagesDiv> : null}
                </QuestionsStyle.StatusText>
            </QuestionsStyle.StatusDiv>
        </QuestionsStyle.QuestionsDiv>
    );
};

export default Questions;
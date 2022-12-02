import logo from "../images/logo.png";

import QuestionsStyle from "../styles/QuestionsStyle";

import Cards from "../const/Cards";

import Question from "./Question";

const Questions = (props) => (
    <QuestionsStyle.QuestionsDiv isStartingComponent={props.isStartingComponent}>
        <QuestionsStyle.HeaderDiv>
            <QuestionsStyle.LogoImage src={logo} alt="Logo do ZapRecall, constituída por uma imagem de um raio amarela, com contorno vermelho"></QuestionsStyle.LogoImage>
            <QuestionsStyle.ZapRecallText>ZapRecall</QuestionsStyle.ZapRecallText>
        </QuestionsStyle.HeaderDiv>
        <QuestionsStyle.Questions>
            {Cards.map((card, index) => <Question card={card} questionNumber={index + 1}></Question>)}
        </QuestionsStyle.Questions>
        <QuestionsStyle.StatusDiv>
            <QuestionsStyle.StatusText>
                0/{Cards.length} CONCLUÍDOS
            </QuestionsStyle.StatusText>
        </QuestionsStyle.StatusDiv>
    </QuestionsStyle.QuestionsDiv>
);

export default Questions;
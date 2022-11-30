import logo from "../images/logo.png";

import QuestionsStyle from "../styles/QuestionsStyle";

const Questions = (props) => (
    <QuestionsStyle.QuestionsDiv isStartingComponent={props.isStartingComponent}>
        <QuestionsStyle.HeaderDiv>
            <QuestionsStyle.LogoImage src={logo} alt="Logo do ZapRecall, constituída por uma imagem de um raio amarela, com contorno vermelho"></QuestionsStyle.LogoImage>
            <QuestionsStyle.ZapRecallText>ZapRecall</QuestionsStyle.ZapRecallText>
        </QuestionsStyle.HeaderDiv>
        <QuestionsStyle.StatusDiv>
            <QuestionsStyle.StatusText>
                0/4 CONCLUÍDOS
            </QuestionsStyle.StatusText>
        </QuestionsStyle.StatusDiv>
    </QuestionsStyle.QuestionsDiv>
);

export default Questions;
import QuestionStyle from "../styles/QuestionStyle";

import seta_play from "../images/seta_play.png";

const Question = (props) => {
    return (
        <QuestionStyle.QuestionDiv>
            <QuestionStyle.QuestionText>Pergunta {props.questionNumber}</QuestionStyle.QuestionText>
            <QuestionStyle.QuestionPlayImage src={seta_play} alt=""></QuestionStyle.QuestionPlayImage>
        </QuestionStyle.QuestionDiv>
    );
};

export default Question;
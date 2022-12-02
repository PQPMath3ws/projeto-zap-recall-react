import styled from "styled-components";

import Animations from "../const/Animations";

const QuestionStyle = {
    QuestionDiv: styled.div`
        width: 340px;
        height: 65px;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 16px;
        padding-right: 16px;
        margin-bottom: 30px;
        cursor: pointer;
    `,
    QuestionText: styled.p`
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #333333;
    `,
    QuestionPlayImage: styled.img`
        width: 20px;
        height: 23px;
    `,
};

export default QuestionStyle;
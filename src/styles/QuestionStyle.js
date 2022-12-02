import styled, { css } from "styled-components";

import Animations from "../const/Animations";

const QuestionStyle = {
    ContentDiv: styled.div`
        display: flex;
        ${props => props.clickedStep === 0 ? "align-items: center;" : ""}
        justify-content: space-between;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 16px;
        padding-right: 16px;
        ${props => props.clickedStep === 1 || props.clickedStep === 3 ? css`animation: ${Animations.fadeInAnimation} 1s linear normal;` : ""}
    `,
    QuestionDiv: styled.div`
        width: 50%;
        height: auto;
        position: relative;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        margin-bottom: 30px;
        ${props => props.clickedStep === 1 || props.clickedStep === 3 ? css`animation: ${Animations.flip} 0.5s linear normal;` : ""}
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
        cursor: pointer;
    `,
    QuestionRevealedText: styled.p`
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    `,
    QuestionRotateImage: styled.img`
        width: 24px;
        height: 14px;
        margin-top: 50px;
        cursor: pointer;
    `
};

export default QuestionStyle;
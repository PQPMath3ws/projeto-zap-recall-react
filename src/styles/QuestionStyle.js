import styled, { css } from "styled-components";

import Animations from "../const/Animations";

const QuestionStyle = {
    ContentDiv: styled.div`
        display: flex;
        ${props => props.clickedStep === 0 || props.clickedStep === 5 ? "align-items: center;" : ""}
        ${props => props.clickedStep === 3 ? "flex-direction: column;" : ""}
        ${props => props.clickedStep === 3 ? "text-align: start;" : ""}
        justify-content: space-between;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 16px;
        padding-right: 16px;
        ${props => props.clickedStep === 1 || props.clickedStep === 3 || props.clickedStep === 5 ? css`animation: ${Animations.fadeInAnimation} 1s linear normal;` : ""}
        ${props => props.clickedStep === 2 || props.clickedStep === 4 ? css`animation: ${Animations.fadeOutAnimation} 1s linear normal;` : ""}
    `,
    QuestionDiv: styled.div`
        width: 75%;
        height: auto;
        position: relative;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        margin-bottom: 30px;
        ${props => props.clickedStep === 1 || props.clickedStep === 3 || props.clickedStep === 5 ? css`animation: ${Animations.flip} 0.5s linear normal;` : ""}
    `,
    QuestionText: styled.p`
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        ${props => props.status === "wrong" ? "color: #FF3030;" : props.status === "almost" ? "color: #FF922E;" : props.status === "correct" ? "color: #2FBE34;" : "color: #333333;"}
        ${props => props.status === "wrong" || props.status === "almost" || props.status === "correct" ? "text-decoration: line-through;" : ""}
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
        color: #333333;
    `,
    QuestionRotateImage: styled.img`
        width: 24px;
        height: 14px;
        margin-top: 50px;
        cursor: pointer;
    `,
    AnswerRevealedText: styled.p`
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #333333;
    `,
    AlternativesDiv: styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        gap: 20px;
    `,
    WrongButton: styled.button`
        width: 90%;
        height: 40px;
        border: none;
        font-family: 'Recursive';
        font-style: normal;
        font-size: 12px;
        color: #FFFFFF;
        border-radius: 5px;
        background-color: #FF3030;
        cursor: pointer;
    `,
    DoubtButton: styled.button`
        width: 90%;
        height: 40px;
        border: none;
        font-family: 'Recursive';
        font-style: normal;
        font-size: 12px;
        color: #FFFFFF;
        border-radius: 5px;
        background-color: #FF922E;
        cursor: pointer;
    `,
    CorrectButton: styled.button`
        width: 90%;
        height: 40px;
        border: none;
        font-family: 'Recursive';
        font-style: normal;
        font-size: 12px;
        color: #FFFFFF;
        border-radius: 5px;
        background-color: #2FBE34;
        cursor: pointer;
    `,
    QuestionStatusImage: styled.img`
        width: 23px;
        height: 23px;
    `
};

export default QuestionStyle;
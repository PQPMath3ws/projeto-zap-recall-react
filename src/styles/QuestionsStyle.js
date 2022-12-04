import styled, { css } from "styled-components";

import Animations from "../const/Animations";

const QuestionsStyle = {
    QuestionsDiv: styled.div`
        display: ${props => props.isStartingComponent ? "flex" : "none"};
        justify-content: center;
        text-align: center;
        opacity: ${props => props.isStartingComponent ? 1 : 0};
        animation-name: ${props => props.isStartingComponent ? Animations.fadeInAnimation : Animations.fadeOutAnimation};
        animation-duration: 0.6s;
        animation-timing-function: linear;
        animation-direction: normal;
    `,
    HeaderDiv: styled.div`
        top: 50px;
        position: fixed;
        display: flex;
        flex-direction: row;
        align-items: center;
    `,
    LogoImage: styled.img`
        width: 52px;
        height: 60px;
    `,
    ZapRecallText: styled.p`
        margin-left: 20px;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        transform: rotate(0.58deg);
    `,
    Questions: styled.div`
        top: 140px;
        position: fixed;
        ${props => props.answeredQuestions === props.totalQuestions ? "height: calc(100% - 310px);" : "height: calc(100% - 210px);"}
        left: 50%;
        margin-left: -25%;
        width: 100%;
        overflow-y: scroll;
    `,
    StatusDiv: styled.div`
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        bottom: 0;
        width: 100%;
        ${props => props.answeredQuestions === props.totalQuestions ? "height: 171px;" : "height: 70px;"}
        ${props => props.answeredQuestions === props.totalQuestions ? css`animation: ${Animations.StatusHeightAnim} 0.6s linear normal;` : ""}
        background-color: #FFFFFF;
        box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    `,
    StatusDivContent: styled.div`
        ${props => props.answeredQuestions === props.totalQuestions ? css`animation: ${Animations.fadeInAnimation} 2.0s linear normal;` : ""}
        display: flex;
        align-items: center;
        flex-direction: column;
    `,
    FinalStatusMessageDiv: styled.div`
        display: flex;
        justify-content: center;
    `,
    FinalStatusMessageDivImage: styled.img`
        width: 23px;
        height: 23px;
    `,
    FinalStatusMessageDivP: styled.p`
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #333333;
        margin-left: 14px;
    `,
    FinalStatusMessage: styled.p`
        width: 222px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #333333;
        padding-top: 16px;
        padding-bottom: 16px;
    `,
    StatusText: styled.p`
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #333333;
    `,
    StatusImagesDiv: styled.div`
        margin-top: 8px;
        display: flex;
        justify-content: center;
        gap: 10px;
    `,
    StatusImage: styled.img`
        width: 23px;
        height: 23px;
    `,
};

export default QuestionsStyle;
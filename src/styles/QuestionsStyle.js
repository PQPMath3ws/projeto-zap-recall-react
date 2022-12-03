import styled from "styled-components";

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
        height: calc(100% - 200px);
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
        height: 70px;
        background-color: #FFFFFF;
        box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    `,
    StatusText: styled.p`
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #333333;
    `,
    StatusImagesDiv: styled.div`
        margin-top: 6px;
        display: flex;
        justify-content: center;
        gap: 10px;
    `,
    StatusImage: styled.img`
        width: 23px;
        height: 23px;
    `
};

export default QuestionsStyle;
import styled from "styled-components";

import Animations from "../const/Animations";

const WelcomeStyle = {
    WelcomeDiv: styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        text-align: center;
        opacity: ${props => props.isStartingComponent ? 1 : 0};
        animation-name: ${props => props.isStartingComponent ? Animations.fadeInAnimation : Animations.fadeOutAnimation};
        animation-duration: 0.6s;
        animation-timing-function: linear;
        animation-direction: normal;
    `,
    LogoImage: styled.img`
        width: 70%;
        height: 70%;
    `,
    ZapRecallText: styled.p`
        margin-top: 34px;
        text-align: center;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        color: #FFFFFF;
        letter-spacing: -0.012em;
    `,
    StartButton: styled.button`
        width: 246px;
        height: 54px;
        margin-top: 54px;
        background-color: #FFFFFF;
        color: #D70900;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        cursor: pointer;
    `
};

export default WelcomeStyle;
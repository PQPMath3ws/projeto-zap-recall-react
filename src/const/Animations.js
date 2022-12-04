import { keyframes } from "styled-components";

const Animations = {
    fadeInAnimation: keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `,
    fadeOutAnimation: keyframes`
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    `,
    flip: keyframes`
        0% {
            scale: 1;
            transform: rotateY(0deg);
        }
        50% {
            scale: 1.2;
            transform: rotateY(90deg);
        }
        100% {
            scale: 1;
            transform: rotateY(180deg);
        }
    `,
    StatusHeightAnim: keyframes`
        0% {
            height: 70px;
        }
        100% {
            height: 171px;
        }
    `
};

export default Animations;
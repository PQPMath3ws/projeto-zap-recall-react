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
};

export default Animations;
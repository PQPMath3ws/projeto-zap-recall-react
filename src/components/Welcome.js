import logo from "../images/logo.png";

import WelcomeStyle from "../styles/WelcomeStyle";

const Welcome = (props) => (
    <WelcomeStyle.WelcomeDiv isStartingComponent={props.isStartingComponent}>
        <WelcomeStyle.LogoImage src={logo} alt="Logo do ZapRecall, constituída por uma imagem de um raio amarela, com contorno vermelho"></WelcomeStyle.LogoImage>
        <WelcomeStyle.ZapRecallText>ZapRecall</WelcomeStyle.ZapRecallText>
        <WelcomeStyle.StartButton onClick={props.startApp} data-test="start-btn">Inicial Recall!</WelcomeStyle.StartButton>
    </WelcomeStyle.WelcomeDiv>
);

export default Welcome;
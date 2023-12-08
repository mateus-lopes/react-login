import React from "react";
import Container from "../components/Container";
import BackImage from "../components/BackImage";
import ContainerForm from "../components/ContainerForm";
import FormLogin from "../components/Forms/Login";
import TitleH2 from "../components/TitleH2";
import BtnIcon from "../components/BtnIcon";
import LineHr from "../components/LineHr";

const Login = () => {
  return (
    <main>
      <Container>
        <BackImage />
        <ContainerForm>
          <TitleH2 title="Sign in to LoginApp" />
          <BtnIcon text="Sign In With Google" icon="google" />
          <BtnIcon text="Sign In With Facebook" icon="facebook" />
          <LineHr text="ou" />
          <FormLogin />
        </ContainerForm>
      </Container>
    </main>
  );
};

export default Login;
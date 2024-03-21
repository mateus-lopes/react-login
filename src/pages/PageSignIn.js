import React from "react";
import Container from "../components/Containers";
import BackImage from "../components/BackImage";
import ContainerForm from "../components/Containers/Form";
import FormLogin from "../components/Forms/FormSignIn";
import BtnIcon from "../components/Icons";
import LineHr from "../components/LineHr";

const Login = () => {
  return (
    <main>
      <Container>
        <BackImage />
        <ContainerForm>
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
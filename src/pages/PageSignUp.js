import React from "react";
import Container from "../components/Containers";
import BackImage from "../components/BackImage";
import ContainerForm from "../components/Containers/Form";
import FormCreateAccount from "../components/Forms/FormSignUp";
import BtnIcon from "../components/Icons";
import LineHr from "../components/LineHr";

const CreateAccount = () => {
  return (
    <main>
      <Container>
        <BackImage />
        <ContainerForm>
          <div className="flex justify-center gap-4">
            <BtnIcon text="" icon="google" />
            <BtnIcon text="" icon="facebook" />
          </div>
          <LineHr text="ou" />
          <FormCreateAccount />
        </ContainerForm>
      </Container>
    </main>
  );
};

export default CreateAccount;

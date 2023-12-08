import React from "react";
import Container from "../components/Container";
import BackImage from "../components/BackImage";
import TitleH2 from "../components/TitleH2";
import BtnIcon from "../components/BtnIcon";
import BtnPrimary from "../components/BtnPrimary";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main>
      <Container>
        <BackImage className="flex justify-center items-center" full={true}>
          <div className="max-w-sm md:max-w-lg lg:max-w-3xl bg-white p-16 flex gap-6 flex-col">
            <TitleH2 title="Welcome to the LoginApp" />
            <p>
              This React project is a user authentication system designed to provide convenience and security. With an intuitive interface and support for multiple providers, it offers flexibility of use. Feel free to tailor it to your needs or implement it directly into your project
            </p>
            <Link to="/login">
              <BtnPrimary text="Let's go" />
            </Link>
            <Link to="/">
              <BtnIcon icon="a" text="Help" />
            </Link>
          </div>
        </BackImage>
      </Container>
    </main>
  );
};

export default Login;
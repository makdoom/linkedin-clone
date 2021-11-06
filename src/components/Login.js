import styled from "styled-components";
import React from "react";

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <HeroText>
          <h1>Welcome to your professional community</h1>
          <Form>
            <Google>
              <img src="/images/google.svg" alt="" />
              <span>Sign in with Google</span>
            </Google>
          </Form>
        </HeroText>
        <HeroImage>
          <img src="/images/login-hero1.svg" alt="" />
        </HeroImage>
      </Section>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  max-width: 1150px;
  width: 100%;
  margin: auto;
  padding: 0;

  @media (max-width: 991px) {
    padding: 0 10px;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  position: relative;
  flex-wrap: nowrap;

  & > a {
    width: 135px;

    @media (max-width: 768px) {
      padding: 0 5px;
      width: 85px;
    }
  }

  div {
    display: flex;
  }
`;

const Join = styled.a`
  font-size: 1rem;
  padding: 10px 12px;
  text-decoration: none;
  color: #555;
  margin-right: 12px;
  cursor: pointer;
  display: block;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
    color: #000;
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #006097;
  color: #006097;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 25px;
  border-radius: 30px;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;

  &:hover {
    box-shadow: inset 0 0 0 2px #006097;
    background: rgba(112, 181, 249, 0.15);
  }
`;

const Section = styled.section`
  display: flex;
  min-height: 700px;
  padding-bottom: 140px;
  padding-top: 40px;
  position: relative;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    min-height: 0;
    flex-direction: column-reverse;
  }
`;

const HeroText = styled.div`
  width: 45%;

  h1 {
    font-size: 3.5rem;
    color: rgba(143, 88, 73, 1);
    font-weight: 400;

    @media (max-width: 768px) {
      margin-top: 2rem;
      text-align: center;
      width: 100%;
      font-size: 1.4rem;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const HeroImage = styled.div`
  width: 55%;
  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
const Form = styled.div`
  margin-top: 10rem;
  width: 85%;

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100%;
  }
`;

const Google = styled.button`
  width: 100%;
  margin: auto;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 30px;
  background: #fff;
  height: 56px;
  font-size: 1.1rem;
  /* box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 10px; */
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: inset 0 0 0 2px #006097;

  &:hover {
    background: rgba(112, 181, 249, 0.15);
  }
  span {
    margin-left: 0.3rem;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

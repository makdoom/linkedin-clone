import styled from "styled-components";
import React from "react";

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
      </Nav>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  padding: 0;
`;

const Nav = styled.div`
  max-width: 1150px;
  width: 100%;
  margin: auto;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

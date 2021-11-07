import React from "react";
import styled from "styled-components";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";

const Home = () => {
  return (
    <Container>
      <Section>
        <a>
          <p>
            <span>Full Stack Development </span> 10 Month Course. Online Live
            classes with IIT Roorkee faculty <i>Ad</i>{" "}
          </p>
        </a>
      </Section>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 0 15px;
  padding-top: 70px;
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
`;

const Section = styled.div`
  text-align: center;
  width: 100%;
  a {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.8);

    &:hover {
      text-decoration: underline;
    }
    span {
      color: #006097;
    }
    i {
      font-size: 0.8rem;
    }
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 1fr);
  column-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

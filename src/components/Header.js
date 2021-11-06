import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <SearchBox>
          <SearchIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
          </SearchIcon>
          <input type="text" placeholder="Search" />
        </SearchBox>
        <NavMenu>
          <NavListWrap>
            <NavList className="active">
              <a href="/">
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a href="/">
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a>
                <img src="/images/user.svg" alt="" />
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </NavMenu>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 0 20px;
`;

const Content = styled.div`
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  /* height: 50px; */
  min-height: 100%;
  position: relative;
`;

const Logo = styled.span`
  font-size: 0px;
  margin-right: 10px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #eef3f8;
  width: 280px;

  input {
    height: 34px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 14px;
    font-family: "Inter";
    padding: 0 8px 0 0px;

    ::placeholder {
      font-size: 16px;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }
`;

const NavMenu = styled.div`
  margin-left: auto;
  display: block;
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 2px solid #000;
      transform: scaleX(1);
      transition: transform 0.3s ease-ease-in-out;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0%;
    left: 0;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    text-decoration: none;
    font-size: 13px;
    font-weight: 400;
    min-height: 52px;
    min-width: 80px;
    position: relative;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
      height: 55px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const User = styled(NavList)`
  a > img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
`;
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

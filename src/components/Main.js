import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-icon.svg" alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event-icon.svg" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article-icon.svg" alt="" />
            <span>Article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 6px;
  transition: box-shadow 0.2s;
  position: relative;
  border: none;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const ShareBox = styled(CommonCard)`
  padding: 10px 16px;
  div {
    button {
      border: none;
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      background: transparent;
      font-weight: 600;
      min-height: 48px;
      cursor: pointer;
    }

    &:first-child {
      display: flex;
      align-items: center;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 10px;
      }

      button {
        padding-left: 16px;
        flex-grow: 1;
        font-size: 0.95rem;
        font-weight: 200;
        margin: 4px 0;
        background: #fff;
        border-radius: 35px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        color: rgba(0, 0, 0, 0.6);
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.5rem;
      justify-content: space-between;

      button {
        width: 88px;
        display: flex;
        justify-content: space-around;
        border-radius: 4px;
        transition: 0.3s ease;

        &:hover {
          background: rgba(0, 0, 0, 0.08);
        }
      }
    }
  }
`;

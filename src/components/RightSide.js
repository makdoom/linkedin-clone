import React from "react";
import styled from "styled-components";

const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        <Heading>
          <p>Add to your feed</p>
        </Heading>
        <FeedList>
          <li>
            <a>
              <Hashtag />
            </a>
            <div className="tag-container">
              <div>
                <span>#Linkedin</span>
                <p>50m Followers</p>
              </div>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Hashtag />
            </a>
            <div className="tag-container">
              <div>
                <span>#Instagram</span>
                <p>10m Followers</p>
              </div>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Hashtag />
            </a>
            <div className="tag-container">
              <div>
                <span>#Facebook</span>
                <p>20m Followers</p>
              </div>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommendations>
          View all Recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendations>
      </FollowCard>
      <NewsCard>
        <Title>
          <p>Linkedin News</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
            </svg>
          </span>
        </Title>
        <NewsListWrapper>
          <NewsList>
            <a>
              <p>
                <span></span> A Diwali bonanza for job seekers
              </p>
              <span className="short-desc">
                <p>3d ago,</p>
                <p>10,648 readers</p>
              </span>
            </a>
          </NewsList>
          <NewsList>
            <a>
              <p>
                <span></span> Gen Z workers baffle older colleagues
              </p>
              <span className="short-desc">
                <p>5d ago,</p>
                <p>102,642 readers</p>
              </span>
            </a>
          </NewsList>
          <NewsList>
            <a>
              <p>
                <span></span> The boom in tech hiring
              </p>
              <span className="short-desc">
                <p>10d ago,</p>
                <p>11,342 readers</p>
              </span>
            </a>
          </NewsList>
          <NewsList>
            <a>
              <p>
                <span></span> The red flag on s resume
              </p>
              <span className="short-desc">
                <p>3d ago,</p>
                <p>1,648 readers</p>
              </span>
            </a>
          </NewsList>
          <NewsList>
            <a>
              <p>
                <span></span> Go ahed and ask for a raise
              </p>
              <span className="short-desc">
                <p>1d ago,</p>
                <p>13,228 readers</p>
              </span>
            </a>
          </NewsList>
          <NewsList>
            <a>
              <p>
                <span></span> Coovaxin fot WHO nod
              </p>
              <span className="short-desc">
                <p>3d ago,</p>
                <p>110,976 readers</p>
              </span>
            </a>
          </NewsList>
        </NewsListWrapper>
      </NewsCard>
    </Container>
  );
};

export default RightSide;

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
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

const Heading = styled.div`
  padding: 10px 0 0px 10px;
`;
const FeedList = styled.ul`
  margin-top: 1rem;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    font-size: 0.9rem;
    padding: 0 10px;

    .tag-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      & > div {
        display: flex;
        flex-direction: column;

        p {
          font-size: 0.8rem;
          color: rgba(0, 0, 0, 0.6);
        }
      }

      button {
        box-shadow: inset 0 0 0 1px #006097;
        background: transparent;
        border: none;
        outline: none;
        color: #006097;
        font-size: 0.9rem;
        font-weight: 500;
        padding: 6px 12px;
        border-radius: 30px;
        cursor: pointer;
        text-align: center;
        transition: 0.3s;

        &:hover {
          box-shadow: inset 0 0 0 1px #006097;
          background: rgba(112, 181, 249, 0.15);
        }
      }
    }
  }
`;
const Hashtag = styled.div`
  background: url("/images/hashtag.svg");
  background-position: center;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Recommendations = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  img {
    margin-left: 0.2rem;
  }
`;

const NewsCard = styled(FollowCard)``;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    transition: 0.3s ease;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }
  }
`;

const NewsListWrapper = styled.ul``;
const NewsList = styled.li`
  text-align: left;
  cursor: pointer;

  a {
    display: inline-block;
    padding: 5px 10px;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  p {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    span {
      height: 6px;
      width: 6px;
      display: inline-block;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }

  .short-desc {
    display: flex;
    align-items: center;
    padding-left: 0.8rem;
    color: rgba(0, 0, 0, 0.6);

    p {
      font-size: 0.83rem;

      &:first-child {
        margin-right: 0.3rem;
      }
    }
  }
`;

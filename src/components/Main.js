import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PostModal from "./PostModal";
import { getArticleAPI } from "../actions";
import ReactPlayer from "react-player";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };
  return (
    <>
      <Container>
        <ShareBox>
          <div>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} referrerPolicy="no-referrer" />
            ) : (
              <img src="/images/user.svg" alt="" referrerPolicy="no-referrer" />
            )}

            <button onClick={(e) => handleClick(e)}> Start a post</button>
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
        {props.loading && <img src={"/images/spin.gif"} className="loader" />}

        {props.articles.length === 0 ? (
          <p>There are no articles </p>
        ) : (
          <Content>
            {props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Article key={key}>
                  <SharedActor>
                    <a>
                      <img src={article.actor.image} alt="" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <a>
                        <img src="/images/elipsis.svg" alt="" />
                      </a>
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImg>
                    <a>
                      {!article.sharedImg && article.video ? (
                        <ReactPlayer width={"100%"} url={article.video} />
                      ) : (
                        article.sharedImg && (
                          <img src={article.sharedImg} alt="" />
                        )
                      )}
                    </a>
                  </SharedImg>
                  <SocialCounts>
                    <li>
                      <button>
                        <img
                          src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                          alt=""
                        />
                        <img
                          src="https://static-exp1.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1"
                          alt=""
                        />
                        <img src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" />
                        <span>1,514 -</span>
                      </button>
                    </li>
                    <li>
                      <a>{article.comments} comments</a>
                    </li>
                  </SocialCounts>
                  <Stats>
                    <button>
                      <img src="/images/like-icon.svg" alt="" />
                      <span>Like</span>
                    </button>
                    <button>
                      <img src="/images/comment-icon.svg" alt="" />
                      <span>Comments</span>
                    </button>
                    <button>
                      <img src="/images/share-icon.svg" alt="" />
                      <span>Share</span>
                    </button>
                    <button>
                      <img src="/images/send-icon.svg" alt="" />
                      <span>Send</span>
                    </button>
                  </Stats>
                </Article>
              ))}
          </Content>
        )}

        <PostModal showModal={showModal} handleClick={handleClick} />
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticleAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const Container = styled.div`
  grid-area: main;
  text-align: center;

  & > .loader {
    width: 35px;
  }
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
  margin-bottom: 10px;
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

const Article = styled(CommonCard)`
  overflow: visible;
  padding: 15px;
  margin-bottom: 10px;
`;

const SharedActor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  text-align: left;

  a {
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    align-items: center;

    & > img {
      height: 48px;
      width: 48px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin-left: 0.4rem;

      span {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);

        &:first-child {
          color: #000;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }

  button {
    position: absolute;
    top: 6px;
    right: 12px;
    background: transparent;
    border: none;
    outline: none;
    border-radius: 50%;
    padding: 3px;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.08);
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const Description = styled.div`
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 0.9rem;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const SocialCounts = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  li {
    margin-right: 0.4rem;
    color: rgba(0, 0, 0, 0.6);

    button {
      border: none;
      outline: none;
      background: transparent;
      cursor: pointer;
      display: flex;
      align-items: center;

      span {
        margin-left: 0.3rem;
        color: rgba(0, 0, 0, 0.6);
      }

      &:hover > span {
        color: #0a66c2;
        text-decoration: underline;
        cursor: pointer;
      }
    }

    &:last-child {
      font-size: 0.8rem;

      a {
        &:hover {
          color: #0a66c2;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;

  button {
    padding: 10px 8px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    transition: 0.3s ease;
    border-radius: 4px;

    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }
    &:hover > span {
      background: rgba(0, 0, 0, 0);
    }

    span {
      font-size: 0.95rem;
      margin-left: 0.3rem;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;
const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

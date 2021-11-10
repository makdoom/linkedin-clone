import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../actions";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`Not an image the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) return;

    const payload = {
      image: shareImage,
      video: videoLink,
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    props.postArticle(payload);
    reset(e);
  };
  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.handleClick(e);
  };
  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a Post</h2>
              <button onClick={(e) => reset(e)}>
                <img src="/images/close.svg" alt="" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>{props.user.displayName}</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  placeholder="What do you want to talk about ..."
                  onChange={(e) => setEditorText(e.target.value)}
                  autoFocus={true}
                ></textarea>

                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      placeholder="Video URL "
                      accept="image/gif , image/jpeg, image/jpg, image/png"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file">Select an image to share</label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} />
                    )}
                  </UploadImage>
                ) : (
                  assetArea === "media" && (
                    <>
                      <input
                        className="video"
                        placeholder="Video URL"
                        type="text"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer width={"100%"} url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAssets>
                <AssetsButton onClick={() => switchAssetArea("image")}>
                  <img src="/images/photo-icon.svg" alt="" />
                </AssetsButton>
                <AssetsButton onClick={() => switchAssetArea("media")}>
                  <img src="/images/video-icon.svg" alt="" />
                </AssetsButton>
              </AttachAssets>
              <ShareComment>
                <AssetsButton>
                  <img src="/images/comment-icon.svg" alt="" />
                  <span>Anyone</span>
                </AssetsButton>
              </ShareComment>

              <PostButton
                disabled={!editorText ? true : false}
                onClick={(e) => postArticle(e)}
              >
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.8);
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background: #fff;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 40px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    outline: none;
    background: transparent;
    border-radius: 50%;
    height: 38px;
    width: 38px;
    cursor: pointer;

    img {
      pointer-events: none;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;

  img {
    height: 48px;
    width: 48px;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 1rem;
    margin-left: 5px;
  }
`;

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
`;

const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
`;
const AssetsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 40px;
  color: rgba(0, 0, 0, 0.5);
`;
const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  button {
    padding: 10px;
  }
  img {
    width: 20px;
  }
  span {
    margin-left: 0.2rem;
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  font-size: 1rem;
  padding: 10px 20px;
  background: #0a66c2;
  color: #fff;
  border: none;
  outline: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #004182;
  }
`;

const Editor = styled.div`
  margin: 10px 0;

  textarea {
    width: 100%;
    min-height: 100px;
    outline: none;
    border: none;
    resize: none;
  }
  .video {
    outline: none;
    padding: 7px 15px;
    width: 100%;
    min-height: 20px;
    font-size: 1rem;
  }
`;

const UploadImage = styled.div`
  text-align: center;

  img {
    width: 100%;
  }
`;

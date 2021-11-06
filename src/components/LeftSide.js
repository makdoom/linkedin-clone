import React from "react";
import styled from "styled-components";

const LeftSide = () => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, there !!</Link>
          </a>
          <a>
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow Your Network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
          <a className="viewed">
            <span>Who viewed your profile</span>
            <span>0</span>
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            <span>My Items</span>
          </span>
        </Item>
      </ArtCard>
    </Container>
  );
};

export default LeftSide;

const Container = styled.div`
  grid-area: leftside;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 6px;
  transition: box-shadow 0.2s;
  position: relative;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const UserInfo = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;
const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 465px;
  height: 65px;
`;
const Photo = styled.div`
  background: #fff url("/images/photo.svg") no-repeat center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-clip: content-box;
  border: 2px solid #fff;
  margin: -38px auto 12px;
`;

const Link = styled.div`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;
const AddPhotoText = styled.div`
  font-size: 0.8rem;
  color: #0a66c2;
  margin-top: 4px;
  font-weight: 600;
  cursor: pointer;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;

  .viewed {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.6);
  }

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 10px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      span {
        font-size: 0.85rem;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
`;
const Item = styled.a`
  text-align: left;
  padding: 12px;
  display: block;
  cursor: pointer;
  font-size: 0.85rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  span {
    display: flex;
    align-items: c;
  }

  img {
    margin-right: 0.3rem;
  }
`;

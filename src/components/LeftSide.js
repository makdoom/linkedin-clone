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
            <Link>Welcom, there !!</Link>
          </a>
          <a>
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
        </UserInfo>
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
  /* box-shadow: 0 0 0 1px rgba(0 0 0 ); */
`;

const UserInfo = styled.div`
  padding-bottom: 10px;
  /* padding: 15px; */
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
  font-size: 0.85rem;
  color: #0a66c2;
  margin-top: 4px;
  font-weight: 600;
  cursor: pointer;
`;

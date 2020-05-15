import styled, { css, createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const OverFlowHidden = createGlobalStyle`
  body {
    overflow: hidden;
    overscroll-behavior: none;
  }
`;

export const Image = styled.div`
  object-fit: cover;
  width: 125px;
  height: 125px;
  ${({ inModal }) =>
    inModal &&
    css`
      width: 305px;
      height: 305px;
      &:hover {
        opacity: 0.7;
      }
    `};
  background: no-repeat url(/img/${({ index }) => index}.jpeg);
`;

export const TabLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  width: 50px;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 8px 16px;
  ${({ selected }) =>
    selected &&
    css`
      color: deeppink;
    `}
`;

export const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  justify-content: center;
`;

export const ModalStyled = styled.div`
  position: absolute;
  background: #fff;
  top: ${({ top }) => top}px;
  left: 10%;
  right: 10%;
  border: 2px solid #444;
`;

export const PhotoGrid = styled.div`
  justify-content: center;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 125px);
`;

export const UserGridStyled = styled.div`
  display: grid;
  grid-template-areas:
    "photo name"
    "photo label"
    "photo description";
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 990px) {
    grid-template-areas:
      "photo ."
      "name ."
      "label ."
      "description .";
  }
`;

export const MiniUserGrid = styled.div`
  display: grid;
  justify-content: left;
  grid-template-columns: auto auto;
  gap: 10px;
`;
export const Photo = styled.div`
  grid-area: photo;
`;

export const Name = styled.div`
  grid-area: name;
  font-size: 35px;
  @media (max-width: 990px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Label = styled.div`
  grid-area: label;
  @media (max-width: 990px) {
    margin-bottom: 0.5rem;
  }
`;

export const Description = styled.div`
  grid-area: description;
  max-width: 300px;
`;

export const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  background: no-repeat url(/img/_profile_02.png);
  border-radius: 100%;
  margin: 32px;
  @media (max-width: 990px) {
    margin: 20px;
    width: 120px;
    height: 120px;
  }
  ${({ mini }) =>
    mini &&
    css`
      background: black;
      width: 20px;
      height: auto;
      margin: 4px;
    `}
`;

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const InfoGrid = styled.div`
  padding: 20px;
  display: grid;
  grid-template-rows: 60px auto 40px;
`;

import styled, { css } from "styled-components";

export const Image = styled.div`
  object-fit: cover;
  width: 205px;
  height: 205px;
  ${({ inModal }) =>
    !inModal &&
    css`
      &:hover {
        opacity: 0.7;
      }
    `};
  background: no-repeat url(/img/${({ index }) => index}.jpeg);
`;

export const PhotoGrid = styled.div`
  justify-content: center;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 205px);
`;

export const UserGridStyled = styled.div`
  display: grid;
  grid-template-areas:
    "photo name"
    "photo label"
    "photo description";
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 50px;
`;

export const Photo = styled.div`
  grid-area: photo;
`;

export const Name = styled.div`
  grid-area: name;
  font-size: 35px;
`;

export const Label = styled.div`
  grid-area: label;
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
`;

import React from "react";
import {
  Description,
  Label,
  Name,
  Photo,
  PhotoGrid,
  ProfileImage,
  UserGridStyled,
} from "../GlobalStyles";

const UserGrid = () => {
  return (
    <UserGridStyled>
      <Photo>
        <ProfileImage />
      </Photo>
      <Name>poplogics</Name>
      <Label>
        <strong>400</strong> Followers
      </Label>
      <Description>
        'give me and axe and I will do it myself. trust me'
      </Description>
    </UserGridStyled>
  );
};

export default UserGrid;

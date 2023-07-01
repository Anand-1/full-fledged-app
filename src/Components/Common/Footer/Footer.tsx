import React from "react";
import StyledFooter from "./Footer.styles";
const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div>This is Configured with git !</div>
        <div>
          This Application Will be using StoryBook , Style-components ,
          Typescript
        </div>
        <div> Application is using Chakra UI</div>
        <div>This is using axios for http request</div>
      </StyledFooter>
    </>
  );
};

export default Footer;

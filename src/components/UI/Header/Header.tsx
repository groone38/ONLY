import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  text-align: center;
`;

const StyledLogo = styled.p`
  margin: 40px;
  font-size: 64px;
  font-weight: 700;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>ONLY.</StyledLogo>
    </StyledHeader>
  );
};

export default Header;

import styled from "styled-components";

export const StyledMain = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  span {
    font-size: 40px;
    margin-bottom: 50px;
  }
  button {
    padding: 19px 71px;
    background: #f5f5f5;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 700;
  }
`;

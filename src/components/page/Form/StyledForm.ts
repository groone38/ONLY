import styled from "styled-components";

export const StyledForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const StyledBlogError = styled.div`
  background-color: #f5e9e9;
  padding: 20px;
  border: 1px solid #e26f6f;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 27px;
  span {
    font-weight: 700;
  }
`;

export const StyledEllipse = styled.div`
  background: #ffc8c8;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 14px;
  color: #ee6565;
  display: flex;
  align-items: end;
  justify-content: center;
`;

export const StyleInput = styled.input.attrs(
  (props: { error: string }) => props
)`
  background-color: #f5f5f5;
  border: none;
  outline: none;
  padding: 20px;
  border-radius: 8px;
  border: ${(props) => props.error && "1px solid #E26F6F;"}
  color: ${(props) => props.error && "#E26F6F;"}
`;

export const StyleInputSubmit = styled.input.attrs(
  (props: { btnDis: boolean }) => props
)`
  background-color: #f5f5f5;
  border: none;
  outline: none;
  padding: 20px;
  border-radius: 8px;
  background: ${(props) => (!props.btnDis ? "#4a67ff;" : "#99a9ff")};
  color: white;
`;

export const StyleBlockErrorInput = styled.div`
  margin-bottom: 20px;
  color: #e26f6f;
`;

export const StyleCheckBox = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

export const StyleCheckBoxInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const StyleCheckBoxLabel = styled.label`
  padding-left: 35px;
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid #000000;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  &::after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    background: #4a67ff;
    border-radius: 2px;
    opacity: 0;
    position: absolute;
    top: 4px;
    left: 4px;
    z-index: 1;
  }
  input:checked + &::after {
    opacity: 1;
  }
`;

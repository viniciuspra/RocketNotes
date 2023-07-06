import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  transition: all .2s;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    transform: scale(0.99);
  }

  &:active {
    transform: scale(0.96);
  }
`; 
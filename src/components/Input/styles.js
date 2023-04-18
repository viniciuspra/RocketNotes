import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > svg {
    margin-left: 16px;
  }

  > input {
    width: 100%;
    height: 56px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    padding: 0 16px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
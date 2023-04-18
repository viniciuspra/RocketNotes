import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 10px;

  > button {
    border: none;
    background: none;

    svg {
      color: ${({ theme, isNew }) =>
        isNew ? theme.COLORS.ORANGE : theme.COLORS.RED};
      font-size: 24px;
      border-radius: 50%;
      transition: all 0.3s;
      &:hover {
        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
    }
  }

  > input {
    width: 100%;
    height: 56px;

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
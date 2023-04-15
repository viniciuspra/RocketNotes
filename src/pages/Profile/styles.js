import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    svg {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: -84px auto 0;
`;

export const Avatar = styled.div`
  position: relative;
  width: 186px;

  margin: 0 auto 48px;
  > img {
    width: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }

    > svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
    #avatar {
      display: none;
    }
  }
`
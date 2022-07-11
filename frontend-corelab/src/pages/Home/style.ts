import styled, { css } from "styled-components";
import search from "../../assets/icons/search.png";
import equalizer from "../../assets/icons/equalizer.png";
import edit from "../../assets/icons/edit.png";

export const Home = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.shadowColor};
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    @media (max-width: 300px) {
      background-color: transparent;
    }
  `}
`;

export const HomeContent = styled.main`
  ${({ theme }) => css`
    display: flex;
    min-width: 50%;
    background-color: ${theme.colors.primaryColor};
    align-items: flex-start;
    flex-direction: column;
    @media (max-width: 300px) {
      background-color: transparent;
    }
  `}
`;
export const HomeContentSearch = styled.div`
  width: 100%;
  display: flex;
`;
export const HomeSearch = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    margin-left: 0.5rem;
    display: flex;
    gap: 10px;
    background-color: ${theme.colors.baseBg1};
    width: 90%;
    border-radius: 2rem;

    input {
      background: transparent;
      border: none;

      width: 100%;
      padding: 0.5rem;
      color: ${theme.colors.textColor};
      outline: none;
      font-family: ${theme.constants.bodyFontFamily};
    }
    img {
      background: url(${search});
      background-size: contain;
      background-repeat: no-repeat;
      padding: 0.5rem;
      margin-left: 0.5rem;

      align-self: center;
    }
  `}
`;
export const HomeEqualizer = styled.button`
  display: flex;
  align-self: flex-start;
  margin-top: 2.5rem;
  margin-right: 0.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;


`;
export const HomeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HomeCarList = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const HomeFilterModal = styled.form`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    margin-top: 1rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 0 1rem 0;

    select {
      width: 100%;
      outline: none;
      background-color: ${theme.colors.primaryColor};
      border-radius: 2rem;
      font-family: ${theme.constants.bodyFontFamily};
      outline: none;
    }
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    label {
      font-family: ${theme.constants.headingFontFamily};
      margin-bottom: 0.5rem;
    }
    input {
      width: 97%;
      border-radius: 2rem;
      border: 1px solid black;
      outline: none;
    }
  `}
`;

export const CloseButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  button {
    border: none;
    background-color: transparent;
    display: flex;
    cursor: pointer;

  }
`;

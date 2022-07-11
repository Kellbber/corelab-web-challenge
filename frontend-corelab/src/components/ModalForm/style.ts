import styled, { css } from "styled-components";
import { colors } from "../../assets/styles/colors";
import back from '../../assets/icons/back.png'
import theme from "../../assets/styles/theme";
type ColorInput = {
  posit?: boolean;
  image?: Element;
};
export const BoxModal = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    width: 50%;
  
    margin: .2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;

    align-items: center;
    color: ${theme.colors.textColor};
    @media (max-width: 300px)
{
  width: 90%;
  height: 90%;
}
@media (max-width: 1000px)
{
  width: 80%;
  height: 88%;
}
  `}
`;

export const BoxModalForm1 = styled.form<ColorInput>`

  display: flex;
  align-items: center;
  margin-top: .1rem;
  width: 60%;
  flex-direction: column;
  background-color: ${theme.colors.shadowColor};
  padding: 1rem;

  input {
    border-radius: 2rem;
    background-color: ${colors.primaryColor};
    margin-bottom: 1rem;
    outline: none;
    width: 100%;
    padding: 0.5rem 0 0.5rem 1rem;
    font-family: ${theme.constants.bodyFontFamily};
    font-size: 1rem;
    color: ${theme.colors.textColor};
  }
  label {
    align-self: flex-start;
    margin-bottom: 0.5rem;
    font-family: ${theme.constants.bodyFontFamily};
    font-size: 0.8rem;
  }
  select{
    width: 105%;
    padding: .5rem;
    border-radius: 2rem;
    font-family: ${theme.constants.bodyFontFamily};
   margin-bottom: 1rem;
    border: 2px solid black;
  }
  @media (max-width: 300px)
{
  width: 80%;
  height: 88%;
}
@media (max-width: 1000px)
{
  width: 80%;
  height: 88%;
}
`;

export const modalCreateBack = styled.div`
${() => css`
    display: flex;
    align-self: flex-start;

    img {
      background: url(${back});
      background-size: contain;
      display: flex;
      align-self: flex-start;
      margin-top: 1rem;
      padding: .5rem;
      cursor: pointer;
      align-self: flex-end;
    }
  `}
`
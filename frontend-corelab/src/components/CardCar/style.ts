
import styled, {css} from "styled-components";
import deleter from '../../assets/icons/delete.png'
type cardStyle = {
  cardColor: string
}

export const CardStyle = styled.section<cardStyle>`
${({theme, cardColor})=>css`

display: flex;
  min-width: 30%;
  min-height: 35%;
  align-items: center;
  padding: .5rem;
  justify-content: center;
  flex-direction: column;
  background-color: ${cardColor};
  margin: .5rem;
  border-radius: .5rem;
  h2, span{
    font-family: ${theme.constants.bodyFontFamily};
    color: ${theme.colors.primaryColor};
    margin-bottom: .5rem;
  }


  `}
`;
export const CardIcons = styled.div`

display: flex;
width: 100%;
margin-top: .5rem;
align-items: center;
justify-content: center;
button{
  width: 20%;
  display: flex;
  align-self: center;
  justify-content: center;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  cursor: pointer;

}
img{
  display: flex;
  padding: 1rem;
  width: 50%;
  background-image: url(${deleter});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

`
import styled, { css } from 'styled-components'

export const Button = styled.button`
${({theme})=> css`
    background-color: ${theme.colors.baseBg2};
    margin-top: 1rem;
    border-radius: 2rem;
    padding: .5rem 4rem;
    border: none;
    font-family: ${theme.constants.headingFontFamily};
    cursor: pointer;
`}
`
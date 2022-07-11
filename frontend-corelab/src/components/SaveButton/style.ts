import styled, { css } from 'styled-components'

export const Button = styled.button`
${({theme})=> css`
    background-color: ${theme.colors.baseBg2};
    margin-top: 1rem;
    border-radius: 2rem;
    padding: .5rem 1.5rem;
    border: none;
    font-family: ${theme.constants.headingFontFamily};
    font-size: 0.9rem;
    cursor: pointer;
    min-width: 20%;
    align-self: center;
    align-items: center;
    justify-content: center;
`}
`
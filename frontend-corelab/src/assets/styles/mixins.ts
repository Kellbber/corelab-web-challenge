import { colors } from "./colors";
import { constants } from "./constants";
import { css } from "styled-components";

const headingStyle = () => css`
    font-family: ${constants.headingFontFamily};
    font-size: ${constants.headingFontSize};
    font-weight: ${constants.headingFontWeight};
`;

const bodyStyle = () => css`
    font-family: ${constants.bodyFontFamily};
    font-size: ${constants.bodyFontSize};
    font-weight: ${constants.bodyFontWeight};

`

export const mixins ={

    headingStyle,
    bodyStyle
}
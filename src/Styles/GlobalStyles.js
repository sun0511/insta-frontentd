import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle(
    reset 
    *{
        "box-sizing":"border-box"
    },
    { 
        "background-color":"{props => props.theme.bgColor}"
    }
)
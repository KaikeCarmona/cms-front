import {createGlobalStyle} from 'styled-components';
import props from 'react';

export const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,body{
    background-color:${(props)=>props.theme.colors.background}
}
:root{
    --primary-color:#D71709;
    --dark-color_900:#102E4A;
    --dark-color_800:#102E4AB2;
    --dark-color_700:#102E4A99;
    --dark-color_600:#102E4A66;
    --bk-color:#fff;
    --default-color-form:#F4F4F9;
    --main-font:font-family: Damion;
    --cor-sidebar: #232C33;
    --color-update: #0000FF;
    --color-post: #3385FF;
    --color-remove: #C03131;
    --color-view: #5CD65C;
}
`;
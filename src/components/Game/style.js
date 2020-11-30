import styled, { css } from 'styled-components';

// 반응형 사이즈 기준
const sizes = {
    desktop: 1024,
    tablet: 768,
    mobile: 599
};

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width:
            ${sizes[label] / 16}em) {
                ${css(...args)};
            }
    `;
    return acc;
}, {});

export const FlexBox =  styled.div`
    display:flex;
    flex-wrap: wrap;
    heightL 100vh;

    .title {
        position: absolute;
        z-index: 2;
        top: 0;
        left:50%;
        transform: translateX(-50%);
        background-color : #fff;
        padding: 0px 30px;
        text-transform: uppercase;
        padding-bottom: 10px;
    }

    .flex-1 {
        flex: 1;
        min-width:500px;
        overflow: hidden;
        background-color: black;
        position:relative;
    }

    .name{
        position: absolute;
        z-index: 3;
        color: #fff;
        bottom: 10%;
        font-size: 50px;
        left : 50%;
        transform: translateX(-50%);
        
    }

    .food-img{
        width:100%;
        height:100%;
        max-height: 900px;
        transition: 0.3s;
        cursor: pointer;
    }

    .food-img:hover{
        transform: scale(1.1);
        opacity: 0.8;
    }
    ${media.desktop`width: 768px;`}
    ${media.tablet`width: 100%;`}
    ${media.mobile`width: 100%;`};
`;
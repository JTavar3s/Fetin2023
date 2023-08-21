import styled from "styled-components";

export const DivSlider = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const ImageSlider = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 800ms;

    &.selected {
        opacity:1;
    }
`;
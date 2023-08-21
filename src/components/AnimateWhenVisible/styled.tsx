import styled from "styled-components";

export const Container = styled.div`
    svg{
        font-size: 80px
    }
    .transform {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 50px;
        transition: all 0.8s ease-out;
        transform: translatex(-300px);
        opacity: 0;
    }
    .transform.show {
        opacity: 1;
        transform: translatex(0px);
    }
    @media (max-width: 740px) {
        .transform {
            display: flex;
            flex-direction: column-reverse;
        }
            svg{
            font-size: 60px
        }
    }
`;

export const Text = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: default;
    @media (max-width: 740px) {
        font-size: 16px;
    }
`;

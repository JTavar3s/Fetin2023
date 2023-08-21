import styled from "styled-components";

interface Props {
    time: number,
}

export const Card = styled.div<Props>`
    img{
        max-width: 180px;
        border-radius: 10%;
        margin-bottom: 20px;
        @media (max-width: 1150px) {
            width: 90%;
            height: 100%;
        }
       
    }
    .transform {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        transition: all ${props => props.time}s ease-out;
        transform: translateY(30px);
        opacity: 0;
    }
    .transform.show {
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const Text = styled.div`
    font-size: 20px;
    font-weight: bold;
    cursor: default;
    @media (max-width: 740px) {
        font-size: 14px;
    }
`;

export const Text1 = styled.div`
    font-size: 16px;
    cursor: default;
`;

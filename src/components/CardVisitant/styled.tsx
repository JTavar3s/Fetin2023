import styled from "styled-components";

interface Props {
    time: number,
}

export const Card = styled.div<Props>`
    img{
        width: 120px;
        height: 120px;
        border-radius: 100%;
        margin-bottom: 20px;
    }
    .transform {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgb(25, 29, 63);
        border-radius: 10%;
        padding: 20px;
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

export const Icon = styled.div`
    display: flex;
    gap: 20px;
    font-size: 14px;
    padding: 0px 0px 20px 0px;
    div{
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 2px;
        svg{
            font-size: 16px;
        }
        :hover{
            color: #F231A5
        }
    }
`;

export const Text = styled.div`
    font-size: 20px;
    font-weight: bold;
    cursor: default;
`;

export const Text1 = styled.div`
    font-size: 16px;
    cursor: default;
`;

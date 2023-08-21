import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import * as Styled from './styled';
import { BsFillEmojiWinkFill } from 'react-icons/bs';
import image from '../../assets/image/software1.jpeg';

interface TeamCardProps {
    img: string,
    name: string,
    work: string,
    timeAnimate: number,
    threshold?: number,
}

const TeamCard = ({
    img,
    name,
    work,
    timeAnimate,
    threshold = 0.5,
}: TeamCardProps) => {
    const { ref, inView } = useInView({ threshold })
    return (
        <Styled.Card time={timeAnimate}>
            <div ref={ref} className={`transform ${inView ? "show" : ""}`}>
                <img src={img} />
                <Styled.Text>{name}</Styled.Text>
            </div>
        </Styled.Card>
    );
};

export default TeamCard;

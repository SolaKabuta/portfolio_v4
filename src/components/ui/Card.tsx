import Image from "next/image";
import React from "react";

interface CardProps {
    image : 'string'
}


const Card: React.FC<CardProps> = ({image}) => {
    return (
        <div className={'relative overflow-hidden h-[200px] min-w-[200px] bg-second_color rounded-xl'}>
            <Image className={'cover'} src={image} alt={image} fill/>
        </div>
    );
};

export default Card;
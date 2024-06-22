import Image from "next/image";
import React from "react";

interface CardProps {
    image : string;
}


const Card: React.FC<CardProps> = ({image}) => {
    return (
        <div className={'relative overflow-hidden h-[550px] min-w-[550px] bg-second_color rounded-xl'}>
            <Image className={'object-cover'} src={image} alt={image} fill></Image>
        </div>
    );
};

export default Card;
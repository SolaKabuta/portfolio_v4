import Image from "next/image";
import React from "react";

interface CardProps {
    image : any;
}


const Card: React.FC<CardProps> = ({image}) => {
    return (
        <div className={'relative overflow-hidden h-[550px] min-w-[550px] bg-second_color rounded-xl hover:scale-105 max-md:hover:scale-75 transition ease-in-out duration-700 max-md:scale-75'}>
            <Image className={'object-cover'} src={image} alt={image} fill></Image>
        </div>
    );
};

export default Card;
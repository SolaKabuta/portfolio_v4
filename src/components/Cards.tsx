"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Cards() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-second items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={projects}
                direction="right"
                speed="fast"
            />
        </div>
    );
}

const projects = [
    {
        "title": "Cabinet Coppens",
        "role": "web integration",
        "role_details": "web development",
        "alt": "Cabinet Coppens background image",
        "info": "DURING MY INTERNSHIP AT MOBIL STUDIO AS A WEB DEVELOPER, I HAD THE OPPORTUNITY TO WORK ON THIS WEBSITE, WHICH ALLOWED ME TO APPLY AND EXPAND MY SKILLS IN WORDPRESS DEVELOPMENT AND WEB INTEGRATION. I WAS RESPONSIBLE FOR BUILDING THE WEBSITE FROM A TO Z, SHOWCASING MY ABILITY TO MANAGE AND EXECUTE A WEB DEVELOPMENT PROJECT INDEPENDENTLY.",
        "text": "This project reinforced my technical skills and underscored the importance of effective communication\n                and collaboration. It stands as a testament to my ability to handle full-cycle web development projects.",
        "stack": ["/assets/icons/stack/Wordpress icon.svg", "/assets/icons/stack/Elementor Logo Black.svg", "/assets/icons/stack/Adobe XD (1).svg"],
        "images": [
            "../assets/images/coppens_iphone.jpg",
            "../assets/images/coppens_imac.jpg",
            "../assets/images/coppens_macbook.jpg",
            "../assets/images/coppens_ipad.jpg"
        ],
        "url": "https://cabinetcoppens.be/",
        "slug": "coppens"
    },
    {
        "title": " Martine Henderyckx",
        "role": "web integration ",
        "role_details": "web development",
        "alt": "Martine Henderyckx background image",
        "info": "This was my second project AS A WEB DEVELOPER intern at Mobil Studio, WHICH ALLOWED ME TO practice AND EXPAND MY SKILLS IN WORDPRESS AND WEB INTEGRATION even further. I WAS also RESPONSIBLE FOR BUILDING THE WEBSITE FROM A TO Z, SHOWCASING MY ABILITY TO MANAGE AND EXECUTE A WEB DEVELOPMENT PROJECT on my own.",
        "text": "This project improved my technical skills while underlining the significance of communication and teamwork, affirming my capacity to execute full-cycle web development projects.",
        "stack": ["/assets/icons/stack/Wordpress icon.svg", "/assets/icons/stack/Elementor Logo Black.svg", "/assets/icons/stack/Adobe XD (1).svg"],
        "images": [
            "../assets/images/martine_iphone.jpg",
            "../assets/images/martine_macbook.jpg",
            "../assets/images/martine_ipad_concrete.jpg",
            "../assets/images/martine_imac.jpg"
        ],
        "url": "https://martine.mobilstudio.be/",
        "slug": "martine"
    }
];

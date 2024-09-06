import React from "react";
import fs from "fs";
import path from "path";
import { Work } from "@/types/workTypes";
import {Button} from "@/components/ui/button";
// import Card from '@/components/ui/Card';
import Image from "next/image";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "assets/images/coppens_imac.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
                      img,
                      name,
                      username,
                      body,
                    }: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
      <figure
          className={cn(
              "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
              // light styles
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              // dark styles
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
          )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
  );
};



// Function to read data from data.json
const getData = (): Work[] => {
  const filePath = path.join(process.cwd(), "data", "works.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};

// Generate static paths based on data
export async function generateStaticParams(): Promise<
    { params: { slug: string } }[]
> {
  const data: Work[] = getData();
  return data.map((item: Work) => ({
    params: {
      slug: item.slug,
    },
  }));
}

// Function to find an item with the corresponding slug
const getItemData = (slug: string): Work | undefined => {
  const data: Work[] = getData();
  return data.find((item: Work) => item.slug === slug);
};

// Show the item to the client with the slug as param
const Item = ({ params }: { params: { slug: any } }) => {
  const item = getItemData(params.slug);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
      <main className={''}>
        <section>
          <div>
            <h1 className={'py-5 text-7xl max-md:text-5xl font-black transition hover:translate-x-6 ease-in-out duration-700'}>
              {item.title}
            </h1>
            <div className={'flex max-lg:flex-col lg:gap-64'}>
              <div className={'w-1/2'}>
                <p>Role :</p>
                <p className={'py-10'}>{item.role} <br/>
                  {item.role_details}
                </p>
                <p>Tech stack :</p>
                <div className={'flex gap-2 py-5'}>
                  {item.stack.map((stack, index) => (
                      <div key={index}>
                        <Image src={stack} alt={""} width={50} height={50}/>
                      </div>
                  ))}
                </div>
              </div>
              <div>
                <p>Info :</p>
                <p className={'py-10'}>{item.info}</p>
                <p>{item.text}</p>
                <div className={'py-5 text-end max-md:text-start pb-56'}>
                  <a href={item.url} target={'_blank'}>
                    <Button
                        className={'uppercase rounded-2xl transition duration-500 bg-black text-white hover:bg-white hover:text-main hover:scale-110 '}
                        variant="outline">
                      Live project
                      <div className={'w-2 h-2 ml-2 bg-red-600 rounded-2xl animate-pulse'}></div>
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Marquee section (infinite scrolling cards) */}
            <div
                className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
              <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-second dark:from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-second dark:from-background"></div>
            </div>
          </div>
        </section>
        {/*<div className={'rounded-2xl flex justify-center max-md:hidden w-screen'}>*/}
        {/*  {item.images.map((image) => (*/}
        {/*      <Image src={image} alt={''} width={500} height={800} priority={true}/>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </main>
  );
};

export default Item;

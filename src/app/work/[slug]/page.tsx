import React from "react";
import fs from "fs";
import path from "path";
import { Work } from "@/types/workTypes";
import {Button} from "@/components/ui/button";
// import Card from '@/components/ui/Card';
import Image from "next/image";
import {Cards as InfiniteMovingCards} from "@/components/Cards";



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
                  {item.stack.map ((stack, index) => (
                      <div>
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
          </div>
        </section>
        <div className={'rounded-2xl flex max-md:hidden'}>
          {item.images.map ((image) => (
                <Image src={image} alt={''} width={600} height={800} priority={true}/>
          ))}
        </div>
      </main>
  );
};

export default Item;

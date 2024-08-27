import fs from "fs";
import path from "path";
import { Work } from "@/types/workTypes";
import {Button} from "@/components/ui/button";
import Card from '@/components/ui/Card';
import Image from "next/image";

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
            <h1 className={'py-5 text-7xl font-black transition hover:translate-x-6 ease-in-out duration-700'}>
              {item.title}
            </h1>
            <div className={'flex gap-64'}>
              <div className={'w-1/2'}>
                <p>Role :</p>
                <p className={'py-10'}>{item.role} <br/>
                  {item.role_details}
                </p>
                <p>Tech stack :</p>
                <div className={'flex gap-2 py-5'}>
                  <Image src={item.stack[0]} alt={""} width={50} height={50}/>
                  <Image src={item.stack[1]} alt={""} width={50} height={50}/>
                  <Image src={item.stack[2]} alt={""} width={50} height={50}/>
                </div>
              </div>
              <div>
                <p>Info :</p>
                <p className={'py-10'}>{item.info}</p>
                <p>{item.text}</p>
                <div className={'py-5 text-end'}>
                  <a href={item.url} target={'_blank'}>
                    <Button
                        className={'uppercase rounded-2xl transition duration-300 bg-second_color text-main_color hover:bg-black hover:text-main_color'}
                        variant="outline">
                      View live
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={'py-10 flex gap-10'}>
          {item.images && item.images.map((imageItem, index) => {
            return (
                <Card image={imageItem} key={index} priority={index === 0}/>
            );
          })}
        </div>
      </main>
  );
};

export default Item;

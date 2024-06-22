import fs from "fs";
import path from "path";
import { Work } from "@/types/workTypes";
import {Button} from "@/components/ui/button";
import Card from '@/components/ui/Card';
import Image from "next/image";
import Work_info_coppens from "@/components/info/work_info_coppens";

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

//function to find an item with the corresponding slug
const getItemData = (slug: string): Work | undefined => {
  const data: Work[] = getData();
  return data.find((item: Work) => item.slug === slug);
};

//show the item to the client ith the slug as param
const Item = ({ params }: { params: { slug: string } }) => {
  const item = getItemData(params.slug);

  if (!item) {
    return <p>Item not found</p>;
  }

const images = [
    "../assets/images/coppens_iphone.jpg",
    "../assets/images/coppens_macbook.jpg",
    "../assets/images/coppens_iphone.jpg",
    "../assets/images/coppens_macbook.jpg",
];

  return (
      <main className={''}>
        <section>
          <div>
            {/*<Image*/}
            {/*    className='-z-20'*/}
            {/*    src={item.image}*/}
            {/*    alt={item.alt}*/}
            {/*    fill={true}/>*/}
            <h1 className={'py-10 text-7xl font-black transition hover:translate-x-6 ease-in-out duration-700'}>
              {item.title}
            </h1>
            <div className={'flex gap-64'}>
              <div className={'w-1/2'}>
                <p>Role :</p>
                <p className={'py-10'}>{item.role} <br/>
                  {item.role_details}
                </p>
                <p>Tech stack :</p>
              </div>
              <div>
                <p>Info :</p>
                <Work_info_coppens/>
                <div className={'py-5 text-end'}>
                  <a href={'https://cabinetcoppens.be/'} target={'_blank'}>
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
          {images.map((itm, idx) => (
              <Card image={itm} key={idx}/>
          ))}
        </div>
      </main>
  );
};

export default Item;

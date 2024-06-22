import fs from "fs";
import path from "path";
import { Work } from "../../../types/workTypes";
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

  const texts = {
    texts: 'web \\n development',
  }

  return (
      <main className={'h-screen'}>
        <section>
          <div>
            {/*<Image*/}
            {/*    className='-z-20'*/}
            {/*    src={item.image}*/}
            {/*    alt={item.alt}*/}
            {/*    fill={true}/>*/}
            <h1 className={'text-7xl font-black transition hover:translate-x-6 ease-in-out duration-700'}>
              {item.title}
            </h1>
            <p>{item.role}</p>
            <p>{item.role_details}</p>
            <p>{item.info}</p>
          </div>
        </section>
      </main>
  );
};

export default Item;

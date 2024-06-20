import fs from "fs";
import path from "path";

// Function to read data from data.json
const getData = () => {
  const filePath = path.join(process.cwd(), "data", "works.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(jsonData);
};

// Generate static paths based on data
export async function generateStaticParams() {
  const data = getData();

  return data.map((item: any) => ({
    slug: item.slug,
  }));
}

const getItemData = (slug: any) => {
  const data = getData();
  return data.find((item: any) => item.slug === slug);
};

const Item = ({ params }: any) => {
  const item = getItemData(params.slug);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default Item;

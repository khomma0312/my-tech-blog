import satori from "satori";
import sharp from "sharp";
import fs from "fs";
import { join } from "path";

const publicDir = join(process.cwd(), "public");

export default async function Page() {
  const image = await generateOgpImage();
  fs.writeFileSync(`${publicDir}/ogp.png`, image);

  return <div>OGP image Generated</div>;
}

// 元々の色味
// linear-gradient(hsl(252 11 17), hsl(254 27 35))

const generateOgpImage = async () => {
  const svg = await satori(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        backgroundImage: "linear-gradient(135deg, #4c4171 10%, #282730 100%)",
        color: "#f3f3f3",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "3rem 4rem 2.5rem",
          backgroundColor: "#181b29",
          justifyContent: "space-between",
          borderRadius: "10px",
          width: "100%",
          height: "90%",
        }}
      ></div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [],
    }
  );

  return await sharp(Buffer.from(svg)).png().toBuffer();
};

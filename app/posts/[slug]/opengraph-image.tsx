import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/features/posts/api";
import fs from "fs";
import path from "path";

const OgImage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const post = getPostBySlug(slug);
  const { data } = post;

  const font = fs.readFileSync(
    path.join(process.cwd(), "public/NotoSansJP-SemiBold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #7464a6 10%, #4c4171 100%)",
          color: "#f3f3f3",
          width: "100%",
          height: "100%",
          padding: "30px",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#181b29",
            borderRadius: "8px",
            padding: "50px 50px 30px",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              fontSize: 48,
              paddingBottom: "30px",
              fontWeight: 600,
            }}
          >
            {data.title}
          </h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: 24 }}>{data.date}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img
                src="https://github.com/khomma0312.png"
                width={45}
                height={45}
                alt="GitHub user icon"
                style={{ borderRadius: "50%" }}
              />
              <p style={{ fontSize: 24 }}>@khomma0312</p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          data: font,
          name: "Noto Sans JP",
        },
      ],
    }
  );
};

export default OgImage;

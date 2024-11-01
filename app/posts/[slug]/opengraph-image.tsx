import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import { getPostBySlug } from "@/features/posts/api";

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
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#181b29",
            borderRadius: "8px",
            padding: "50px 50px 30px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: "30px",
            }}
          >
            <h3
              style={{
                fontSize: 48,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {data.title}
            </h3>
          </div>
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

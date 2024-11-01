import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const defaultOpengraphImageResponse = () => {
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
            padding: "180px 50px 30px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "30px",
            }}
          >
            <h3
              style={{
                fontSize: 58,
                fontWeight: 600,
              }}
            >
              {process.env.SITE_NAME}
            </h3>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img
                src="https://github.com/khomma0312.png"
                width={60}
                height={60}
                alt="GitHub user icon"
                style={{ borderRadius: "50%" }}
              />
              <p style={{ fontSize: 32 }}>@khomma0312</p>
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

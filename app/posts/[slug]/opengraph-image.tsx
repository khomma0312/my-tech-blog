import { ImageResponse } from "next/og";
// import { join } from 'node:path'
// import { readFile } from 'node:fs/promises'
// import Image from "next/image";
import { getPostBySlug } from "@/features/posts/api";

const OgImage = async ({ params }: { params: { slug: string } }) => {
  // なければ、デフォルトのタイトルを入れたイメージを生成する（トップページなどの場合を想定）
  const { slug } = params;

  // TODO: Request Memoizationでキャッシュするよう設定したい
  const post = getPostBySlug(slug);
  const { data } = post;

  // このやり方で静的画像を読み込める
  // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#using-nodejs-runtime-with-local-assets

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(hsl(252 11 17), hsl(254 27 35))",
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
            background: "#fff",
            borderRadius: "8px",
            padding: "50px 50px 30px",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              fontSize: 36,
              paddingBottom: "30px",
            }}
          >
            {data.title}
          </h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{data.date}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img
                src="https://github.com/khomma0312.png"
                width={30}
                height={30}
                alt="GitHub user icon"
                style={{ borderRadius: "50%" }}
              />
              <p>@khomma0312</p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
};

export default OgImage;

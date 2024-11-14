import Script from "next/script";

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Script
        id="twitter-embed-script"
        src="https://platform.twitter.com/widgets.js"
        strategy="beforeInteractive"
      />
    </>
  );
}

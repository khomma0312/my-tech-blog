type Props = {
  url: string;
};

const YouTubeEmbed = async ({ url }: Props) => {
  const matches = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)\/?(.*)/i);
  const path = matches ? matches[2] : "";
  const videoId = path.replace("watch?v=", "");

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full h-full aspect-video my-3 md:my-5"
    ></iframe>
  );
};

export default YouTubeEmbed;

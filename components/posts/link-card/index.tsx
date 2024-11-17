import Link from "next/link";
import { cn } from "@/utils/common";

type Props = {
  url: string;
  ogpData: {
    title: string;
    description: string;
    image: string;
  };
};

const LinkCard = ({ url, ogpData }: Props) => {
  const { title, description, image } = ogpData;
  const domain = new URL(url).hostname;

  return (
    <div className="not-prose bg-background border border-primary-200 my-3 rounded-sm md:my-5 md:rounded-md hover:bg-neutral-50/10">
      <Link
        href={url}
        className="grid grid-cols-[1fr_220px] md:grid-cols-[1fr_280px]"
        target="_blank"
      >
        <div
          className={cn(
            "p-3 grid",
            description ? "grid-rows-[1.5fr_2fr_1fr]" : "grid-rows-[1.5fr_1fr]"
          )}
        >
          <div className="font-semibold text-sm md:text-base">
            <p className="line-clamp-1">{title ? title : url}</p>
          </div>
          {description && (
            <div className="text-xs md:text-sm text-slate-400">
              <span className="line-clamp-1">{description}</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-xs md:text-sm">
            <img src={`https://www.google.com/s2/favicons?domain=${domain}`} />
            <span>{domain}</span>
          </div>
        </div>
        {image && (
          <div>
            <img
              src={image}
              alt="OGP Image"
              className="max-w-full rounded-tr-md rounded-br-md"
            />
          </div>
        )}
      </Link>
    </div>
  );
};

export default LinkCard;

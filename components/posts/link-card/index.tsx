import Link from "next/link";
import { cn, getOgpDataFromUrl } from "@/lib/utils";

type Props = {
  href: string;
};

const LinkCard = async ({ href }: Props) => {
  const { title, description, image } = await getOgpDataFromUrl(href);
  const domain = new URL(href).hostname;

  return (
    <div className="not-prose bg-background border border-primary-200 my-3 rounded-sm md:my-5 md:rounded-md hover:bg-neutral-50/10">
      <Link
        href={href}
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
            <p className="line-clamp-1">{title ? title : href}</p>
          </div>
          {description && (
            <div className="text-xs md:text-sm text-slate-400">
              <span className="line-clamp-2">{description}</span>
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
              alt=""
              className="max-w-full rounded-tr-md rounded-br-md"
            />
          </div>
        )}
      </Link>
    </div>
  );
};

export default LinkCard;

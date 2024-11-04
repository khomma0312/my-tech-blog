import PageTitle from "@/components/shared/page-title";
import TagLink from "@/components/shared/tag-link";

type Props = {
  title: string;
  date: string;
  tags?: string[];
};

const PostHeader = ({ title, date, tags }: Props) => {
  return (
    <div className="pb-12">
      <PageTitle>{title}</PageTitle>
      <div className="flex justify-end">
        <div className="flex flex-col">
          <time
            dateTime={new Date(date).toISOString()}
            className="text-slate-400 pb-2 text-sm"
          >
            投稿日時: {date}
          </time>
          {tags && (
            <div className="flex gap-1 items-center justify-end">
              <span className="text-slate-400 text-sm">タグ: </span>
              {tags.map((tag: string) => (
                <TagLink key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostHeader;

import TagLink from "@/components/shared/tag-link";

type Props = {
  title: string;
  date: string;
  tags?: string[];
};

const PostHeader = ({ title, date, tags }: Props) => {
  return (
    <div>
      <h1 className="text-center text-3xl md:text-4xl font-bold py-8">
        {title}
      </h1>
      <div className="flex justify-end pb-12 border-b border-slate-500">
        <div className="flex flex-col">
          <span className="text-slate-400 pb-2 text-sm">投稿日時: {date}</span>
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

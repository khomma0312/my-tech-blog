import { cn } from "@/lib/utils";
import "highlight.js/styles/github-dark.css";
import styles from "@/styles/post.module.css";

type Props = {
  content: string | JSX.Element | JSX.Element[];
};

const PostBody = ({ content }: Props) => {
  return <div className={cn(styles.markdown, "py-2")}>{content}</div>;
};

export default PostBody;

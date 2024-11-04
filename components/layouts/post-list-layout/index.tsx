import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PostListLayout = ({ children }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-12 pb-32">{children}</div>
  );
};

export default PostListLayout;

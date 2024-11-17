import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: {
    title: string;
    image: string;
    url: string;
  };
};

const ZennCard = ({ post }: Props) => {
  return (
    <Card className="border-primary-100 rounded-lg relative w-full h-full hover:bg-neutral-50/10">
      <Link href={post.url} target="_blank">
        <Image
          width={1200}
          height={630}
          src={post.image}
          alt={post.title}
          quality={80}
          className="rounded-lg max-w-full"
        />
        <h3 className="sr-only">{post.title}</h3>
      </Link>
    </Card>
  );
};

export default ZennCard;

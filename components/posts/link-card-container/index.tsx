import { getOgpDataFromUrl } from "@/utils/html-converter";
import LinkCard from "../link-card";

type Props = {
  url: string;
};

const LinkCardContainer = async ({ url }: Props) => {
  const ogpData = await getOgpDataFromUrl(url);

  return <LinkCard url={url} ogpData={ogpData} />;
};

export default LinkCardContainer;

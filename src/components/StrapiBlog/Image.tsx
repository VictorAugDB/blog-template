import NextImage from "next/image";
import { getStrapiMedia } from "../../lib/media";

export const Image = ({ image }: any) => {
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <NextImage
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
};
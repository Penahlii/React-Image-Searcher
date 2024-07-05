import { FC } from "react";
import { Item, Image } from "./ImageGalleryItem.styles";

interface ImageGalleryItemProps {
  webformatURL: string;
  largeImageURL: string;
  onImageClick: (largeImageURL: string) => void;
}

const ImageGalleryItem: FC<ImageGalleryItemProps> = ({
  webformatURL,
  largeImageURL,
  onImageClick,
}) => {
  return (
    <Item onClick={() => onImageClick(largeImageURL)}>
      <Image src={webformatURL} alt="" />
    </Item>
  );
};

export default ImageGalleryItem;

import { FC } from "react";
import { Gallery } from "./ImageGallery.styles";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

interface Image {
  id: string;
  webformatURL: string;
  largeImageURL: string;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (largeImageURL: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <Gallery>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          onImageClick={onImageClick}
        />
      ))}
    </Gallery>
  );
};

export default ImageGallery;

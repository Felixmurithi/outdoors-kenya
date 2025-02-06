type Props = {
  image?: string;
  alt?: string;
  width?: string;
};

function CustomImage({ image, alt, width }: Props) {
  return <img src={image} alt={alt} className={`${width}`} />;
}

export default CustomImage;

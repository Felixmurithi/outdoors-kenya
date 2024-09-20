function CustomImage({ image, alt, width }) {
  return <img src={image} alt={alt} className={`${width}`} />;
}

export default CustomImage;

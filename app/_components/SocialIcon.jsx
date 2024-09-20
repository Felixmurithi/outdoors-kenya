function SocialIcon({ link, svg, alt }) {
  return (
    <li className="rounded-full bg-red-500">
      <a href={link}>
        <img src={svg} className="w-[20px] bg-white " alt={alt} />
      </a>
    </li>
  );
}

export default SocialIcon;
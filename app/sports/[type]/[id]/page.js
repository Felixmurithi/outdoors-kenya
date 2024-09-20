import LocationMap from "@/app/_components/LocationMap";
import getData from "@/app/_utils/getData";
export async function generateMetadata({ params }) {
  const { name } = await getData(
    `http://localhost:8000/sites/${params.siteId}`
  );

  return { title: `Explore ${name}` };
}

// for generating dynamic routes, inorder to render them statically.
export async function generateStaticParams() {
  const sites = await getData(`http://localhost:8000/sites`);
  console.log(sites);
  //must be strings? TODO
  const ids = sites.map((site) => ({ siteId: String(site.id) }));

  return ids;
}

export default async function Site({ params }) {
  // console.log(params);

  const site = await getData(`http://localhost:8000/sites/${params.siteId}`);
  console.log(site);

  const { name, location, coordinates, description, images } = site;
  return (
    <main className="h-[100%] grid  gap-4 grid-cols-2">
      <article>
        <p>{name}</p>
        <p>{description}</p>
        <div>
          <p>{location}</p>
          <LocationMap coordinates={coordinates} />
        </div>
      </article>
      <div>
        {images.map((image, i) => (
          <img
            src={image}
            key={i}
            alt={`${location} image ${i + 1}`}
            width={"100%"}
          />
        ))}
      </div>
    </main>
  );
}

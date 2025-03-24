import Banner from "@/app/_components/generic/Banner";
type Props = {
  children: React.ReactNode;
  banner: string;
  headline: string;
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

function Page({ children, banner, headline, params, searchParams }: Props) {
  // const sites = await getData(`http://localhost:8000/sites`);
  // const [locations, error] = useGetLocations();

  // if (error || !locations) return <p>error</p>;

  return (
    <main className="grid gap-8">
      <Banner image={banner}>{headline}</Banner>

      {children}
    </main>
  );
}

export default Page;

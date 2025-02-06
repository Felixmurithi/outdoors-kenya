type Props = {
  coordinates: [number, number];
};

function LocationMap({ coordinates }: Props) {
  const [lat, lng] = [...coordinates];
  return <div className="w-[100%] min-h-200px bg-stone-300">map</div>;
}

export default LocationMap;

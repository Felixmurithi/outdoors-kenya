function LocationMap({ coordinates }) {
  const [lat, lng] = [...coordinates];
  return <div className="w-[100%] min-h-200px bg-stone-300">map</div>;
}

export default LocationMap;

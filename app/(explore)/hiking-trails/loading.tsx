import LoadingSpinner from "@/app/_components/generic/LoadingSpinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoadingSpinner />
    </div>
  );
}

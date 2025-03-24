export default function LoadingSpinner() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <span className="text-lg font-medium">Loading...</span>
    </div>
  );
}

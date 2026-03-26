export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/10 backdrop-blur-md">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>
        <p className="mt-4 font-medium text-orange-600">Loading...</p>
      </div>
    </div>
  );
}

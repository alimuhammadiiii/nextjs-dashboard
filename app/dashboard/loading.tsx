export default function Loading() {
  // Add fallback UI that will be shown while the route is loading.
  return <LoadingSkeleton />;
}

function LoadingSkeleton() {
  return (
    <output className="animate-pulse space-y-4" aria-label="Loading">
      <div className="h-8 w-48 rounded bg-gray-200" />
      <div className="h-32 rounded bg-gray-200" />
      <div className="h-32 rounded bg-gray-200" />
    </output>
  );
}

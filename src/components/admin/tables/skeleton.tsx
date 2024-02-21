export default function SkeletonTable() {
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-4">
      <div className="flex h-10 w-full justify-between gap-2">
        <div className="h-full w-[600px] animate-pulse rounded-md bg-gray-200" />
        <div className="w-[140px] animate-pulse rounded-md bg-gray-200" />
      </div>
      <div className="w-full flex-1 animate-pulse rounded-md bg-gray-200" />
      <div className="flex h-8 w-full justify-between gap-2">
        <div className="w-[140px] animate-pulse rounded-md bg-gray-200" />
        <div className="w-[240px] animate-pulse rounded-md bg-gray-200" />
      </div>
    </div>
  )
}

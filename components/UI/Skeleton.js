import IndividualSkeleton from "./IndividualSkeleton";

function Skeleton() {
  return (
    <div className="space-y-4">
      <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
        <IndividualSkeleton />
        <IndividualSkeleton />
      </div>
      <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
        <IndividualSkeleton />
        <IndividualSkeleton />
      </div>
    </div>
  );
}

export default Skeleton;

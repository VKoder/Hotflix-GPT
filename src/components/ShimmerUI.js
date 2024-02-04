import ShimmerCard from "./ShimmerCard";

const ShimmerUI = () => {
  return (
    <div className="flex z-30 flex-row justify-center bg-gray-950 w-12/12 py-4 items-center gap-5">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};
export default ShimmerUI;

import { ProblemsSolved } from "./ProblemsSolved";

export function LeetCode() {
  return (
    <>
      <div className="container p-4 rounded-md">
        <h1 className="text-white text-2xl font-semibold">Coding Profile</h1>
        <div className="grid xl:grid-cols-2 gap-4">
          <ProblemsSolved />
        </div>
      </div>
    </>
  );
}

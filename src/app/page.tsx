import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <Link href="/teacher" className="rounded-full border border-gray-400 px-8 hover:bg-slate-500">Login as Teacher</Link>
    </div>
  );
};

export default Homepage;

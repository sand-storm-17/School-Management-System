import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="w-full md:auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 mx-4">
      <Image src="/search.png" alt="search" height={14} width={14} />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none"
      ></input>
    </div>
  );
};

export default TableSearch;

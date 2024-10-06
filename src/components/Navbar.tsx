import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-14 mb-2">
      {/* Search Bar*/}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-4">
        <Image src="/search.png" alt="search" height={14} width={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        ></input>
      </div>
      {/* Icons and User */}
      <div className="flex items-center justify-end w-full gap-6">
        <div>
          <Image src="/message.png" alt="messages" width={20} height={20} />
        </div>
        <div className="relative">
          <Image src="/announcement.png" alt="announcements" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 rounded-full">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Cena</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src="/avatar.png" alt="profile" width={36} height={36} className="rounded-full"/>
      </div>
    </div>
  );
};

export default Navbar;

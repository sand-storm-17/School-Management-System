import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Class = {
  id: number,
  name: string,
  capacity: number,
  grade: number,
  supervisor: string,
};

const columns = [
  {
    header: "Class Name",
    accessor: "classname",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export const classesData = [
    {
      id: 1,
      name: "1A",
      capacity: 20,
      grade: 1,
      supervisor: "Joseph Padilla",
    },
    {
      id: 2,
      name: "2B",
      capacity: 22,
      grade: 2,
      supervisor: "Blake Joseph",
    },
    {
      id: 3,
      name: "3C",
      capacity: 20,
      grade: 3,
      supervisor: "Tom Bennett",
    },
    {
      id: 4,
      name: "4B",
      capacity: 18,
      grade: 4,
      supervisor: "Aaron Collins",
    },
    {
      id: 5,
      name: "5A",
      capacity: 16,
      grade: 5,
      supervisor: "Iva Frank",
    },
    {
      id: 5,
      name: "5B",
      capacity: 20,
      grade: 5,
      supervisor: "Leila Santos",
    },
    {
      id: 7,
      name: "7A",
      capacity: 18,
      grade: 7,
      supervisor: "Carrie Walton",
    },
    {
      id: 8,
      name: "6B",
      capacity: 22,
      grade: 6,
      supervisor: "Christopher Butler",
    },
    {
      id: 9,
      name: "6C",
      capacity: 18,
      grade: 6,
      supervisor: "Marc Miller",
    },
    {
      id: 10,
      name: "6D",
      capacity: 20,
      grade: 6,
      supervisor: "Ophelia Marsh",
    },
  ];
const ClassesListPage = () => {
  const renderRow = (item: Class) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-color2Light"
    >
      <td className="flex w-full items-center gap-4 p-4">
        <div>
          <h1 className="font-semibold">{item.name}</h1>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            <button>
              <Image
                src="/view.png"
                alt=""
                width={16}
                height={16}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-color1"
              />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-color2">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-2 mt-0">
      {/* Top */}
      <div className="flex items-center md: justify-end lg:justify-between">
        <h1 className="hidden lg:block font-semibold">Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-color3">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-color3">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-color3">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* List */}
      <Table renderRow={renderRow} columns={columns} data={classesData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default ClassesListPage;

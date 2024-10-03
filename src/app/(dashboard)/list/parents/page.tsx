import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Parent = {
    id: number,
    parentId: number,
    name: string,
    email: string,
    phone: number,
    address: string,
    students: string[]
}

const columns = [
    {
        header:"Info",
        accessor: "info"
    },
    {
        header:"Student Names",
        accessor:"studentname",
        className:"hidden md:table-cell"
    },
    {
        header:"Phone",
        accessor:"phone",
        className:"hidden lg:table-cell"
    },
    {
        header:"Address",
        accessor:"address",
        className:"hidden lg:table-cell"
    },
    {
        header:"Actions",
        accessor:"actions",
    },
    
]
 
const parentsData = [
  {
    id: 1,
    name: "John Doe",
    students: ["Sarah Brewer"],
    email: "john@doe.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    name: "Jane Doe",
    students: ["Cecilia Bradley"],
    email: "jane@doe.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 3,
    name: "Mike Geller",
    students: ["Fanny Caldwell"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 4,
    name: "Jay French",
    students: ["Mollie Fitzgerald", "Ian Bryant"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 5,
    name: "Jane Smith",
    students: ["Mable Harvey"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 6,
    name: "Anna Santiago",
    students: ["Joel Lambert"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 7,
    name: "Allen Black",
    students: ["Carrie Tucker", "Lilly Underwood"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 8,
    name: "Ophelia Castro",
    students: ["Alexander Blair"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 9,
    name: "Derek Briggs",
    students: ["Susan Webster", "Maude Stone"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 10,
    name: "John Glover",
    students: ["Stella Scott"],
    email: "mike@geller.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
];

const ParentListPage = () => {
const renderRow = (item: Parent) => (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-color2Light"
        >
          <td className="flex w-full items-center gap-4 p-4">
            <div>
              <h1 className="font-semibold">{item.name}</h1>
              <p className="text-sm">{item.email}</p>
            </div>
          </td>
          <td className="hidden md:table-cell">{item.students.join(",")}</td>
          <td className="hidden lg:table-cell">{item.phone}</td>
          <td className="hidden lg:table-cell">{item.address}</td>
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
    return  <div className="bg-white p-4 rounded-md flex-1 m-2 mt-0">
    {/* Top */}
    <div className="flex items-center md: justify-end lg:justify-between">
      <h1 className="hidden lg:block font-semibold">Parents</h1>
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
    <Table renderRow={renderRow} columns={columns} data={parentsData} />
    {/* Pagination */}
    <Pagination/>
  </div>;
}

export default ParentListPage;
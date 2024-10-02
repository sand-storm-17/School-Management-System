import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Student = {
    id: number,
    studentId: number,
    name: string,
    email: string,
    photo: string,
    phone: number,
    grade: number,
    class: string,
    address: string
}

const columns = [
    {
        header:"Info",
        accessor: "info"
    },
    {
        header:"Student ID",
        accessor:"studentid",
        className:"hidden md:table-cell"
    },
    {
        header:"Grade",
        accessor:"grade",
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

export const studentsData = [
    {
      id: 1,
      studentId: "1234567890",
      name: "John Doe",
      email: "john@doe.com",
      photo:
        "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "1B",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 2,
      studentId: "1234567890",
      name: "Jane Doe",
      email: "jane@doe.com",
      photo:
        "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 3,
      studentId: "1234567890",
      name: "Mike Geller",
      email: "mike@geller.com",
      photo:
        "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 4,
      studentId: "1234567890",
      name: "Jay French",
      email: "jay@gmail.com",
      photo:
        "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 5,
      studentId: "1234567890",
      name: "Jane Smith",
      email: "jane@gmail.com",
      photo:
        "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 6,
      studentId: "1234567890",
      name: "Anna Santiago",
      email: "anna@gmail.com",
      photo:
        "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 7,
      studentId: "1234567890",
      name: "Allen Black",
      email: "allen@black.com",
      photo:
        "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 8,
      studentId: "1234567890",
      name: "Ophelia Castro",
      email: "ophelia@castro.com",
      photo:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 9,
      studentId: "1234567890",
      name: "Derek Briggs",
      email: "derek@briggs.com",
      photo:
        "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 10,
      studentId: "1234567890",
      name: "John Glover",
      email: "john@glover.com",
      photo:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      grade: 5,
      class: "5A",
      address: "123 Main St, Anytown, USA",
    },
  ];

const StudentListPage = () => {
    const renderRow = (item: Student) => (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-color2Light"
        >
          <td className="flex w-full items-center gap-4 p-4">
            <Image
              src={item.photo}
              alt=""
              height={36}
              width={36}
              className="rounded-full md:hidden xl:block w-10 h-10 object-cover"
            />
            <div>
              <h1 className="font-semibold">{item.name}</h1>
              <span className="text-xs text-gray-500">{item.class}</span>
            </div>
          </td>
          <td className="hidden md:table-cell">{item.id}</td>
          <td className="hidden md:table-cell">{item.grade}</td>
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
      <h1 className="hidden lg:block font-semibold">Students</h1>
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
    <Table renderRow={renderRow} columns={columns} data={studentsData} />
    {/* Pagination */}
    <Pagination/>
  </div>;
}

export default StudentListPage;
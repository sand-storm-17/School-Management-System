import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Attendance = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string
};

const columns = [
  {
    header: "Subject Name",
    accessor: "subjectname",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const assignmentsData = [
    {
      id: 1,
      subject: "Math",
      class: "1A",
      teacher: "Anthony Boone",
      dueDate: "2025-01-01",
    },
    {
      id: 2,
      subject: "English",
      class: "2A",
      teacher: "Clifford Bowen",
      dueDate: "2025-01-01",
    },
    {
      id: 3,
      subject: "Science",
      class: "3A",
      teacher: "Catherine Malone",
      dueDate: "2025-01-01",
    },
    {
      id: 4,
      subject: "Social Studies",
      class: "1B",
      teacher: "Willie Medina",
      dueDate: "2025-01-01",
    },
    {
      id: 5,
      subject: "Art",
      class: "4A",
      teacher: "Jose Ruiz",
      dueDate: "2025-01-01",
    },
    {
      id: 6,
      subject: "Music",
      class: "5A",
      teacher: "Katharine Owens",
      dueDate: "2025-01-01",
    },
    {
      id: 7,
      subject: "History",
      class: "6A",
      teacher: "Shawn Norman",
      dueDate: "2025-01-01",
    },
    {
      id: 8,
      subject: "Geography",
      class: "6B",
      teacher: "Don Holloway",
      dueDate: "2025-01-01",
    },
    {
      id: 9,
      subject: "Physics",
      class: "7A",
      teacher: "Franklin Gregory",
      dueDate: "2025-01-01",
    },
    {
      id: 10,
      subject: "Chemistry",
      class: "8A",
      teacher: "Danny Nguyen",
      dueDate: "2025-01-01",
    },
  ];
  
const AttendanceListPage = () => {
  const renderRow = (item: Attendance) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-color2Light"
    >
      <td className="flex w-full items-center gap-4 p-4">
        <div>
          <h1 className="font-semibold">{item.subject}</h1>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
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
        <h1 className="hidden lg:block font-semibold">Assignments</h1>
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
      <Table renderRow={renderRow} columns={columns} data={assignmentsData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default AttendanceListPage;

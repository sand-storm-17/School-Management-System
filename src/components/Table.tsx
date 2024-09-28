const Table = ({
  columns,
  renderRow,
  data,
}: {
  data: any[];
  renderRow: (item: any) => React.ReactNode;
  columns: { header: string; accessor: string; classname?: string }[];
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item=>(
            renderRow(item)
        ))}
      </tbody>
    </table>
  );
};

export default Table;

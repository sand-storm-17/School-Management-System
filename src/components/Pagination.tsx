const Pagination = () => {
  return (
    <div className="flex justify-between m-2 p-2">
      {/* Prev */}
      <button disabled className="bg-gray-300 p-2 rounded-md text-xs disabled:opacity-50 disabled:cursor-not-allowed">
        Prev
      </button>
      {/* Pages */}
      <div className="flex item-center gap-2 text-sm">
        <button className="p-2 bg-color1 rounded-sm">1</button>
        <button className="p-2 rounded-sm">2</button>
        <button className="p-2 rounded-sm">3</button>
        <span className="p-2">...</span>
        <button className="p-2 rounded-sm">10</button>
      </div>
      {/* Next */}
      <button className="bg-gray-300 p-2 rounded-md text-xs">
        Next
      </button>
    </div>
  );
};

export default Pagination;

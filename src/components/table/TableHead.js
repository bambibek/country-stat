const columns = [
  "Flag",
  "Name",
  "Region",
  "Capital",
  "Population",
  "Favourite",
];

const TableHead = () => {
  return (
    <>
      <thead className="tblHead">
        <tr>
          {columns.map((columnName) => (
            <th key={columnName}>{columnName}</th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHead;

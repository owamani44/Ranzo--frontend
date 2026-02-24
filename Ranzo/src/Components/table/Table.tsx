import "./table.scss";

type AnimalRow = {
  id: number;
  tag_number: string;
  species: string;
  breed: string;
  gender: string;
  kraal_assignment: string;
  status: string;
  birth_date: string;
  registered_on: string;
  updated_on: string;
};

const data: AnimalRow[] = [
  {
    id: 8,
    tag_number: "KO1-001",
    species: "COW",
    breed: "Boran",
    gender: "Male",
    kraal_assignment: "Kraal 1",
    status: "ALIVE",
    birth_date: "2024-04-14",
    registered_on: "2026-01-28 16:54:27.506235",
    updated_on: "2026-01-28 16:54:27.506313",
  },
  {
    id: 9,
    tag_number: "KO2-015",
    species: "COW",
    breed: "Ankole",
    gender: "Female",
    kraal_assignment: "Kraal 2",
    status: "ALIVE",
    birth_date: "2023-08-23",
    registered_on: "2026-02-03 15:29:09.038984",
    updated_on: "2026-02-03 15:29:09.039047",
  },
];

const columns = Object.keys(data[0] ?? {}) as (keyof AnimalRow)[];

const formatHeader = (value: string) =>
  value
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const Table = () => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{formatHeader(column)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={`${row.id}-${String(column)}`}>{String(row[column])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import "./animalsTable.scss";
import { useEffect, useState } from "react";
import { myAxios } from "../../api";

type ApiAnimal = {
  id?: number | string;
  tag_number?: string | null;
  tagNumber?: string | null;
  species?: string | null;
  breed?: string | null;
  gender?: string | null;
  kraal_assignment?: string | null;
  kraalAssignment?: string | null;
  kraal?: { name?: string | null } | string | null;
  status?: string | null;
  birth_date?: string | null;
  birthDate?: string | null;
  registered_on?: string | null;
  registeredOn?: string | null;
  updated_on?: string | null;
  updatedOn?: string | null;
};

type TableProps = {
  refreshKey?: number;
};

type TableAnimal = {
  id: number | string;
  tagNumber: string;
  species: string;
  breed: string;
  gender: string;
  kraalAssignment: string;
  status: string;
  birthDate: string;
  registeredOn: string;
  updatedOn: string;
};

const firstNonEmpty = (...vals: unknown[]): string => {
  for (const v of vals) {
    if (v == null) continue;
    if (typeof v === "number") return String(v);
    if (typeof v === "string" && v.trim() !== "") return v;
  }
  return "-";
};

const rowsFromRes = (d: any): ApiAnimal[] =>
  Array.isArray(d)
    ? d
    : Array.isArray(d?.data)
    ? d.data
    : Array.isArray(d?.content)
    ? d.content
    : [];

const Table = ({ refreshKey = 0 }: TableProps) => {
  const [animals, setAnimals] = useState<TableAnimal[]>([]);

  useEffect(() => {
    let mounted = true;
    const fetchAnimals = async () => {
      try {
        const res = await myAxios.get("/animals");
        const raw = rowsFromRes(res.data);
        const normalized = raw.map((a, i) => {
          const kraalName =
            typeof a.kraal === "string" ? a.kraal : a.kraal?.name ?? undefined;

          return {
            id: a.id ?? i,
            tagNumber: firstNonEmpty(a.tag_number, a.tagNumber),
            species: firstNonEmpty(a.species),
            breed: firstNonEmpty(a.breed),
            gender: firstNonEmpty(a.gender),
            kraalAssignment: firstNonEmpty(
              a.kraal_assignment,
              a.kraalAssignment,
              kraalName
            ),
            status: firstNonEmpty(a.status),
            birthDate: firstNonEmpty(a.birth_date, a.birthDate),
            registeredOn: firstNonEmpty(a.registered_on, a.registeredOn),
            updatedOn: firstNonEmpty(a.updated_on, a.updatedOn),
          };
        });
        if (mounted) setAnimals(normalized);
      } catch (err) {
        // keep it simple — replace with your toast/logger if you like
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };

    void fetchAnimals();
    return () => {
      mounted = false;
    };
  }, [refreshKey]);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Tag Number</th>
            <th>Species</th>
            <th>Breed</th>
            <th>Gender</th>
            <th>Kraal Assignment</th>
            <th>Status</th>
            <th>Birth Date</th>
            <th>Registered On</th>
            <th>Updated On</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((a) => (
            <tr key={a.id}>
              <td>{a.tagNumber}</td>
              <td>{a.species}</td>
              <td>{a.breed}</td>
              <td>{a.gender}</td>
              <td>{a.kraalAssignment}</td>
              <td>{a.status}</td>
              <td>{a.birthDate}</td>
              <td>{a.registeredOn}</td>
              <td>{a.updatedOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

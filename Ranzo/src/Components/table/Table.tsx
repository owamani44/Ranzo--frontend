import "./table.scss";
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

const pickText = (...values: Array<unknown>): string => {
  for (const value of values) {
    if (typeof value === "string" && value.trim() !== "") {
      return value;
    }
    if (typeof value === "number") {
      return String(value);
    }
  }
  return "-";
};

const Table = () => {
  const [animals, setAnimals] = useState<TableAnimal[]>([]);

  useEffect(() => {
    myAxios.get("/animals")
      .then((res) => {
        const rows: ApiAnimal[] = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data?.data)
            ? res.data.data
            : Array.isArray(res.data?.content)
              ? res.data.content
            : [];

        const normalizedRows = rows.map((animal, index) => ({
          id: animal.id ?? index,
          tagNumber: pickText(animal.tag_number, animal.tagNumber),
          species: pickText(animal.species),
          breed: pickText(animal.breed),
          gender: pickText(animal.gender),
          kraalAssignment: pickText(
            animal.kraal_assignment,
            animal.kraalAssignment,
            typeof animal.kraal === "string" ? animal.kraal : animal.kraal?.name,
          ),
          status: pickText(animal.status),
          birthDate: pickText(animal.birth_date, animal.birthDate),
          registeredOn: pickText(animal.registered_on, animal.registeredOn),
          updatedOn: pickText(animal.updated_on, animal.updatedOn),
        }));

        setAnimals(normalizedRows);
      })
      .catch((err) => console.log(err));
  }, []);

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
          {animals.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.tagNumber}</td>
              <td>{animal.species}</td>
              <td>{animal.breed}</td>
              <td>{animal.gender}</td>
              <td>{animal.kraalAssignment}</td>
              <td>{animal.status}</td>
              <td>{animal.birthDate}</td>
              <td>{animal.registeredOn}</td>
              <td>{animal.updatedOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

/*{
    id: 9,
    tag_number: "KO2-015",
    species: "COW",
    breed: "Ankole",
    gender: "Female",
    kraal_assignment: "Kraal 2",
    status: "ALIVE",
    birth_date: "2023-08-23",
    registered_on: "2026-01-28",
    updated_on: "2026-01-28"
}*/

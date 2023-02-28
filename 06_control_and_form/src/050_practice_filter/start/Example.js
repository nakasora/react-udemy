import Profile from "./components/Profile";
import Filter  from "./components/Filter";
import { useState } from "react";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [nameForFilter, setNameForFilter] = useState('');

  return (
    <>
    <Filter nameForFilter={nameForFilter} setNameForFilter={setNameForFilter}/>
      <ul>
        {persons
          .filter(person => {
            const hasInputName = person.name.indexOf(nameForFilter) !== -1;
            return hasInputName;
          })
          .map((person) => (
            <li key={person.name}>
              <Profile {...person} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Example;

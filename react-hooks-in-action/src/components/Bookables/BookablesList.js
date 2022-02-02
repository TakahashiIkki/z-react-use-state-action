import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import * as staticJson from "../../static.json";
const { bookables } = staticJson;

function getUniqueValues(array, property) {
  const propValues = array.map((element) => element[property]);
  const uniqueValues = new Set(propValues);
  const uniqueValuesArray = [...uniqueValues];

  return uniqueValuesArray;
}

export function BookablesList() {
  const [group, setGroup] = useState("Kit");
  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(0);
  const groups = getUniqueValues(bookables, "group");

  function nextBookable() {
    setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
  }
  return (
    <div>
      <select value={group} onChange={(e) => setGroup(e.target.value)}>
        {groups.map((g) => (
          <option value={g} key={g}>
            {g}
          </option>
        ))}
      </select>
      <ul className="bookables items-list-nav">
        {bookablesInGroup.map((b, i) => (
          <li key={b.id} className={i === bookableIndex ? "selected" : null}>
            <button className="btn" onClick={() => setBookableIndex(i)}>
              {b.title}
            </button>
          </li>
        ))}
      </ul>
      <p>
        <button className="btn" onClick={nextBookable} autoFocus>
          <FaArrowRight />
          <span>Next</span>
        </button>
      </p>
    </div>
  );
}

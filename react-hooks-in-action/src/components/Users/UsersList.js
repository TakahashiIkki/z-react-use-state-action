import * as staticJson from "../../static.json";
import { useState } from "react";
const { users } = staticJson;

export function UsersList() {
  const [userIndex, setUserIndex] = useState(1);

  return (
    <ul className="bookables items-list-nav">
      {users.map((user, i) => (
        <li key={user.id} className={i === userIndex ? "selected" : null}>
          <button className="btn" onClick={() => setUserIndex(i)}>
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

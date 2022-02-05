import * as staticJson from "../../static.json";
import { useState } from "react";
const { users } = staticJson;

export function UsersList() {
  const [userIndex, setUserIndex] = useState(1);
  const selectedUser = users[userIndex];

  return (
    <>
      <ul className="bookables items-list-nav">
        {users.map((user, i) => (
          <li key={user.id} className={i === userIndex ? "selected" : null}>
            <button className="btn" onClick={() => setUserIndex(i)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div className="item user">
          <div className="item-header">
            <h2>{selectedUser.name}</h2>
          </div>

          <div className="user-details">
            <h3>{selectedUser.title}</h3>
            <p>{selectedUser.notes}</p>
          </div>
        </div>
      )}
    </>
  );
}

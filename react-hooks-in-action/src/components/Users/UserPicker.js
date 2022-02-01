import * as staticJson from "../../static.json";
const { users } = staticJson;

export function UserPicker() {
  return (
    <select>
      {users.map((user, i) => (
        <option key={user.id}>{user.name}</option>
      ))}
    </select>
  );
}

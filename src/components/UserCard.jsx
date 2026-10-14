import { useEffect, useState } from "react";

export default function UserCard({ search }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="flex flex-col bg-gray-500 px-3 py-2 rounded-md text-white"
            >
              <h2>Name: {user.name}</h2>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          ))
        ) : (
          <p>User tidak ditemukan</p>
        )}
      </div>
    </>
  );
}

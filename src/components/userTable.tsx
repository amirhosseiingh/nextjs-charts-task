import React from "react";
interface User {
  id: number;
  name: string;
  email: string;
}

async function getUser(): Promise<User[]> {
  const ress = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!ress.ok) {
    throw new Error("failed to get user");
  }
  return ress.json();
}
export default async function UserTable() {
  const users = await getUser();

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th  className="py-3 px-6">
              Name
            </th>
            <th className="py-3 px-6">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
              <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                {item.name}
              </td>
              <td className="py-4 px-6">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

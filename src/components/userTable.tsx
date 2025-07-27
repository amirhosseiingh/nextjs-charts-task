import { User } from "@/app/type/type";

interface UserTableProps {
  users: User[];
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
              <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                {user.name}
              </td>
              <td className="py-4 px-6">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

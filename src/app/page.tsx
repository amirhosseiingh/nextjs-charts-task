import { getUsers } from "@/app/lib/data";
import UserChart from "@/components/userChart";
import UserTable from "@/components/userTable";

export default async function HomePage() {
  const users = await getUsers();

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center"> users dashbord</h1>

      <div className="mb-8 p-4 border rounded-lg bg-white shadow-md">
        <UserChart users={users} />
      </div>

      <h2 className="text-2xl font-semibold mb-4"> users list</h2>
      <UserTable users={users} />
    </main>
  );
}

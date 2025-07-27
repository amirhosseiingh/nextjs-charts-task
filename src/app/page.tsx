import UserTable from "@/components/userTable";


export default function HomePage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">User List</h1>
      <UserTable />
    </main>
  );
}

import Image from "next/image";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div>Main Page</div>
    </main>
  );
}

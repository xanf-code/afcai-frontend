import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();

  const checkSession = () => {
    const accessToken = localStorage.getItem("access");
    if (!accessToken) {
      router.push("/backend/admin/login");
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <div className="max-w-2xl md:mx-auto md:mt-6 m-5">
      <h1 className="text-2xl font-bold">Welcome to AFCAI Dashboard</h1>
      <div className="mt-4 flex space-x-2">
        <Link href="/backend/admin/all">
          <a className="w-full items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
            All Teams
          </a>
        </Link>
        <Link href="/backend/admin/verified">
          <a className="w-full items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
            Verified Teams
          </a>
        </Link>
      </div>
    </div>
  );
}

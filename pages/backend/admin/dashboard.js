import Link from "next/link";
import { useRouter } from "next/router";
import {
  At,
  CheckCircle,
  Kanban,
  Lightning,
  Question,
  Users,
} from "phosphor-react";
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
      <div className="flex flex-col">
        <div className="mt-4 flex space-x-2">
          <Link href="/backend/admin/all">
            <a className="w-full items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
              <div className="flex space-x-2 justify-center">
                <Users size={25} weight="duotone" />
                <h1 className="items-center flex">All Teams</h1>
              </div>
            </a>
          </Link>
          <Link href="/backend/admin/verified">
            <a className="w-full items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
              <div className="flex space-x-2 justify-center">
                <CheckCircle size={25} weight="duotone" />
                <h1 className="items-center flex">Verified Teams</h1>
              </div>
            </a>
          </Link>
        </div>
        <div className="mt-2 flex space-x-2">
          <Link href="/backend/admin/general">
            <a className="w-full items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
              <div className="flex space-x-2 justify-center">
                <Question size={25} weight="duotone" />
                <h1 className="items-center flex">General Queries</h1>
              </div>
            </a>
          </Link>
          <Link href="#">
            <a className="w-full items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
              <div className="flex space-x-2 justify-center">
                <Lightning size={25} weight="duotone" />
                <h1 className="items-center flex">Priority Queries</h1>
              </div>
            </a>
          </Link>
        </div>
        <div className="mt-2 flex space-x-2">
          <a
            href={`${process.env.CMS_PUBLIC_URL}/admin`}
            target="_blank"
            className="w-full items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
          >
            <div className="flex space-x-2 justify-center">
              <Kanban size={25} weight="duotone" />
              <h1 className="items-center flex">Content Management</h1>
            </div>
          </a>
          <a
            href="http://email.afcai.in"
            target="_blank"
            className="w-full items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
          >
            <div className="flex space-x-2 justify-center">
              <At size={25} weight="duotone" />
              <h1 className="items-center flex">Email</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

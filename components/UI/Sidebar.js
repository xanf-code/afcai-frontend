import Link from "next/link";
import { useRouter } from "next/router";
import {
  CreditCard,
  Files,
  House,
  Info,
  Lightbulb,
  Scroll,
  ShieldChevron,
  UsersThree,
} from "phosphor-react";
import { useEffect, useState } from "react";
import useNavBarStore from "../../store/NavBarStore";

function Sidebar() {
  const showSideBar = useNavBarStore((state) => state.showSideBar);
  const setShowSideBar = useNavBarStore((state) => state.setShowSideBar);
  const [admin, setAdmin] = useState(false);
  const router = useRouter();

  const checkSession = () => {
    const accessToken = localStorage.getItem("access");
    if (accessToken == "true") {
      setAdmin(true);
    }
  };

  useEffect(() => {
    checkSession();
  }, [admin]);

  return (
    <div
      className={`z-50 left-0 md:w-[20%] bg-white p-8 md:p-10 pl-8 text-black fixed h-full ease-in-out duration-300 ${
        showSideBar ? "-translate-x-full " : "translate-x-0"
      } touch-none`}
    >
      <aside aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 touch-none">
          <ul className="space-y-3">
            <li onClick={setShowSideBar}>
              <Link href="/">
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ">
                  <House size={25} weight="duotone" />
                  <span className="ml-3 font-IBMSans whitespace-nowrap">
                    Home
                  </span>
                </a>
              </Link>
            </li>
            <li onClick={setShowSideBar}>
              <Link href="/registration">
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                  <Scroll size={25} weight="duotone" />
                  <span className="ml-3 font-IBMSans flex-1 whitespace-nowrap">
                    Registration
                  </span>
                </a>
              </Link>
            </li>
            <li onClick={setShowSideBar}>
              <Link href="/affiliated">
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ">
                  <ShieldChevron size={25} weight="duotone" />
                  <span className="flex-1 ml-3 font-IBMSans whitespace-nowrap">
                    Affiliated Clubs
                  </span>
                  <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full ">
                    Beta
                  </span>
                </a>
              </Link>
            </li>
            <li onClick={setShowSideBar}>
              <Link href="/about">
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                  <Info size={25} weight="duotone" />
                  <span className="flex-1 ml-3 whitespace-nowrap font-IBMSans">
                    About
                  </span>
                </a>
              </Link>
            </li>
            <li onClick={setShowSideBar}>
              <Link href="/vission">
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
                  <Lightbulb size={25} weight="duotone" />
                  <span className="flex-1 ml-3 whitespace-nowrap font-IBMSans">
                    Vission
                  </span>
                </a>
              </Link>
            </li>
            <li onClick={setShowSideBar}>
              <Link href="/connect">
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100">
                  <UsersThree size={25} weight="duotone" />
                  <span className="flex-1 ml-3 whitespace-nowrap font-IBMSans">
                    Contact
                  </span>
                </a>
              </Link>
            </li>
            <li onClick={setShowSideBar}>
              <Link href="/whitepaper">
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100">
                  <Files size={25} weight="duotone" />
                  <span className="flex-1 ml-3 whitespace-nowrap font-IBMSans">
                    Whitepaper
                  </span>
                </a>
              </Link>
            </li>
            {admin && (
              <li onClick={setShowSideBar}>
                <Link href="/backend/admin/dashboard">
                  <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ">
                    <CreditCard size={25} weight="duotone" />
                    <span className="flex-1 ml-3 font-IBMSans whitespace-nowrap">
                      Dashboard
                    </span>
                    <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full ">
                      Beta
                    </span>
                  </a>
                </Link>
              </li>
            )}
          </ul>
          <div
            id="dropdown-cta"
            className="p-4 mt-6 bg-blue-50 rounded-lg "
            role="alert"
          >
            <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
              Beta
            </span>
            <p className="mb-3 text-sm text-blue-900 mt-3">
              The website and it's features are still in early beta stage. If
              you find any bugs or have any suggestions, please contact us.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;

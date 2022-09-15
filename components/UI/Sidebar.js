import Link from "next/link";
import useNavBarStore from "../../store/NavBarStore";

function Sidebar() {
  const showSideBar = useNavBarStore((state) => state.showSideBar);
  const setShowSideBar = useNavBarStore((state) => state.setShowSideBar);

  return (
    <div
      className={`z-50 left-0 w-[55%] md:w-[15%] bg-white p-10 pl-8 text-black fixed h-full ease-in-out duration-300 ${
        showSideBar ? "-translate-x-full " : "translate-x-0"
      }`}
    >
      <div className="flex-col space-y-1.5">
        <div
          onClick={setShowSideBar}
          className="hover:bg-blue-50 p-2 rounded-md ease-in-out duration-300"
        >
          <Link href="/">
            <a>
              <h1 className="text-lg font-IBMSans font-medium">🏠 Home</h1>
            </a>
          </Link>
        </div>
        <div
          onClick={setShowSideBar}
          className="hover:bg-blue-50 p-2 rounded-md ease-in-out duration-300"
        >
          <Link href="/registration">
            <a>
              <h1 className="text-lg font-IBMSans font-medium">⚽️ Register</h1>
            </a>
          </Link>
        </div>
        <div
          className="hover:bg-blue-50 p-2 rounded-md ease-in-out duration-300"
          onClick={setShowSideBar}
        >
          <Link href="/affiliated">
            <a>
              <h1 className="text-lg font-IBMSans font-medium">
                🚀 Affliated Teams
              </h1>
            </a>
          </Link>
        </div>
        <div
          className="hover:bg-blue-50 p-2 rounded-md ease-in-out duration-300"
          onClick={setShowSideBar}
        >
          <Link href="/about">
            <a>
              <h1 className="text-lg font-IBMSans font-medium">🏢 About Us</h1>
            </a>
          </Link>
        </div>
        <div
          className="hover:bg-blue-50 p-2 rounded-md ease-in-out duration-300"
          onClick={setShowSideBar}
        >
          <Link href="/vission">
            <a>
              <h1 className="text-lg font-IBMSans font-medium">💡 Vission</h1>
            </a>
          </Link>
        </div>
        <div
          className="hover:bg-blue-50 p-2 rounded-md ease-in-out duration-300"
          onClick={setShowSideBar}
        >
          <Link href="/contact">
            <a>
              <h1 className="text-lg font-IBMSans font-medium">🤝 Connect</h1>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

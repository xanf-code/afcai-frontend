import Link from "next/link";
import useNavBarStore from "../../store/NavBarStore";

function Sidebar() {
  const showSideBar = useNavBarStore((state) => state.showSideBar);
  const setShowSideBar = useNavBarStore((state) => state.setShowSideBar);

  return (
    <div
      className={`z-50 left-0 w-[55%] md:w-[15%] bg-blue-600 p-10 pl-20 text-white fixed h-full ease-in-out duration-300 ${
        showSideBar ? "-translate-x-full " : "translate-x-0"
      }`}
    >
      <div className="flex-col">
        <ul>
          <li onClick={setShowSideBar}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li onClick={setShowSideBar}>
            <Link href="/registration">
              <a>Register</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

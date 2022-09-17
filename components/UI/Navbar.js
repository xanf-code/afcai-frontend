import useNavBarStore from "../../store/NavBarStore";
import Sidebar from "./Sidebar";
import { List, X } from "phosphor-react";
import { useRouter } from "next/router";

function Navbar() {
  const showSideBar = useNavBarStore((state) => state.showSideBar);
  const setShowSideBar = useNavBarStore((state) => state.setShowSideBar);
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-between">
        <div className="cursor-pointer " onClick={setShowSideBar}>
          {!showSideBar ? (
            <X className="m-2.5" size={32} />
          ) : (
            <List className="m-2.5" size={32} />
          )}
        </div>
        <img
          onClick={() => router.push("/")}
          src="https://res.cloudinary.com/dec2lboba/image/upload/v1663427397/AFCAI-Private-Pics/AFCAI-Association-of-Football-Clubs-and-Academies-in-India-removebg-preview_k6ca70.png"
          className="mr-3 h-14 md:inline-block hidden cursor-pointer"
          alt="AFCAI Logo"
        />
        <button
          onClick={() => router.push("/registration")}
          type="button"
          className={`text-white bg-[#ffa953] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 m-2 ${
            router.pathname === "/registration" && "invisible"
          }`}
        >
          <h1 className="font-IBMSans">Get started 🔥</h1>
        </button>
      </div>
      <Sidebar />
    </div>
  );
}

export default Navbar;

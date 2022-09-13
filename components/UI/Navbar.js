import useNavBarStore from "../../store/NavBarStore";
import Sidebar from "./Sidebar";

function Navbar() {
  const showSideBar = useNavBarStore((state) => state.showSideBar);
  const setShowSideBar = useNavBarStore((state) => state.setShowSideBar);

  return (
    <div className="bg-green-300">
      <button onClick={setShowSideBar}>
        {!showSideBar ? "Hide" : "Show"} Sidebar
      </button>
      <Sidebar />
    </div>
  );
}

export default Navbar;

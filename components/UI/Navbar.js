import useNavBarStore from "../../store/NavBarStore";
import Sidebar from "./Sidebar";
import { List, X } from "phosphor-react";

function Navbar() {
  const showSideBar = useNavBarStore((state) => state.showSideBar);
  const setShowSideBar = useNavBarStore((state) => state.setShowSideBar);

  return (
    <div>
      <div
        className="cursor-pointer disabled:selection:"
        onClick={setShowSideBar}
      >
        {!showSideBar ? (
          <X className="m-2.5" size={32} />
        ) : (
          <List className="m-2.5" size={32} />
        )}
      </div>
      <Sidebar />
    </div>
  );
}

export default Navbar;

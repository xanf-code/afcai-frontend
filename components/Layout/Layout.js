import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { Sidebar } from "phosphor-react";
import useNavBarStore from "../../store/NavBarStore";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";

const client = new ApolloClient({
  uri: `${process.env.GQL_PUBLIC_URL}`,
  cache: new InMemoryCache(),
});

function Layout({ children }) {
  const showSideBar = useNavBarStore((state) => state.showSideBar);
  const setShowSideBar = useNavBarStore((state) => state.setShowSideBar);

  return (
    <ApolloProvider client={client}>
      {!showSideBar && (
        <div
          onClick={setShowSideBar}
          className="bg-black opacity-75 w-full h-full fixed ease-in-out durataion-300"
        />
      )}
      <div className="flex flex-col min-h-screen">
        <header
          className={`py-0.5 bg-[#ff9933] text-white touch-none z-10 ${
            showSideBar ? "sticky" : "fixed w-full"
          } `}
        >
          <Navbar />
        </header>
        <main
          className={`${!showSideBar ? "md:mt-[58px] -z-10" : "md:mt-0"} mb-10`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default Layout;

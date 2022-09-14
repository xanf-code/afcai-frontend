import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import useNavBarStore from "../../store/NavBarStore";
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
      <header className="py-0.5 bg-[#ff9933] text-white">
        <Navbar />
      </header>
      {!showSideBar && (
        <div
          onClick={setShowSideBar}
          className="bg-black opacity-75 w-full h-full fixed ease-in-out durataion-300"
        />
      )}
      <main className="my-6">{children}</main>
      {/* <footer class="py-3 bg-[#108809] text-center text-white">
            Tailwind is Awesome 😎
          </footer> */}
    </ApolloProvider>
  );
}

export default Layout;

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import Navbar from "../UI/Navbar";

const client = new ApolloClient({
  uri: "http://localhost:5000/",
  cache: new InMemoryCache(),
});

function Layout({ children }) {
  return (
    <ApolloProvider client={client}>
      <div>
        <header>
          <Navbar />
        </header>
        <section>{children}</section>
        <footer>Footer Here</footer>
      </div>
    </ApolloProvider>
  );
}

export default Layout;

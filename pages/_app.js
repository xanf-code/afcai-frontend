import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
export { reportWebVitals } from "next-axiom";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import '../styles/tailwind.css';
import Layout from '@components/Layout';

const App = ({ Component, pageProps }) => {
  //Providers -Context Theme - Data
  //Layout
  // props adicionales
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default App;

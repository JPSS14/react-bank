import '../styles/global.css';
import { BankProvider } from '../contexts/BankContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
function MyApp({ Component, pageProps }) {
  return (
    <BankProvider>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </BankProvider>
  );
}

export default MyApp

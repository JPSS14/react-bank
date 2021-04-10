import '../styles/global.css';
import { BankProvider } from '../contexts/BankContext';
function MyApp({ Component, pageProps }) {
  return (
    <BankProvider>
      <Component {...pageProps} />
    </BankProvider>
  );
}

export default MyApp

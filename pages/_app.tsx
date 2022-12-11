import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MemberProvider } from '../context/MemberProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MemberProvider>
      <Component {...pageProps} />
    </MemberProvider>
  );
}

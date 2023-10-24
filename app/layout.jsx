import "@styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "AIVIDBG",
  description: "Remove the background of videos using AI - 100% automatically",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
      <link rel="Icon" href="/favicon/favicon.ico"/>
    </head>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
          <Analytics />
        </main>
      </Provider>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"></script>
    </body>
  </html>
);

export default RootLayout;

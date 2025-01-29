
import React from 'react'
import "@styles/globals.css";
import Navbar from '@components/Navbar';
import { persistor, store } from '@store/store.jsx';
import StoreProvider from './StoreProvider.jsx';
import Footer from '@components/Footer.jsx';
// export const metadata = {
//     title: "AlumNexus",
//     description: "Discover & connect Alumni",
//   };

import { PersistGate } from 'redux-persist/integration/react';

const RootLayout = ({ children }) => {
  return (

    <html className='hide-scrollbar bg' lang='en'>
      <body className='dark:bg-gray-900 overflow-x-hidden '>


        <main className='app '>
          <StoreProvider store={store}>
            <PersistGate persistor={persistor} loading={null} >

              <Navbar />
              {children}
              <Footer />
            </PersistGate>

          </StoreProvider>
        </main>

      </body>

    </html>

  )
}

export default RootLayout
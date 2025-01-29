
import React from 'react'
import "@styles/globals.css";
import Navbar from '@components/Navbar';
import { store } from '@store/store.jsx';
import StoreProvider from './StoreProvider.jsx';
import Footer from '@components/Footer.jsx';
// export const metadata = {
//     title: "AlumNexus",
//     description: "Discover & connect Alumni",
//   };
  

const RootLayout = ({children}) => {
  return (

    
    <html className='hide-scrollbar bg' lang='en'>
    <body className='dark:bg-gray-900 overflow-x-hidden '>
        

        <main className='app '>
    <StoreProvider store={store}>
          <Navbar />
          {children}
          <Footer/>
  </StoreProvider>
        </main>

    </body>

  </html>  

)
}

export default RootLayout
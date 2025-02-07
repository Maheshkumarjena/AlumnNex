
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
import { isDarkMode } from '@utils/generalUtils.js';

const RootLayout = ({children}) => {
  return (

    
    <html className='hide-scrollbar ' lang='en'>
    <body className={`overflow-x-hidden ${isDarkMode ? "bg-gray-900" :"bg-white"} `}>
        

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
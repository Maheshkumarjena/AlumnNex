import getInitialTheme from "./GetInitialTheme";
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: "dark", // Use the saved theme or default to light
    reducers: {
        toggleTheme: (state) => {
            const newTheme = state === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme); // Save new theme to localStorage
            return newTheme;
        },
        
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;









// After implimentation 


// import getInitialTheme from "./GetInitialTheme";
// import { createSlice } from "@reduxjs/toolkit";

// const themeSlice = createSlice({
//     name: 'theme',
//     initialState: getInitialTheme(), // Use the saved theme or default to light
//     reducers: {
//         toggleTheme: (state) => {
//             const newTheme = state === 'light' ? 'dark' : 'light';
//             localStorage.setItem('theme', newTheme); // Save new theme to localStorage
//             return newTheme;
//         }
//     },
// });

// export const { toggleTheme } = themeSlice.actions;
// export default themeSlice.reducer;

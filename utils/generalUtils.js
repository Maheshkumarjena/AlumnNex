"use client"
import { useSelector } from 'react-redux';

const theme = useSelector((state) => state.theme);

export const isDarkMode = theme === 'dark';
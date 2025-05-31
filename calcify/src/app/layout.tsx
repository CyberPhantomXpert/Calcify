import React from 'react';
import { ThemeProvider } from '../constants/theme';
import '../styles/globals.css';

const Layout: React.FC = ({ children }) => {
    return (
        <ThemeProvider>
            <div className="min-h-screen flex flex-col">
                <header className="bg-gray-800 text-white p-4">
                    <h1 className="text-2xl">Calcify</h1>
                </header>
                <main className="flex-grow p-4">
                    {children}
                </main>
                <footer className="bg-gray-800 text-white p-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Calcify. All rights reserved.</p>
                </footer>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.tsx'
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';

const root = document.getElementById('root')

render(() =>
    <div class="mx-auto min-h-screen max-w-6xl border-x border-zinc-200">
        <Navbar />
        <App />
        <Footer />
    </div>,
    root!
);

import Link from 'next/link';
import './globals.css';

// app/layout.tsx və ya Navbar komponentinin daxilində:

export default function Navbar() {
  return (
    <nav className="
      /* MOBİL (375px) üçün standart görünüş: */
      flex flex-col items-center gap-4 p-4 bg-white shadow-md
      
      /* DESKTOP (1280px / xl) üçün dəyişən görünüş: */
      xl:flex-row xl:justify-between xl:px-8
    ">
      {/* Loqo */}
      <div className="font-bold text-brand-primary text-lg">MyLogo</div>

      {/* Keçidlər (Links) */}
      <div className="
        /* Mobildə alt-alta və tam enində dursunlar */
        flex flex-col gap-2 w-full text-center
        
        /* Desktopda yan-yana və normal düzülsünlər */
        xl:flex-row xl:gap-6 xl:w-auto
      ">
        <a href="/" className="hover:text-brand-primary p-2 bg-slate-100 xl:bg-transparent rounded">Home</a>
        <a href="/dashboard" className="hover:text-brand-primary p-2 bg-slate-100 xl:bg-transparent rounded">Dashboard</a>
        <a href="/profile" className="hover:text-brand-primary p-2 bg-slate-100 xl:bg-transparent rounded">Profile</a>
        <a href="/health" className="hover:text-brand-primary p-2 bg-slate-100 xl:bg-transparent rounded">Health Check</a>
      </div>
    </nav>
  );
}
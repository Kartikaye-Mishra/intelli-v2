import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {FaTimes, FaBars} from 'react-icons/fa';
import { navItems } from '../../constants/general';
import { fullCompanyName } from '../../constants/title';



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-primary font-bold text-xl flex items-center gap-2">
           {fullCompanyName}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-2 lg:space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-2 px-2 py-1 capitalize text-md font-medium ${
                isActive(item.path)
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-700 hover:text-primary hover:border-b-2 hover:border-primary'
              }`}
            >
              {<item.icon className='h-5 w-5'/>} <span className={`${isActive(item.path)?"text-black":""}`}>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-primary focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
    <div
  className={`md:hidden bg-white capitalize shadow-md px-4 overflow-hidden transition-all duration-300 ease-in-out ${
    menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
  }`}
>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 border-b text-md font-medium ${
                isActive(item.path)
                  ? 'text-primary border-primary'
                  : 'text-gray-700 hover:text-primary hover:border-primary'
              }`}
            >
              <div className="flex items-center gap-2">
                {<item.icon className='h-5 w-5'/>} {item.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;





// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaTimes, FaBars } from 'react-icons/fa';
// import { navItems } from '../../constants/general';
// import { fullCompanyName } from '../../constants/title';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [solidBg, setSolidBg] = useState(false);
//   const location = useLocation();

//   // On home page: stay transparent until scrolled 80px.
//   // On other pages: always solid.
//   useEffect(() => {
//     const onScroll = () => {
//       const pastThreshold = window.scrollY > 200;
//       setSolidBg(location.pathname !== '/' || pastThreshold);
//     };
//     onScroll(); // init on mount / route change
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, [location.pathname]);

//   // Dynamic classes
//   const headerClasses = solidBg
//     ? 'bg-white shadow-md text-primary'
//     : 'bg-transparent text-white';
//   const linkBase = 'flex items-center gap-2 px-2 py-1 capitalize text-md font-medium transition';

//   return (
//     <header className={`fixed top-0 w-full z-50 ${headerClasses} transition-colors duration-300 `}>
//       <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="font-bold text-xl flex items-center gap-2">
//           {fullCompanyName}
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-8 items-center">
//           {navItems.map((item) => {
//             const active = location.pathname === item.path;
//             const activeClasses = active
//               ? `border-b-2 ${solidBg ? 'border-primary text-primary' : 'border-white text-white'}`
//               : `${solidBg ? 'text-gray-700 hover:text-primary hover:border-primary' : 'text-white/70 hover:text-white hover:border-white'}`;

//             return (
//               <Link
//                 key={item.label}
//                 to={item.path}
//                 className={`${linkBase} ${activeClasses}`}
//               >
//                 <item.icon className="h-5 w-5" /> {item.label}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMenuOpen((o) => !o)}
//           className={`md:hidden text-2xl focus:outline-none`}
//         >
//           {menuOpen ? <FaTimes className={solidBg ? 'text-primary' : 'text-white'} /> 
//                     : <FaBars className={solidBg ? 'text-primary' : 'text-white'} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       <div
//         className={`
//           md:hidden
//           ${solidBg ? 'bg-white/95 text-primary' : 'bg-black/70 text-white'}
//           capitalize shadow-md px-4 overflow-hidden
//           transition-all duration-300 ease-in-out
//           ${menuOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}
//         `}
//       >
//         {navItems.map((item) => {
//           const active = location.pathname === item.path;
//           const activeClasses = active
//             ? solidBg
//               ? 'text-primary border-primary'
//               : 'text-white border-white'
//             : solidBg
//               ? 'text-gray-700 hover:text-primary hover:border-primary'
//               : 'text-gray-200 hover:text-white hover:border-white';

//           return (
//             <Link
//               key={item.label}
//               to={item.path}
//               onClick={() => setMenuOpen(false)}
//               className={`block py-2 border-b text-md font-medium transition ${activeClasses}`}
//             >
//               <div className="flex items-center gap-2">
//                 <item.icon className="h-5 w-5" /> {item.label}
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </header>
//   );
// };

// export default Header;

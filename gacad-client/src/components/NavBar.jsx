import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nice.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300',
    isActive
      ? 'bg-[#FFD100] text-[#002147] shadow-md'
      : 'text-white hover:bg-white/10 hover:text-[#FFD100]',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#002147]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo + Title */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="BulldogEx"
            className="h-10 w-10 rounded-full border border-white/20 bg-white object-contain p-1"
          />
          <p className="text-lg font-bold text-white tracking-wide">
            NU Bulldogs Exchange
          </p>
        </NavLink>

        {/* Navigation */}
        <nav className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
};

export default NavBar;

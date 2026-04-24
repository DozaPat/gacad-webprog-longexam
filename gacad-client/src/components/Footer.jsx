import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#002147] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-white sm:flex-row sm:items-center sm:justify-between">
        
        <div>
          <p className="text-lg font-bold tracking-wide">NU Bulldogs Exchange</p>
          <p className="mt-1 text-sm text-blue-200/80">Wear your school.</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link 
            to="/about" 
            className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-100 transition-colors hover:text-[#FFD100]"
          >
            About
          </Link>
          <a 
            href="https://www.national-u.edu.ph/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-100 transition-colors hover:text-[#FFD100]"
          >
            National University
          </a>
          <a 
            href="https://www.lazada.com.ph/shop/national-u-bulldogs-exchange" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-100 transition-colors hover:text-[#FFD100]"
          >
            Lazada
          </a>
        </nav>

      </div>
    </footer>
  )
}

export default Footer;
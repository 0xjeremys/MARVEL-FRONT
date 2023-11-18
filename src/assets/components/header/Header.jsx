import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img
          src="https://imgs.search.brave.com/9bmOOZMEMk4KSdpEBHVKc-ialhxdYX513cMGLtzGYHo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jdXRl/d2FsbHBhcGVyLm9y/Zy8yNC9tYXJ2ZWwt/bG9nby1wbmcvZmls/ZW1hcnZlbC1sb2dv/c3ZnLXdpa2ltZWRp/YS1jb21tb25zLnBu/Zw"
          alt=""
        />
      </div>
      <div className="header-button">
        <button>Heros</button>
        <button>Comics</button>
        <button>Favoris</button>
      </div>
    </header>
  );
};

export default Header;

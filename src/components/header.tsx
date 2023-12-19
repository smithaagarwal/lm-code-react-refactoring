import Navlink from "./navlink";
export interface HeaderProps {
  nav: string[];
}
const Header: React.FC<HeaderProps> = ({ nav }) => (
  <>
    <header className="site-header">
      <div className="site-identity">
        <a>
          <img
            className="eefe-logo"
            src="/icons8-space-64.png"
            alt="eefe spaceship logo"
          />
        </a>
        <h1>Extraterrestrial Excursions for Earthlings</h1>
      </div>
      <Navlink nav={nav} />
    </header>
  </>
);

export default Header;

import HeaderContainer from "../../origanism/Header"
import './index.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <a href="/" className="navbar-brand">Ideas</a>
        <HeaderContainer />
      </div>
    </header>
  )
}

export default Header

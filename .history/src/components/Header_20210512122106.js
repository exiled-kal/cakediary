import Video from '../assets/Cakeparty.mp4';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Video} alt="Cakepart" />
      </div>
      <div className="header__center">
        <p>Model S</p>
      </div>
      <div className="header__right">
        <p>Shop</p>
      </div>
    </div>
  );
}

export default Header;

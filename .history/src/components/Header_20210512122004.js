import Video from '../assets/Cakeparty.mp4';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Video} alt="TeslaLogo" />
      </div>
      <div className="header__center">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panel</p>
      </div>
      <div className="header__right">
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>
    </div>
  );
}

export default Header;

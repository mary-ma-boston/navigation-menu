import { useState } from "react";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import productsData from "../../utils/productsData";
import MenuItem from "../MenuItem/MenuItem";
import Product1 from "../Products/Product1";
import Product2 from "../Products/Product2";
import Product3 from "../Products/Product3";
import Product4 from "../Products/Product4";
import styles from "./NavigationMenu.module.css";

const NavigationMenu: React.FC = () => {
  /* control hamburger menu  */
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <div
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-expanded={menuActive}
        aria-controls="main-menu"
      >
        &#9776; {/* Unicode character for the hamburger icon */}
      </div>
      <nav id="main-menu" className={menuActive ? styles.menuActive : ""}>
        <NavLink to="/" className={styles.navlink}>
          <MenuItem title="Home" />
        </NavLink>
        <NavLink to="/products" className={styles.navlink}>
          <MenuItem title="Products" hasSubmenu={true}>
            <ul className={styles.submenu}>
              {productsData.map((product) => (
                <Link to={product.url} className={styles.linkProduct}>
                  <li key={product.id} className={styles.productItem}>
                    {" "}
                    {product.title}
                  </li>
                </Link>
              ))}
            </ul>
          </MenuItem>
        </NavLink>
        <NavLink to="/pricing" className={styles.navlink}>
          <MenuItem title="Pricing" />
        </NavLink>
        <NavLink to="/about" className={styles.navlink}>
          <MenuItem title="About" />
        </NavLink>
      </nav>
      <Routes>
        <Route path="/products/product1" element={<Product1 />} />
        <Route path="/products/product2" element={<Product2 />} />
        <Route path="/products/product3" element={<Product3 />} />
        <Route path="/products/product4" element={<Product4 />} />
      </Routes>
    </>
  );
};

export default NavigationMenu;

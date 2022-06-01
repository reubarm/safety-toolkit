import { PrismicText, PrismicLink } from "@prismicio/react";

/**
 * Menu link component
 */
const MenuLink = ({ menuLink }) => {
  return (
    <li>
      <PrismicLink field={menuLink.link}>
        <PrismicText field={menuLink.label} />
      </PrismicLink>
    </li>
  );
};

/**
 * Site header/nav component
 */
export const Header = ({ menuDoc }) => {
  if (menuDoc) {
    return (
      <header className="site-header">
        {/* <PrismicLink href="/">
          <img
            src="https://www.nuj.org.uk/assets/img/logo.svg"
            style={{ margin: "-20px auto 0" }}
          />
        </PrismicLink> */}
        {/* <nav>
          <ul>
            {menuDoc.data.menu_links.map((menuLink) => (
              <MenuLink menuLink={menuLink} key={menuLink.link.id} />
            ))}
          </ul>
        </nav> */}
      </header>
    );
  }

  return null;
};

import modules from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={modules.navigation_container}>
      <a className={modules.button} href="/">
        Home
      </a>
      <a className={modules.button} href="/products">
        Products
      </a>
    </nav>
  );
};

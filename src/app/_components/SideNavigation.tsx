import modules from "./Navigation.module.css";

export const SideNavigation = () => {
  return (
    <aside className={modules.sideNavigationContainer}>
      <a className={modules.button} href="/">
        Home
      </a>
      <a className={modules.button} href="/products">
        Products
      </a>
    </aside>
  );
};

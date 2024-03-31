import modules from "./Navigation.module.css";

export const SideNavigation = () => {
  return (
    <aside className={modules.side_navigation_container}>
      <a className={modules.button} href="/">
        Home
      </a>
      <a className={modules.button} href="/products">
        Products
      </a>
    </aside>
  );
};

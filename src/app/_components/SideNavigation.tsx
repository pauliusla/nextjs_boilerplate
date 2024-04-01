import { NavButton } from "@/components/NavButton/NavButton";
import modules from "./Navigation.module.scss";

export const SideNavigation = (): JSX.Element => {
  return (
    <aside className={modules.sideNavigationContainer}>
      <NavButton active={true} path="/" text="Home" />
      <NavButton path="/products" text="Products" />
    </aside>
  );
};

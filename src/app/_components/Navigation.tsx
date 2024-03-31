import { NavButton } from "@/components/NavButton/NavButton";
import modules from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={modules.navigationContainer}>
      <NavButton path="/" text="Home" active={true} />
      <NavButton path="/products" text="Products" />
    </nav>
  );
};

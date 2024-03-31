import module from "./NavButton.module.css";

interface NavButton {
  text: string;
  path: string;
  active?: boolean;
}

export const NavButton = ({ text, path, active }: NavButton): JSX.Element => {
  const buttonState = active ? module.activeButton : module.button;

  return (
    <a href={path} className={`${module.container} ${buttonState}`}>
      {text}
    </a>
  );
};

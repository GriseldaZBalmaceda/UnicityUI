import { UnicityButton } from "./Buttons.css";
type Button = {
  label: string;
};
const UnicityStyledButton = (props: Button) => (
  <div className={UnicityButton}>{props.label}</div>
);

export default UnicityStyledButton;

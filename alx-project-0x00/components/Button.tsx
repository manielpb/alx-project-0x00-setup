import { ButtonProps } from "../interfaces";

const Button = ({ title, styles }: ButtonProps) => {
  return (
    <button className={styles}>
      {title}
    </button>
  );
};

export default Button;

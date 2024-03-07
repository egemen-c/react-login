interface ButtonProps {
    placeholder: string;
    onClick: () => void;
}
  
const Button: React.FC<ButtonProps> = ({ placeholder, onClick }) => {
    return (
      <button onClick={onClick}>
        {placeholder}
      </button>
    );
};

export default Button

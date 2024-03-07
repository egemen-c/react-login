import './Button.css'
interface ButtonProps {
    placeholder: string;
    onClick: () => void;
}
  
const Button: React.FC<ButtonProps> = ({ placeholder, onClick }) => {
    return (
      <button onClick={onClick} className="button">
        {placeholder}
      </button>
    );
};

export default Button

type ButtonProps = {
  children: any;
  onClick?: () => void;
};

const ControlButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="control-button">
      {children}
    </button>
  );
};

export default ControlButton;

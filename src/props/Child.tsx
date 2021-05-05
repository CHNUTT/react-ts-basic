interface ChildProps {
  color: string;
  handleClick: () => void;
}

export const Child = ({ color, handleClick }: ChildProps) => {
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {color}
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  handleClick,
  children,
}) => {
  return (
    <div>
      <button onClick={handleClick}>Click me children</button>
      {color}
    </div>
  );
};

export const ChildAsFullFC: React.FunctionComponent<ChildProps> = ({
  color,
}) => {
  return <div>{color}</div>;
};

ChildAsFC.displayName = '';

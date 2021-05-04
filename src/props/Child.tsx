interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};

export const ChildAsFullFC: React.FunctionComponent<ChildProps> = ({
  color,
}) => {
  return <div>{color}</div>;
};

ChildAsFC.displayName = '';

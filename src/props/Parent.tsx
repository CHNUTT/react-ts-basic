import { Child } from './Child';

const Parent = () => (
  <Child color='red' handleClick={() => console.log('Clicked')} />
);

export default Parent;

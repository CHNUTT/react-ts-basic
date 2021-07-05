import { ChildAsFC } from './Child';

const Parent = () => (
	// ! Without define react function component type we need to define children in the component interface and need little work define it
	// <Child color='red' handleClick={() => console.log('Clicked')}> </Child>

	// ! But if we use the explicit defined function component type we don't have to do that, just put chlidren in the function arguments
	<ChildAsFC color='red' handleClick={() => console.log('Clicked')}>
		{'something'}
	</ChildAsFC>
);

export default Parent;

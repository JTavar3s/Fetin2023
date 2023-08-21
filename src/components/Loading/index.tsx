import React from 'react';
import { Container, Spin } from './styles';

const Loading: React.FC = () => {
	return (
		<Container>
			<Spin />
		</Container>
	);
};

export default Loading;

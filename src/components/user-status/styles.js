import styled from 'styled-components';

const StyledActive = styled.span`
	color: ${({ active }) => (active ? '#13B176' : '#CE3131')};
`;

export { StyledActive };

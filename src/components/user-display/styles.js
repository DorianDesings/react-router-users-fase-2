import styled from 'styled-components';

const StyledUserDisplay = styled.div`
	display: flex;
	align-items: center;
`;

const StyledImageProfile = styled.img`
	border-radius: 50%;
	width: 50px;
	margin-right: 1rem;
`;

const StyledUserInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
`;

const StyledName = styled.h2`
	font-size: 1rem;
	margin: 0.25rem 0;
`;

const StyledUsername = styled.p`
	font-size: 0.75rem;
	margin: 0;
`;

export {
	StyledUserDisplay,
	StyledImageProfile,
	StyledUserInfo,
	StyledName,
	StyledUsername
};

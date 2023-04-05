import {
	StyledImageProfile,
	StyledName,
	StyledUserDisplay,
	StyledUserInfo,
	StyledUsername
} from './styles';

const UserDisplay = ({ name, username, profileImage }) => (
	<StyledUserDisplay>
		<StyledImageProfile src={profileImage} />
		<StyledUserInfo>
			<StyledName>{name}</StyledName>
			<StyledUsername>@{username}</StyledUsername>
		</StyledUserInfo>
	</StyledUserDisplay>
);

export default UserDisplay;

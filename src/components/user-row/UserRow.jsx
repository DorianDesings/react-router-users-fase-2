import { useNavigate } from 'react-router-dom';
import UserDisplay from '../user-display/UserDisplay';
import UserStatus from '../user-status/UserStatus';
import { StyledRow } from './styles';

const UserRow = ({ userId, username, name, profileImage, active }) => {
	const navigate = useNavigate();
	return (
		<StyledRow>
			<UserDisplay
				name={name}
				username={username}
				profileImage={profileImage}
			/>
			<UserStatus active={active} />
			<button onClick={() => navigate(`/user/${userId}`)}>Ver Detalles</button>
		</StyledRow>
	);
};

export default UserRow;

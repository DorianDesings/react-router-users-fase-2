import { StyledActive } from './styles';

const UserStatus = ({ active }) => {
	return (
		<StyledActive active={active}>
			{active ? 'Activo' : 'Inactivo'}
		</StyledActive>
	);
};

export default UserStatus;

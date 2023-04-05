import { Route, Routes } from 'react-router-dom';
import UserDetails from '../components/user-details/UserDetails';
import UsersList from '../components/users-list/UsersList';
import { USERS } from '../constants/users';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<UsersList initialUsers={USERS} />} />
			<Route path='/user/:userId' element={<UserDetails />} />
		</Routes>
	);
};

export default Router;

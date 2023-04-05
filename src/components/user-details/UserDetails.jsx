import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { USERS } from '../../constants/users';

const UserDetails = () => {
	const [tabActive, setTabActive] = useState(0);
	const { userId } = useParams();
	const navigate = useNavigate();
	const user = USERS.find(user => user.userId === userId);

	return (
		<div>
			<button onClick={() => navigate(`/`)}>Back To Users</button>
			<img src={user.profileImage} alt='profile image' />
			<h1>Hi! My name is {user.name}</h1>
			<p>I'm {user.age}</p>
			<p>My username is {user.username}</p>
			<p>You can contact me in {user.email}</p>
			<p>My Address is:</p>
			<p>{user.address.street}</p>
			<p>{user.address.suite}</p>
			<p>{user.address.city}</p>
			<p>{user.address.state}</p>
			<p>{user.address.zipCode}</p>
			<p>{user.address.country}</p>
			<p>You can call me at {user.phone}</p>
		</div>
	);
};

export default UserDetails;

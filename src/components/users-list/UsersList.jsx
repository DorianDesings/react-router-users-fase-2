import { useState } from 'react';
import UserListFilters from '../user-list-filters/UserListFilters';
import UsersListRows from '../users-list-rows/UsersListRows';

const UsersList = ({ initialUsers }) => {
	const [search, setSearch] = useState('');
	const [onlyActive, setOnlyActive] = useState(false);
	const [sortBy, setSortBy] = useState(0);

	let filteredUsers = filterActiveUsers(initialUsers, onlyActive);
	filteredUsers = filterUsersByName(filteredUsers, search);
	filteredUsers = sortUsers(filteredUsers, sortBy);

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Listado de usuarios</h1>
			<UserListFilters
				search={search}
				setSearch={setSearch}
				onlyActive={onlyActive}
				setOnlyActive={setOnlyActive}
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>
			<UsersListRows users={filteredUsers} />
		</div>
	);
};

const filterUsersByName = (users, search) => {
	if (!search) return [...users];

	const lowerCasedSearch = search.toLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().includes(lowerCasedSearch)
	);
};

const filterActiveUsers = (users, active) => {
	if (!active) return [...users];

	return users.filter(user => user.active);
};

const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users];
	switch (sortBy) {
		case 1: {
			return sortedUsers.sort((a, b) => {
				if (a.name < b.name) return -1;
				if (a.name > b.name) return 1;
				return 0;
			});
		}
		default:
			return sortedUsers;
	}
};

export default UsersList;

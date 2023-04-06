import { useState } from 'react';
import IconButton from '../icon-button/IconButton';
import UsersListRows from '../users-list-rows/UsersListRows';

const Pagination = ({ users }) => {
	const [page, setPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(4);

	const totalPages = Math.ceil(users.length / itemsPerPage);

	const renderedUsers = paginateUsers(users, page, itemsPerPage);

	const isFirstPage = page === 1;
	const isLastPage = page === totalPages;

	return (
		<>
			<select
				value={itemsPerPage}
				onChange={e => {
					setItemsPerPage(e.target.value);
					setPage(1);
				}}
			>
				<option value={4}>4</option>
				<option value={8}>8</option>
				<option value={16}>16</option>
			</select>

			<IconButton disabled={isFirstPage} onClick={() => setPage(page - 1)}>
				<img
					src={
						isFirstPage
							? '/assets/icon-left-disabled.svg'
							: '/assets/icon-left.svg'
					}
					alt=''
				/>
			</IconButton>
			<p>
				Página {page} de {totalPages}
			</p>
			<IconButton disabled={isLastPage} onClick={() => setPage(page + 1)}>
				<img
					src={
						isLastPage
							? '/assets/icon-right-disabled.svg'
							: '/assets/icon-right.svg'
					}
					alt=''
				/>
			</IconButton>
			<UsersListRows users={renderedUsers} />
		</>
	);
};

const paginateUsers = (users, page, itemsPerPage) => {
	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	return users.slice(startIndex, endIndex);
};

export default Pagination;

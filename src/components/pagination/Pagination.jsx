import { useState } from 'react';

const Pagination = ({ initialUsers }) => {
	const [page, setPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(4);

	const totalPages = Math.ceil(initialUsers.length / itemsPerPage);

	const renderedUsers = paginateUsers(filteredUsers, page, itemsPerPage);

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
		</>
	);
};

const paginateUsers = (users, page, itemsPerPage) => {
	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	return users.slice(startIndex, endIndex);
};

export default Pagination;

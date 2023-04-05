import InputSearch from '../input-search/InputSearch';
import { StyledFilters } from './styles';

const UserListFilters = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => {
	return (
		<StyledFilters>
			<InputSearch value={search} setSearch={setSearch} />
			<div>
				<label htmlFor='only-active'>Sólo activos</label>
				<input
					type='checkbox'
					id='only-active'
					checked={onlyActive}
					onChange={e => setOnlyActive(e.target.checked)}
				/>
			</div>
			<select value={sortBy} onChange={e => setSortBy(Number(e.target.value))}>
				<option value={0}>Por Defecto</option>
				<option value={1}>Por Nombre</option>
			</select>
		</StyledFilters>
	);
};

export default UserListFilters;

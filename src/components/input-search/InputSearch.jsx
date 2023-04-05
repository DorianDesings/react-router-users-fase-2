const InputSearch = ({ search, setSearch }) => (
	<div>
		<input
			type='text'
			value={search}
			onChange={e => setSearch(e.target.value)}
		/>
	</div>
);

export default InputSearch;

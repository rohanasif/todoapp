const Search = ({ handleSearchChange, handleSubmit }) => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search Items"
          onChange={handleSearchChange}
          onSubmit={handleSubmit}
        />
      </form>
    </>
  );
};

export default Search;

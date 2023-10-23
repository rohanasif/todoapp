const AddItem = ({ handleInputChange, addItem }) => {
  return (
    <>
      <form>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Add Item"
        />
        <button onClick={addItem}>+</button>
      </form>
    </>
  );
};

export default AddItem;

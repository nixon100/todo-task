function FilterButton(props) {


  
    return (
      // <button
      //   type="button"
      //   className="btn toggle-btn"
      //   aria-pressed={props.isPressed}
      //   onClick={() => props.setFilter(props.name)}
      // >
      //   <span className="visually-hidden">Show </span>
      //   <span>{props.name}</span>
      //   <span className="visually-hidden"> tasks</span>
      // </button>
 
  <select id="myDropdown"   onChange={e => props.setFilter(e.target.value)}>
            <option value="All" id="myDropdown1">All</option>
            <option value="Active" id="myDropdown1" >Active</option>
            <option value="Completed" id="myDropdown1"  >Completed</option>
  </select>

    )
  }
  
  export default FilterButton;
  




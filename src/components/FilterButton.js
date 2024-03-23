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
      <nav>

  <label for="touch"><span>Filter</span></label>               
  <input type="checkbox" id="touch"/> 

  {/* <ul class="slide">
    <li><a href="#">All</a></li> 
    <li><a href="#">Active</a></li>
    <li><a href="#">Completed</a></li>
  </ul> */}
  <select id="myDropdown" onclick="getInputValue()" >
            <option value="All" id="myDropdown1">All</option>
            <option value="Active" id="myDropdown1" >Active</option>
            <option value="Completed" id="myDropdown1"  >Completed</option>
  </select>

</nav> 
    );
  }
  
  export default FilterButton;
  




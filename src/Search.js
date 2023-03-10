function Search (props) { 
    return (
      
      <div>
   <label htmlFor="search"></label>
    <input 
     type="text"
     placeholder="Search here"
     onChange={props.changeHandle}
     value={props.searchInput}/>
     <label htmlFor="title"></label>
  <button onClick={props.handleSearch}> Search Here</button>
     </div>
     
    )
    
  } 
  
  export default Search 
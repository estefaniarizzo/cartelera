import './index.css'
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar(){
    return (
        <div class="search">
        <input type="text" class="search__input" placeholder="Type your text"/>
        <button class="search__button">
            <AiOutlineSearch className='icon-search'/>
        </button>
    </div>
    )
}
 export default SearchBar
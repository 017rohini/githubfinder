import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const { searchUsers, clearUsers, users } = githubContext;
    const { setAlert } = alertContext;

    const[text, setText] = useState('');
    
    const onChange = (e) =>{
        setText(e.target.value);
    };
    const onSubmit = (e) =>{
        e.preventDefault();
        if(text === '') {
            setAlert('Please, enter the search name!','light');
        } else {
            searchUsers(text);
            setText('');
        }
    };
    
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                name="text" 
                value={text}
                onChange={onChange}
                placeholder="search users"
            />
            <input 
                type="submit" 
                value="Search" 
                className="btn btn-dark btn-block" 
            />
            { users.length > 0 &&  (<button 
                className="btn btn-light btn-block"
                onClick={clearUsers}
            >Clear
            </button>)
            }          
        </form>
    )
}

export default Search;

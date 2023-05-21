import { useState } from 'react';
import axios from 'axios';
import './App.css'
import ShowData from './showData';

const Search = () => {
    const [userData, setData] = useState()
    const forSearch = async (event) => {
        // setValue(event.target.value)
        const responsedata = await axios.get(`https://jsonplaceholder.typicode.com/comments/${event.target.value}`);
        const j = responsedata.data
        setData(j)
    }
    console.log(userData)
    return (
        <>
            <div className="for-sort">
                <h1>Search</h1>
                <input placeholder='search by Id' type="search" onChange={forSearch} className="sear form-control" />
                {userData && <ShowData details={userData} />}
            </div>
        </>
    )
}
export default Search
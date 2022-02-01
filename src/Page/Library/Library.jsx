import React from 'react';
import './Library.scss'
import Layout from '../../Components/Layout';
import SearchIcon from '../../Assets/images/navImages/searchIcon.png'
import { Link } from 'react-router-dom';
import Codes from './Cards/Card';

function Library() {
  return (
      <Layout>
          <div className="library">
            <div className="search-bar">
                <input type="search" autoComplete='off' name="search"  />
                <img className='search-icon' src={SearchIcon} alt="" />
            </div>
            <div className="list-items">
                <p className='view-all'><Link to="/library/viewall">View All</Link></p>
                <Codes/>
                <Codes/>
                <Codes/>
                <Codes/>
            </div>
          </div>
      </Layout>
  )
}

export default Library;

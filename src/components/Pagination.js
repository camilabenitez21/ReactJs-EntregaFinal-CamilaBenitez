import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <nav>
      <ul className='pagination justify-content-center'>
        <li className='page-item'>
          <Link className='page-link' to='#'>Prev</Link>
        </li>
        <li className='page-item'>
          <Link className='page-link' to='#'>Next</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;

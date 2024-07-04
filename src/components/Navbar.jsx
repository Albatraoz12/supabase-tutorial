import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='nav-list'>
        <li className='list-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='list-item'>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li className='list-item'>
          <Link to='/create'>Create</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

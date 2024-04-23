import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <div className='nav'>
            <Link to='/'>
                <div>Welcome</div>
            </Link>
            <Link to='/login'>
                <div>Login</div>
            </Link>
        </div>
    )
}
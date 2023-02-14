
import { Link } from 'react-router-dom';

export default function CateShow(){

        return(
        <div className='cate-container'>
            <Link to='/quiz/1'>
                <p className='cate-name'>Sport</p>
            </Link>
            <Link to='/quiz/2'>
                <p className='cate-name'>Science</p>
            </Link>
            <Link to='/quiz/3'>
                <p className='cate-name'>Histoire/Geo</p>
            </Link>
            <Link to='/quiz/4'>
                <p className='cate-name'>Littérature</p>
            </Link>
        </div>
        )
}
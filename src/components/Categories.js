import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="submit" onClick={() => dispatch(checkStatus())}>Check Status</button>
    </div>
  );
}

export default Categories;

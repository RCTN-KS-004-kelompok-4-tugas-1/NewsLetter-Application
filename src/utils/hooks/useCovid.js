import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNewsPopular,
  fetchNewsRecent,
} from '../../store/reducer/newsSlice';

function useCovid() {
  const dispatch = useDispatch();
  const { newsList: popularNews } = useSelector((state) => state.news);
  const { newsRecent } = useSelector((state) => state.news);
  const { search } = useSelector((state) => state.search);
  useEffect(() => {
    dispatch(fetchNewsPopular('covid19'));
    dispatch(fetchNewsRecent('covid19'));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (search) {
      dispatch(fetchNewsPopular(search));
      dispatch(fetchNewsRecent(search));
    } else {
      dispatch(fetchNewsPopular('covid19'));
      dispatch(fetchNewsRecent('covid19'));
    }
    //eslint-disable-next-line
  }, [search]);
  return [popularNews, newsRecent, search];
}

export default useCovid;

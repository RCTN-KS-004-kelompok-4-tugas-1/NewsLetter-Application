import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNewsPopular,
  fetchNewsRecent,
} from '../../store/reducer/newsSlice';

function useHomepage() {
  const dispatch = useDispatch();
  const { newsList: popularNews } = useSelector((state) => state.news);
  const { newsRecent } = useSelector((state) => state.news);
  const { search } = useSelector((state) => state.search);
  useEffect(() => {
    dispatch(fetchNewsPopular('global'));
    dispatch(fetchNewsRecent('global'));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(fetchNewsPopular(search));
    dispatch(fetchNewsRecent(search));
    //eslint-disable-next-line
  }, [search]);
  return [popularNews, newsRecent];
}

export default useHomepage;

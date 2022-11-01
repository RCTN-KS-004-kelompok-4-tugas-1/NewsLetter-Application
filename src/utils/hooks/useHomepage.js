import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../store/reducer/searchSlice';

import { fetchNews } from '../../store/reducer/newsSlice';

function useHomepage() {
  const dispatch = useDispatch();
  const { newsList: popularNews } = useSelector((state) => state.news);
  const { newsRecent } = useSelector((state) => state.news);
  const { search } = useSelector((state) => state.search);
  useEffect(() => {
    dispatch(setSearch(''));
    dispatch(fetchNews({ query: 'global', jenis: 'popular' }));
    dispatch(fetchNews({ query: 'global', jenis: 'recent' }));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (search) {
      dispatch(fetchNews({ query: search, jenis: 'popular' }));
      dispatch(fetchNews({ query: search, jenis: 'recent' }));
    } else {
      dispatch(fetchNews({ query: 'global', jenis: 'popular' }));
      dispatch(fetchNews({ query: 'global', jenis: 'recent' }));
    }
    //eslint-disable-next-line
  }, [search]);
  return [popularNews, newsRecent];
}

export default useHomepage;

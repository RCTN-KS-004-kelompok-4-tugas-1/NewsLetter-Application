import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../store/reducer/newsSlice';
import { setSearch } from '../../store/reducer/searchSlice';

function useProgramming() {
  const dispatch = useDispatch();
  const {
    newsList: popularNews,
    newsRecent,
    isLoading,
  } = useSelector((state) => state.news);

  const { search } = useSelector((state) => state.search);
  useEffect(() => {
    dispatch(setSearch(''));
    dispatch(fetchNews({ query: 'Programming', jenis: 'popular' }));
    dispatch(fetchNews({ query: 'Programming', jenis: 'recent' }));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (search) {
      dispatch(fetchNews({ query: search, jenis: 'popular' }));
      dispatch(fetchNews({ query: search, jenis: 'recent' }));
    } else {
      dispatch(fetchNews({ query: 'Programming', jenis: 'popular' }));
      dispatch(fetchNews({ query: 'Programming', jenis: 'recent' }));
    }
    //eslint-disable-next-line
  }, [search]);
  return [popularNews, newsRecent, search, isLoading];
}

export default useProgramming;

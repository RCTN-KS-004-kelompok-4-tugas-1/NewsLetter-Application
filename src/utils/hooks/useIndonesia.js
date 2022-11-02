import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../store/reducer/searchSlice';

import {
  fetchIndonesiaPopular,
  fetchNews,
} from '../../store/reducer/newsSlice';

function useIndonesia() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.search);
  const {
    newsRecent,
    isLoading,
    newsList: popularNews,
  } = useSelector((state) => state.news);
  useEffect(() => {
    dispatch(setSearch(''));
    dispatch(fetchIndonesiaPopular('indonesia'));
    dispatch(fetchNews({ query: 'indonesia', jenis: 'recent' }));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(fetchIndonesiaPopular(search));
    //eslint-disable-next-line
  }, [search]);
  return [popularNews, newsRecent, isLoading];
}

export default useIndonesia;

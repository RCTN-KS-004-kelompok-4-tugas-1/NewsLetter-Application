import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchIndonesiaPopular,
  fetchNewsRecent,
} from '../../store/reducer/newsSlice';
function useIndonesia() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.search);
  const { newsList: popularNews } = useSelector((state) => state.news);
  const { newsRecent } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchIndonesiaPopular('indonesia'));
    dispatch(fetchNewsRecent('indonesia'));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(fetchIndonesiaPopular(search));
    //eslint-disable-next-line
  }, [search]);
  return [popularNews, newsRecent];
}

export default useIndonesia;

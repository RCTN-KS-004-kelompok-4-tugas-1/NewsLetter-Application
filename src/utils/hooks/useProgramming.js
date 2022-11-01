import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNewsPopular,
  fetchNewsRecent,
} from '../../store/reducer/newsSlice';

function useProgramming() {
  const dispatch = useDispatch();
  const { newsList: popularNews } = useSelector((state) => state.news);
  const { newsRecent } = useSelector((state) => state.news);
  const { search } = useSelector((state) => state.search);
  useEffect(() => {
    dispatch(fetchNewsPopular('Programming'));
    dispatch(fetchNewsRecent('Programming'));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (search) {
      dispatch(fetchNewsPopular(search));
      dispatch(fetchNewsRecent(search));
    } else {
      dispatch(fetchNewsPopular('Programming'));
      dispatch(fetchNewsRecent('Programming'));
    }
    //eslint-disable-next-line
  }, [search]);
  return [popularNews, newsRecent, search];
}

export default useProgramming;

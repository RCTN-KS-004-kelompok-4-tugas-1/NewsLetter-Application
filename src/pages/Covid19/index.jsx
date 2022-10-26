/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import CardPopular from '../../components/CardPopular';
import CardRecent from '../../components/CardRecent';
import LayoutSection from '../../components/LayoutSection';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';

import {
  fetchNewsPopular,
  fetchNewsRecent,
} from '../../store/reducer/newsSlice/newsSlice';

function Covid19() {
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
  return (
    <>
      <LayoutSection title="Popular News">
        {popularNews &&
          popularNews.map((item) => {
            return (
              <CardPopular
                key={item.id}
                data={{
                  img: item.urlToImage,
                  link: item.url,
                  category: search ? 'popular' : 'covid19',
                  title: item.title,
                  description: item.description,
                  time: moment(item.publishedAt).format('MMMM Do YYYY'),
                }}
              />
            );
          })}
        {popularNews.length === 0 && (
          <p>Search Not Found with the Search Keyword</p>
        )}
      </LayoutSection>
      <LayoutSection title="Recent News">
        {newsRecent &&
          newsRecent.map((item) => {
            return (
              <CardRecent
                key={item.id}
                data={{
                  img: item.urlToImage,
                  link: item.url,
                  category: search ? 'recent' : 'covid19',
                  title: item.title,
                  author: item.author,
                  time: moment(item.publishedAt).format('MMMM Do YYYY'),
                }}
              />
            );
          })}
        {newsRecent.length === 0 && (
          <p>Search Not Found with the search keyword</p>
        )}
      </LayoutSection>
    </>
  );
}

export default Covid19;

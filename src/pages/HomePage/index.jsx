/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect } from 'react';
import CardPopular from '../../components/CardPopular';
import CardRecent from '../../components/CardRecent';
import LayoutSection from '../../components/LayoutSection';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';
import {
  fetchNewsPopular,
  fetchNewsRecent,
} from '../../store/reducer/newsSlice';

function HomePage() {
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
  return (
    <>
      <LayoutSection title="Popular News">
        {popularNews &&
          popularNews.map((item) => {
            return (
              <Fragment key={item.url}>
                <CardPopular
                  data={{
                    img: item.urlToImage,
                    link: item.url,
                    category: 'popular',
                    title: item.title,
                    description: item.description,
                    time: moment(item.publishedAt).format('MMMM Do YYYY'),
                  }}
                />
              </Fragment>
            );
          })}
        {popularNews.length === 0 && (
          <p>Search Not Found with the Search Keyword</p>
        )}
      </LayoutSection>
      <LayoutSection title="Recent News" space="small">
        {newsRecent &&
          newsRecent.map((item) => {
            return (
              <Fragment key={item.url}>
                <CardRecent
                  data={{
                    img: item.urlToImage,
                    link: item.url,
                    category: 'recent',
                    title: item.title,
                    author: item.author,
                    time: moment(item.publishedAt).format('MMMM Do YYYY'),
                  }}
                />
              </Fragment>
            );
          })}
        {newsRecent.length === 0 && (
          <p>Search Not Found with the search keyword</p>
        )}
      </LayoutSection>
    </>
  );
}

export default HomePage;

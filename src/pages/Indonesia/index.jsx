/* eslint-disable no-unused-vars */
import React from 'react';
import { useIndonesia } from '../../utils/hooks';
import CardPopular from '../../components/CardPopular';
import CardRecent from '../../components/CardRecent';
import LayoutSection from '../../components/LayoutSection';
import moment from 'moment/moment';

function Indonesia() {
  const [popularNews, newsRecent, isLoading] = useIndonesia();
  return (
    <>
      <LayoutSection title="Popular News">
        {!isLoading &&
          popularNews &&
          popularNews.map((item) => {
            return (
              <CardPopular
                key={item.id}
                data={{
                  img: item.urlToImage,
                  link: item.url,
                  category: 'indonesia',
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
      <LayoutSection title="Recent News" space="small">
        {newsRecent &&
          newsRecent.map((item) => {
            return (
              <CardRecent
                key={item.id}
                data={{
                  img: item.urlToImage,
                  link: item.url,
                  category: 'indonesia',
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

export default Indonesia;

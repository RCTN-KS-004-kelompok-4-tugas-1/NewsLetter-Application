/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import { useHomepage } from '../../utils/hooks';
import CardPopular from '../../components/CardPopular';
import CardRecent from '../../components/CardRecent';
import LayoutSection from '../../components/LayoutSection';
import moment from 'moment/moment';

function HomePage() {
  const [popularNews, newsRecent, isLoading] = useHomepage();
  return (
    <>
      {isLoading ? (
        <LayoutSection title="Loading News..."></LayoutSection>
      ) : (
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
      )}
    </>
  );
}

export default HomePage;

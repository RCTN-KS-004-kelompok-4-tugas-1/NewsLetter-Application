import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CardRecent from '../../components/CardRecent';
import LayoutSection from '../../components/LayoutSection';

function Saved() {
  const newsList = useSelector((state) => state.saved.value);

  return (
    <LayoutSection title="Saved News" space="small">
      {newsList.map((news) => (
        <Fragment key={news.url}>
          <CardRecent data={news} />
        </Fragment>
      ))}
    </LayoutSection>
  );
}

export default Saved;

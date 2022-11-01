import React, { Fragment } from 'react';
import { useSaved } from '../../utils/hooks';
import CardRecent from '../../components/CardRecent';
import LayoutSection from '../../components/LayoutSection';

function Saved() {
  const [newsList] = useSaved();

  return (
    <LayoutSection title="Saved News" space="small">
      {!newsList.length && <p>no saved news here :(</p>}
      {!!newsList.length &&
        newsList.map((news) => (
          <Fragment key={news.url}>
            <CardRecent data={news} />
          </Fragment>
        ))}
    </LayoutSection>
  );
}

export default Saved;

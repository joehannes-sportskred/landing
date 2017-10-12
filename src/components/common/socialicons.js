import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

import { LINKS, COLOR } from '../../assets/data/enum';

const Component = () => (
  <section className="social sportskred icon link elements">
    {Object.getOwnPropertyNames(LINKS.SOCIAL).map((platform, k) => {
      return (
        <Button
          as="a"
          color={platform.toLowerCase()}
          icon={platform.toLowerCase()}
          circular
          key={platform.toLowerCase() + k.toString()}
          href={LINKS.SOCIAL[platform]}
          target="_blank"
          rel="noopener noreferrer"
        />
      );
    })}
  </section>
);

export default Component;

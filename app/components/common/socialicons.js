import React from 'react';
import { Icon } from 'semantic-ui-react';

import { LINKS, COLOR } from '../../assets/data/enum';

const Component = () => (
  <section className="social sportskred icon link elements">
    {Object.getOwnPropertyNames(LINKS.SOCIAL).map((platform, k) => {
      return (
        <a key={platform.toLowerCase() + k.toString()} href={LINKS.SOCIAL[platform]} target="_blank" rel="noopener noreferrer">
          <Icon key={platform.toLowerCase() + k.toString()} style={{ color: COLOR[platform] }} circular link size="large" name={platform.toLowerCase()} />
        </a>
      );
    })}
  </section>
);

export default Component;

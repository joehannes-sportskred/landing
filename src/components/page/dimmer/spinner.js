
import React from 'react';
import { Loader } from 'semantic-ui-react';

import { TEXT } from '../../../assets/data/enum';

const Page = () => <Loader size='massive'>{TEXT.DEFAULT.LOADING}</Loader>;

export default Page;

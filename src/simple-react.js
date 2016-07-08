import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import { PeopleTable } from './components';

render(
    <PeopleTable />,
    document.getElementById('people-table')
);
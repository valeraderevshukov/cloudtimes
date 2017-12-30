import { TOUCH } from './_utils';
import { BODY } from './_constants';
import './components/_form';
import './components/_scrollTo';
import './components/_field';
import svg4everybody from 'svg4everybody';

svg4everybody();
if (!TOUCH()) BODY.addClass('no-touch');

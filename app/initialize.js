import { Header } from './Header';
import { View } from 'curvature/base/View';

document.addEventListener('DOMContentLoaded', function() {
  const header = new Header;
  const home   = View.from(require('./home.html'));

  header.render(document.body);
  home.render(document.body);
});

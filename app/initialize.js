import { Header } from './Header';
import { Splash } from './Splash';
import { View } from 'curvature/base/View';

document.addEventListener('DOMContentLoaded', function() {
  const header = new Header;
  const home   = View.from(require('./home.html'));
  const footer = View.from(require('./footer.html'));

  const contact = View.from(require('./contact.html'));
 
  home.args.contactOffset = 0;
  home.args.contact = contact;

  home.contact = event => {
    window.scrollTo({top:0,left:0,behavior:'smooth'});
    console.log(321);
  };

  const splash = new Splash;

  header.render(document.body);
  home.render(document.body);
  footer.render(document.body);
  splash.render(document.body);
});

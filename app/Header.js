import { View } from 'curvature/base/View';

export class Header extends View
{
	template = require('./header.html');

	constructor(args,parent)
	{
		super(args,parent);

		this.args.menuOpen = false;

		this.height = 0;

		this.listen(
			document
			, 'scroll'
			, event => this.scrolled(event)
			, {passive: true}
		);

		this.listen(
			document
			, 'transitionend'
			, event => this.afterTransition(event)
		)
	}

	scrolled(event)
	{
		const {scrollTop} = document.body.parentElement;

		this.args.scrolled = scrollTop > 0;
	}

	toggleMenu(event)
	{
		const {scrollTop,clientWidth} = document.body.parentElement;
		
		this.args.menuOpen = !this.args.menuOpen;

		if(this.args.menuOpen)
		{
			
			document.body.parentElement.classList.add('menu-open');
			document.body.scrollTop = scrollTop;
			
			const {clientWidth:newClientWidth} = document.body.parentElement;

			document.body.parentElement.style.setProperty('--gutter', newClientWidth - clientWidth);
		}
		else
		{
			document.body.parentElement.classList.remove('menu-open');

			document.body.parentElement.style.setProperty('--gutter', 0);
		}
	}

	afterTransition(event)
	{
		this.height = this.tags.header.clientHeight;
	}
}
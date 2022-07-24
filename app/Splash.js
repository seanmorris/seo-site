import { View } from 'curvature/base/View';

export class Splash extends View
{
	constructor(args = {})
	{
		super(args);

		this.template   = `<div class = "splash [[animation]]" style = "
			pointer-events: [[pointerEvents]]
		">
			<div class = "center">SEAN<span class = "min">MORRIS</span><div class = "sm">SM</div></div>
			<div class = "center">SEAN<span class = "min">MORRIS</span><div class = "sm">SM</div></div>
			<div class = "center">SEAN<span class = "min">MORRIS</span><div class = "sm">SM</div></div>
		</div>`;

		let lastSplash = localStorage.getItem('cv-sm-last-splash');

		if(!args.force && (new Date).getTime() - lastSplash < 0)
		{
			this.args.animation = 'done';
			this.onTimeout(0, ()=>{
				this.remove()
			});
			return;
		}

		localStorage.setItem('cv-sm-last-splash', (new Date).getTime());

		this.args.left  = 0;
		this.args.right = 0;
		this.args.fade  = 1;

		this.args.frame = 0;
		this.args.fullFade = 1;

		this.args.pointerEvents = 'all';

		this.args.animation = 'hide';

		this.onTimeout(100, ()=>{
			this.args.animation = 'slide';
		});

		this.onTimeout(750, ()=>{
			this.args.animation = 'show';
		});

		this.onTimeout(2000, ()=>{
			this.args.animation = 'done';
		});

		this.onTimeout(2750, ()=>{
			this.remove()
		});
	}
}

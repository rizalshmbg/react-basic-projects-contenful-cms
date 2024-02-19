import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>Contentful CMS</h1>
					<p>
						Listicle nostrud drinking vinegar, affogato biodiesel squid irony
						blackbird spyplane bitters. Squid reprehenderit butcher migas.
						Pickled normcore mumblecore enim lo-fi vegan artisan keytar chambray
						in anim. Hexagon ullamco readymade four dollar toast iceland,
						slow-carb intelligentsia biodiesel tumblr chartreuse banjo occupy
						dolore.
					</p>
				</div>
				<div className='img-container'>
					<img src={heroImg} alt='woman and the browser' className='img' />
				</div>
			</div>
		</section>
	);
};

export default Hero;

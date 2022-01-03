import React from 'react';
import './homepage.styles.scss'

const Homepage = () => (
	<div className='homepage'>
		<div className='menu-container'>
			<div className='titles-container'>
				<div className='titles'>
					<h1 className='title'>Visuals</h1>
					<span className='subtitle'>Lets go!</span>
				</div>
			</div>
			<div className='titles-container'>
				<div className='titles'>
					<h1 className='title'>Websites</h1>
					<span className='subtitle'>Lets go!</span>
				</div>
			</div>
			<div className='titles-container'>
				<div className='titles'>
					<h1 className='title'>Videos</h1>
					<span className='subtitle'>Lets go!</span>
				</div>
			</div>
			<div className='titles-container'>
				<div className='titles'>
					<h1 className='title'>Hobbies</h1>
					<span className='subtitle'>Lets go!</span>
				</div>
			</div>
			<div className='titles-container'>
				<div className='titles'>
					<h1 className='title'>Contact</h1>
					<span className='subtitle'>Lets go!</span>
				</div>
			</div>
		</div>
	</div>
);

export default Homepage;
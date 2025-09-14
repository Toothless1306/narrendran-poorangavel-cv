import React from 'react';
import './index.css';

const Resume = () => {
	return (
		<div className='resume-wrapper'>
			<header className='resume-header'>
				<h1 className='resume-name'>Narrendran Poorangavel</h1>
				<p className='resume-title'>Full Stack Developer</p>
				<div className='contact-info'>
					<div className='contact-item'>
						<i className='fas fa-envelope'></i>
						<span>
							<a
								href='mailto:narrendranpoorangavel@gmail.com'
								target='_blank'
								rel='noopener noreferrer'
								className='contact-link'>
								narrendranpoorangavel@gmail.com
							</a>
						</span>
					</div>
					<div className='contact-item'>
						<i className='fas fa-phone'></i>
						<span>+91 7868843874</span>
					</div>
					<div className='contact-item'>
						<i className='fas fa-map-marker-alt'></i>
						<span>Dindigul, India</span>
					</div>
				</div>
			</header>

			<div className='resume-content'>
				<div className='content-left'>
					<section className='resume-section'>
						<h2 className='section-title'>Professional Summary</h2>
						<p>
							A brief summary of your professional background, career goals, and
							what makes you unique. Highlight your key strengths and what you
							bring to the table.
						</p>
					</section>

					<section className='resume-section'>
						<h2 className='section-title'>Work Experience</h2>
						{/* <div className='timeline-item'>
							<h3 className='item-title'>Zoho Developer</h3>
							<p className='item-subtitle'>
								<a
									href='https://www.elitetechpark.com'
									target='_blank'
									rel='noopener noreferrer'
									className='company-link'>
									Elite Tech Park
								</a>
							</p>
							<p className='item-date'>March 2024 - July 2024</p>
							<p>
								Lead development of web applications, manage a team of 5
								developers, and implement agile methodologies to improve
								productivity by 30%.
							</p>
						</div> */}

						<div className='timeline-item'>
							<h3 className='item-title'>Junior Engineer(Full Stack)</h3>
							<p className='item-subtitle'>
								<a
									href='https://www.gwayerp.com'
									target='_blank'
									rel='noopener noreferrer'
									className='company-link'>
									GwayERP Tech Solutions
								</a>
							</p>
							<p className='item-date'>December 2024 - September 2025</p>
							<p>
								Developed and maintained company's flagship product,
								collaborated with cross-functional teams, and reduced
								application load time by 40%.
							</p>
						</div>
					</section>

					<section className='resume-section'>
						<h2 className='section-title'>Education</h2>
						<div className='timeline-item'>
							<h3 className='item-title'>Bachelor of Information Technology</h3>
							<p className='item-subtitle'>
								<a
									href='https://karpagamtech.ac.in/'
									target='_blank'
									rel='noopener noreferrer'
									className='company-link'>
									Karpagam Institute of Technology
								</a>
							</p>
							<p className='item-date'>2020 - 2024</p>
							<p>
								Specialized in Software Engineering, graduated with honors.
								Relevant coursework: Algorithms, Data Structures, Web
								Development.
							</p>
						</div>
					</section>
				</div>

				<div className='content-right'>
					<section className='resume-section'>
						<h2 className='section-title'>Technical Skills</h2>
						<div className='skills-container'>
							<div className='skill'>JavaScript</div>
							<div className='skill'>React</div>
							<div className='skill'>Node.js</div>
							<div className='skill'>HTML/CSS</div>
							<div className='skill'>Python</div>
							<div className='skill'>SQL</div>
						</div>
					</section>

					<section className='resume-section'>
						<h2 className='section-title'>Languages</h2>
						<div className='timeline-item'>
							<h3 className='item-title'>Tamil</h3>
							<p>Native Proficiency</p>
						</div>
						<div className='timeline-item'>
							<h3 className='item-title'>English</h3>
						</div>
						<div className='timeline-item'>
							<h3 className='item-title'>Hindi</h3>
						</div>
					</section>

					<section className='resume-section'>
						<h2 className='section-title'>Certifications</h2>
						<div className='timeline-item'>
							<h3 className='item-title'>HTML-5 The Language</h3>
							<p className='item-date'>2020</p>
						</div>
						<div className='timeline-item'>
							<h3 className='item-title'>Network Engineering Cisco</h3>
							<p className='item-date'>2019</p>
						</div>
						<div className='timeline-item'>
							<h3 className='item-title'>Node.js - Infosys Springboard</h3>
							<p className='item-date'>2022</p>
						</div>
						<div className='timeline-item'>
							<h3 className='item-title'>Angular - Infosys Springboard</h3>
							<p className='item-date'>2022</p>
						</div>
						<div className='timeline-item'>
							<h3 className='item-title'>
								MongoDB Essentials - Infosys Springboard
							</h3>
							<p className='item-date'>2022</p>
						</div>
					</section>

					<section className='resume-section'>
						<h2 className='section-title'>Interests</h2>
						<div className='interests-container'>
							<div className='interest'>
								<i className='fas fa-book'></i>
								<p>Reading</p>
							</div>
							<div className='interest'>
								<i className='fas fa-hiking'></i>
								<p>Hiking</p>
							</div>
							<div className='interest'>
								<i className='fas fa-plane'></i>
								<p>Travel</p>
							</div>
							<div className='interest'>
								<i className='fas fa-music'></i>
								<p>Music</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Resume;

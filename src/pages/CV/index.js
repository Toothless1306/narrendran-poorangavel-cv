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
					<div className='contact-item'>
						<i className='fab fa-linkedin'></i>
						<span>
							<a
								href='https://linkedin.com/in/yourprofile'
								target='_blank'
								rel='noopener noreferrer'
								className='contact-link'>
								LinkedIn
							</a>
						</span>
					</div>
					<div className='contact-item'>
						<i className='fab fa-github'></i>
						<span>
							<a
								href='https://github.com/yourusername'
								target='_blank'
								rel='noopener noreferrer'
								className='contact-link'>
								GitHub
							</a>
						</span>
					</div>
				</div>
			</header>

			<div className='resume-content'>
				<div className='content-left'>
					<section className='resume-section'>
						<h2 className='section-title'>Professional Summary</h2>
						<div className='section-content'>
							<p>
								Junior Full Stack Developer with 9 months of experience in
								end-to-end application development using the MERN stack.
							</p>
							<ul>
								<li>
									Skilled in building efficient and logical web applications.
								</li>
								<li>
									Proficient in designing and implementing full-stack solutions.
								</li>
								<li>
									A collaborative team member focused on writing clean code and
									contributing to project success.
								</li>
							</ul>
						</div>
					</section>

					<section className='resume-section'>
						<h2 className='section-title'>Work Experience</h2>
						<div className='section-content'>
							<div className='timeline-item'>
								<div className='timeline-header'>
									<h3 className='item-title'>Junior Engineer (Full Stack)</h3>
									<p className='item-date'>December 2024 - September 2025</p>
								</div>
								<p className='item-subtitle'>
									<a
										href='https://www.gwayerp.com'
										target='_blank'
										rel='noopener noreferrer'
										className='company-link'>
										GwayERP Tech Solutions
									</a>
								</p>
								<ul>
									<li>
										Developed and maintained full-stack web applications for the
										company's ERP products using the MERN stack.
									</li>
									<li>
										Built RESTful APIs, designed database schemas, and created
										responsive user interfaces.
									</li>
									<li>
										Collaborated with a development team to deliver features in
										an Agile environment.
									</li>
									<li>
										Gained experience in end-to-end application development and
										logical problem-solving.
									</li>
								</ul>
							</div>
						</div>
					</section>

					<section className='resume-section'>
						<h2 className='section-title'>Education</h2>
						<div className='section-content'>
							<div className='timeline-item'>
								<div className='timeline-header'>
									<h3 className='item-title'>B.Tech, Information Technology</h3>
									<p className='item-date'>2020 - 2024</p>
								</div>
								<p className='item-subtitle'>
									<a
										href='https://karpagamtech.ac.in/'
										target='_blank'
										rel='noopener noreferrer'
										className='company-link'>
										Karpagam Institute of Technology
									</a>
								</p>
								<ul>
									<li>
										Specialized in Software Engineering. Graduated with honors.
									</li>
									<li>
										Relevant Coursework: Algorithms, Data Structures, Web
										Development.
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>

				<div className='content-right'>
					<section className='resume-section'>
						<h2 className='section-title'>Technical Skills</h2>
						<div className='section-content'>
							<div className='skills-container'>
								<div className='skill-category'>
									<h4>Frontend</h4>
									<div className='skill-group'>
										<div className='skill'>JavaScript</div>
										<div className='skill'>React</div>
										<div className='skill'>HTML/CSS</div>
									</div>
								</div>

								<div className='skill-category'>
									<h4>Backend</h4>
									<div className='skill-group'>
										<div className='skill'>Node.js</div>
										<div className='skill'>Python</div>
									</div>
								</div>

								<div className='skill-category'>
									<h4>Database</h4>
									<div className='skill-group'>
										<div className='skill'>SQL</div>
										<div className='skill'>MongoDB</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className='resume-section'>
						<h2 className='section-title'>Languages</h2>
						<div className='section-content'>
							<div className='language-item'>
								<span className='language-name'>Tamil</span>
								<span className='language-proficiency'>Native</span>
							</div>
							<div className='language-item'>
								<span className='language-name'>English</span>
								<span className='language-proficiency'>Professional</span>
							</div>
							<div className='language-item'>
								<span className='language-name'>Hindi</span>
								<span className='language-proficiency'>Basic</span>
							</div>
						</div>
					</section>

					<section className='resume-section'>
						<h2 className='section-title'>Certifications</h2>
						<div className='section-content'>
							<div className='certification-item'>
								<h4>HTML-5 The Language</h4>
								<span className='cert-date'>2022</span>
							</div>
							<div className='certification-item'>
								<h4>Network Engineering Cisco</h4>
								<span className='cert-date'>2022</span>
							</div>
							<div className='certification-item'>
								<h4>Node.js - Infosys Springboard</h4>
								<span className='cert-date'>2022</span>
							</div>
							<div className='certification-item'>
								<h4>Angular - Infosys Springboard</h4>
								<span className='cert-date'>2022</span>
							</div>
							<div className='certification-item'>
								<h4>MongoDB Essentials - Infosys Springboard</h4>
								<span className='cert-date'>2022</span>
							</div>
						</div>
					</section>

					<section className='resume-section'>
						<h2 className='section-title'>Interests</h2>
						<div className='section-content'>
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
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Resume;

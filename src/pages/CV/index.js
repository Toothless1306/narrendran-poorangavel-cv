import React from 'react';
import './index.css';
import NPLogo from '../../component/logo';

const Resume = () => {
	const openGoogleMaps = () => {
		window.open(
			'https://www.google.com/maps/place/Dindigul,+Tamil+Nadu/',
			'_blank'
		);
	};

	const skills = {
		Frontend: ['JavaScript', 'ReactJS', 'HTML5/CSS3'],
		Backend: ['Node.js', 'Python'],
		Database: [
			,
			// 'SQL'
			'MongoDB',
		],
	};

	const languages = [
		{ name: 'Tamil', proficiency: 'Native' },
		{ name: 'English', proficiency: 'Professional' },
		{ name: 'Hindi', proficiency: 'Basic' },
	];

	const certifications = [
		{ title: 'Node.js - Infosys Springboard', year: '2022' },
		{ title: 'MongoDB Essentials - Infosys Springboard', year: '2022' },
		{ title: 'Angular - Infosys Springboard', year: '2022' },
		{ title: 'HTML-5 The Language', year: '2020' },
		{ title: 'Network Engineering Cisco', year: '2019' },
	];

	return (
		<div className='resume-wrapper'>
			<header className='resume-header'>
				<div className='header-top'>
					<div className='header-name-title'>
						<h1 className='resume-name'>Narrendran Poorangavel</h1>
						<p className='resume-title'>Full Stack Developer</p>
					</div>
					{/* <NPLogo /> */}
				</div>
				<div className='contact-info'>
					{/* Email */}
					<div className='contact-item'>
						<i className='fas fa-envelope'></i>
						<span>
							<a
								// href='mailto:narrendranpoorangavel@gmail.com'
								target='_blank'
								rel='noopener noreferrer'
								className='contact-link'>
								narrendranpoorangavel@gmail.com
							</a>
						</span>
					</div>

					{/* Phone */}
					<div className='contact-item'>
						<i className='fas fa-phone-alt'></i>
						<span>+91 7868843874</span>
					</div>

					{/* Location */}
					{/* <div
						className='contact-item location-item'
						onClick={openGoogleMaps}>
						<i className='fas fa-map-marker-alt'></i>
						<span className='location-text'>Dindigul, India</span>
						<span className='location-hint'>(View on Maps)</span>
					</div> */}

					{/* LinkedIn */}
					<div className='contact-item'>
						<i className='fab fa-linkedin-in'></i>
						<span>
							<a
								// href='https://www.linkedin.com/in/narrendran-p-0400b621a'
								target='_blank'
								rel='noopener noreferrer'
								className='contact-link'>
								Narrendran Poorangavel
							</a>
						</span>
					</div>

					{/* GitHub */}
					<div className='contact-item'>
						<i className='fab fa-github'></i>
						<span>
							<a
								// href='https://github.com/Toothless1306'
								target='_blank'
								rel='noopener noreferrer'
								className='contact-link'>
								Narrendran Poorangavel
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
							<p></p>
							<ul>
								<li>
									Junior Full Stack Developer with 9 months of experience in
									end-to-end application development using the MERN stack.
								</li>
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
								<div className='item-subtitle'>
									<a
										href='https://www.gwayerp.com'
										target='_blank'
										rel='noopener noreferrer'
										className='company-link'></a>{' '}
									GwayERP Tech Solutions - Junior Engineer (Full Stack)
									<p className='item-date'>December 2024 - September 2025</p>
								</div>
								<p className='timeline-header'></p>
								<ul>
									<li>
										Developed and maintained full-stack web applications for the
										company's client-facing ERP products using the MERN stack.
									</li>
									<li>
										Built and deployed RESTful APIs, designed efficient database
										schemas, and developed user interfaces that improved data
										flow, reduced load times.
									</li>
									<li>
										Partnered with cross-functional teams in an Agile
										environment to successfully deliver new features.
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
								<p className='item-subtitle'>
									<a
										href='https://karpagamtech.ac.in/'
										target='_blank'
										rel='noopener noreferrer'
										className='company-link'></a>
									Karpagam Institute of Technology
								</p>
								<div className='timeline-header'>
									<h3 className='item-title'>
										B.Tech, Information Technology |
									</h3>
									<p className='item-date'>2020 - 2024</p>
									<h3 className='item-title'> CGPA:7.83/10</h3>
								</div>
								<ul>
									{/* <li>Specialized in Software Engineering.</li> */}
									{/* <li>Graduated 2024 </li> */}
									{/* <li>
										Relevant Coursework: Algorithms, Data Structures, Web
										Development.
									</li> */}
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
								{Object.entries(skills).map(([category, skillList]) => (
									<div
										className='skill-category'
										key={category}>
										<h4>{category}</h4>
										<div className='skill-group'>
											{skillList.map((skill) => (
												<div
													className='skill'
													key={skill}>
													{skill}
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</section>

					<section className='resume-section'>
						<h2 className='section-title'>Certifications</h2>
						<div className='section-content'>
							{certifications.map((cert) => (
								<div
									className='certification-item'
									key={cert.title}>
									<h4>{cert.title}</h4>
									{/* <span className='cert-date'>{cert.year}</span> */}
								</div>
							))}
						</div>
					</section>

					<section className='resume-section'>
						<h2 className='section-title'>Languages</h2>
						<div className='section-content'>
							{languages.map((lang) => (
								<div
									className='language-item'
									key={lang.name}>
									<span className='language-name'>{lang.name}</span>
									<span className='language-proficiency'>
										{lang.proficiency}
									</span>
								</div>
							))}
						</div>
					</section>

					{/* <section className='resume-section'>
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
					</section> */}
				</div>
			</div>
			<div className='declaration-section'>
				<h2 className='section-title'>Declaration</h2>
				<div className='section-content declaration-flex'>
					<div className='declaration-text'>
						<p>
							I hereby declare that the information provided above is true to
							the best of my knowledge and belief.
						</p>
						{/* <p>
								Place: Dindigul <br />
								Date:{' '}
								{new Date().toLocaleDateString('en-GB', {
									day: 'numeric',
									month: 'long',
									year: 'numeric',
								})}
							</p> */}
					</div>

					{/* <div className='declaration-signature'>
							<p>Signature</p>
							<div className='signature-line'></div>
						</div> */}
				</div>
			</div>
		</div>
	);
};

export default Resume;

const teams = {
  core: [
    {
      name: 'Chavi Behl',
      role: 'Founder & Chief Academic Officer',
      img: '../pdfImage/WhatsApp Image 2026-07-07 at 4.44.14 PM.jpeg',
      shortDesc:'Chavi Behl is dedicated to helping students discover their hidden talents and reach their full potential.',
      fullDesc:"Chavi Behl is a pioneer in the field of education, having dedicated her life to helping students reach their full potential. With over 20 years of experience as a senior school teacher, Vice Principal, and paper checker with both ISC and CBSE board exams, Chavi has honed her skills as an educator and developed a strong understanding of what it takes to help students succeed. Chavi's passion for teaching and guiding students began during her time as a postgraduate at The Delhi School of Economics. It was here that she realized that every student has the potential to excel if they are given the right tools and guidance. This realization sparked a lifelong mission for Chavi - to create a process that focuses on helping students discover their hidden talents and abilities. ",
      linkedin:'https://www.linkedin.com/in/chavi-behl-62027754/'
    },
    {
      name: 'Parvati',
      role: 'Manager, Peak Potentia',
      img: 'https://via.placeholder.com/300',
      shortDesc:'Parvati is your go-to person who keeps everything running smoothly. With prior experience in Public Relations and communications',
      fullDesc:'Parvati is your go-to person who keeps everything running smoothly. With prior experience in Public Relations and communications, she brings a strong ability to manage conversations, build relationships, and ensure clear and effective coordination across the team.If you’re looking to connect with Peak Potentia, ask a question, or understand the next steps, Parvati is usually the first person you’ll hear from. She coordinates communication between students, mentors, and the team, making sure everyone stays aligned and the process remains seamless, efficient, and approachable.',
      linkedin:'https://www.linkedin.com/in/parvati-nair-909b4417b/'

    }
  ],

  consultation: [
    {
      name: 'Ishani Behl',
      role: 'Academic Consultant',
      img: 'https://fr1ekw4xx.tribe.junction.express/uploads/2025/04-April/09-Wed/sm/ishani_6619393e75ee2_67f60f5287c1d.png',
      shortDesc: 'Ishani is an accomplished Instructional Designer and the CEO& Founder of a leading green tech startup Sustainr. ',
      fullDesc:'Ishani is an accomplished Instructional Designer and the CEO& Founder of a leading green tech startup Sustainr. With over three years of experience, Ishani has developed learning solutions for diverse organizations including AIA, UNDP.',
      linkedin:'https://www.linkedin.com/in/ishanibehl/'

    },
    {
      name: 'Sangeeta Relan',
      role: 'Academic Consultant',
      img: 'https://fr1ekw4xx.tribe.junction.express/uploads/2025/07-July/18-Fri/sm/WhatsApp-Image-2025-07-18-at-2.27.09-PM_687a0c8875ce5.jpeg',
      shortDesc: 'Ms. Sangeeta Relan is an Associate Professor in the Department of Commerce at Acharya Narendra Dev College, University of Delhi.',
      fullDesc:'Ms. Sangeeta Relan is an Associate Professor in the Department of Commerce at Acharya Narendra Dev College, University of Delhi. She has over 30 years of academic and research experience in Corporate Governance, Gender Diversity, Financial Management Economics and International Business.She is currently pursuing her PhD in Corporate Governance and Gender Diversity at the Delhi School of Economics, University of Delhi.She has published research papers in reputed journals and presented at various national and international conferences. Beyond academia, she is the founder of AboutHer, a platform dedicated to amplifying women voices through an e-magazine and podcast, fostering discussions on financial literacy, entrepreneurship, and professional growth.For her contributions to social impact, Ms. Relan has been recognized by the Delhi Management Council.',
            linkedin:'https://www.linkedin.com/in/sangeetarelan/'

    }
  ],

  tech: [
    {
      name: 'Pallavi Thakur',
      role: 'Technology Lead',
      img: 'https://fr1ekw4xx.tribe.junction.express/uploads/2025/05-May/13-Tue/sm/WhatsApp-Image-2025-05-13-at-12.07.42-PM_6822e8ec728cc.jpeg',
      shortDesc:'Building innovative learning platforms and digital tools for student success.',
      fullDesc:'Building innovative learning platforms and digital tools for student success.',
      linkedin:''

    },
    {
      name: 'Khushboo',
      role: 'Social Media Manager',
      img: '../pdfImage/khushi_img.jpeg',
      shortDesc: 'Creating engaging content and building our community of ambitious learners.',
      fullDesc:'Creating engaging content and building our community of ambitious learners.',
      linkedin:''

    }
  ]
}

const teamSections = document.getElementById('teamSections')

function renderTeams () {
  Object.keys(teams).forEach(category => {
    let title = ''
    if (category === 'core') title = 'Core Team'
    if (category === 'consultation') title = 'Consultation Team'
    if (category === 'tech') title = 'Tech & Social Media Team'

    let sectionHTML = `
      <h3 class="category-title ${category}-title mt-5">${title}</h3>
      <div class="row g-4 justify-content-center">
    `

    teams[category].forEach((member, index) => {
      sectionHTML += `
      <div class="col-md-4 col-sm-6 col-12  ${category}-title">
                        <div class="team-card">
                            <div class="team-image">
                                <div class="team-placeholder">
                                    <img src="${member.img}"
                                        alt="">
                                </div>
                            </div>
                            <h4 class="team-name">${member.name}</h4>
                            <p class="team-role">${member.role}</p>
                            <p class="team-bio">${member.shortDesc}</p>
                            <button class="btn-link read-more-btn"
                                onclick="openModal('${category}', ${index})"
                                data-bs-toggle="modal"
                                data-bs-target="#teamModal">
                                Read More
                            </button>
                           <div class="team-social mt-3 d-flex justify-content-center gap-3">
                        <div class="social-icon">
                        <a href="${member.linkedin}"
                    class="text-decoration-none " target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2">
                                        <path
                                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                        </path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                    </a></div>
                        <div class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2">
                                        <path
                                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                        </path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg></div>
                    </div>
                        </div>
                    </div>
             `
    })

    sectionHTML += `</div>`
    teamSections.innerHTML += sectionHTML
  })
}

renderTeams()

function openModal (category, index) {
  const member = teams[category][index]

  document.getElementById('modalName').innerText = member.name
  document.getElementById('modalRole').innerText = member.role
  document.getElementById('modalImg').src = member.img
  document.getElementById('modalDesc').innerText = member.fullDesc
}

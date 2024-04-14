interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Genetec Developer',
    description: `I collaborated on the Genetec™ Developer project, where we aimed to create a central hub for API and SDK documentation. My role involved optimizing site performance and scalability, utilizing Figma, JavaScript, HTML, and CSS. Through our efforts, we successfully enhanced the user experience, resulting in a successful launch and improved online presence.`,
    imgSrc: '/static/images/Genetec Developer.webp',
    href: 'https://developer.genetec.com/',
  },
  {
    title: 'MedClub',
    description: `I developed and maintained a Learning Management System (LMS) that utilized innovative technologies and teaching methodologies. Leveraging Next.js, TypeScript, and React Hooks. By converting Figma designs to front-end code with Styled Components and Chakra UI. Collaborating with backend developers, we integrated GraphQL, Node.js, and AWS.`,
    imgSrc: '/static/images/Med Club.webp',
    href: 'https://www.prime.med.club/auth/signin',
  },
  {
    title: 'Tambasa',
    description: `I collaborated on Tambasa's e-commerce store, leveraging React, TypeScript, HTML, CSS, TailwindCSS, and REST APIs. Together with a dedicated team, we enhanced the platform's scalability, responsiveness, and checkout experience, resulting in increased online sales and customer engagement.`,
    imgSrc: '/static/images/Tambasa.webp',
    href: 'https://loja.tambasa.com.br/home',
  },
  {
    title: 'Armazém Paraíba',
    description: `I collaborated with the team to build an e-commerce platform for Armézem Paraiba using ReactJS, JavaScript, HTML, CSS, and REST APIs. The project resulted in a responsive design, smooth checkout process, and high-performance standards. With improved user experience and increased customer engagement, the platform drove positive business outcomes.`,
    imgSrc: '/static/images/Armazem Paraiba.webp',
    href: 'https://www.armazemparaiba.com.br/',
  },
  {
    title: 'Sinsa',
    description: `I collaborated on Sinsa's responsive e-commerce platform, utilizing KnockoutJS, JavaScript, HTML, CSS, Less, Bootstrap, and REST APIs. By optimizing performance and scalability, we improved the customer experience and achieved a successful project outcome with an enhanced online presence.`,
    imgSrc: '/static/images/Sinsa.webp',
    href: 'https://www.sinsa.com.ni/',
  },
  {
    title: 'Rider',
    description: `I successfully collaborated with clients and team members to implement a responsive design and streamline the checkout process for a web application. Using ReactJS, Styled Components, and Less, I optimized performance and scalability, resulting in improved user experience and increased conversion rates.`,
    imgSrc: '/static/images/Rider.webp',
    href: 'https://www.rider.com.br/',
  },
]

export default projectsData

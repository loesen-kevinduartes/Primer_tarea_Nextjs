import Head from 'next/head';

import Favicons from '../components/Favicons';

import { iconGithub, iconLinkedIn } from '../components/icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kevin Duartes</title>
        <Favicons />
      </Head>
      <header className=''></header>
      <main className=''>
        <div className='max-w-5xl mx-auto pt-4 pb-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg'>
            <div className='px-4 py-5 sm:px-6 flex items-center justify-between'>
              <div className='flex items-center'>
                <img className='h-16 w-16 rounded-full mr-4 shadow-lg border border-white' src='/images/matiasKochlowski.jpg' alt='' width={300} height={300} />
                <h3 className='text-lg leading-none font-medium text-gray-900 dark:text-white dark:text-white'>Kevin Duartes</h3>
              </div>
            </div>
          </div>
          <div className='bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg mt-5'>
            <div className='px-4 pb-5 sm:p-0'>
              <dl className='divide-y divide-gray-200 dark:divide-black'>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-400'>E-mail</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>kevinduartes792@gmail.com</dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-400'>Profession</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>Desarrollador web full-stack</dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-400'>Experiencia</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                      Desarrollador freelance
                    </span>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>Bootcamp</span>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                      Desarrollador autodidacta
                    </span>
                  </dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-400'>Manejo de Tecnologias</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2 grid grid-cols-4'>
                    {techStack.map((tech) => (
                      <div key={tech.name} className='flex flex-col overflow-hidden'>
                        <div className='flex-1 py-1 mr-3'>
                          <img className='h-10' src={tech.logo} alt={tech.name} width={tech.width} height={tech.height} />
                        </div>
                      </div>
                    ))}
                  </dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-400'>Social</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
                    <div className='space-x-6 md:order-2 flex items-center'>
                      {social.map((item) => (
                        <a key={item.name} href={item.href} className='text-gray-400 hover:text-gray-700 dark:text-white dark:hover:text-gray-300'>
                          <span className='sr-only'>{item.name}</span>
                          <item.icon className='h-6 w-6' aria-hidden='true' />
                        </a>
                      ))}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

const techStack = [
  {
    name: 'Javascript',
    logo: '/images/tech-stack/javascript.svg',
    height: 48,
    width: 48,
    docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'NodeJS',
    logo: '/images/tech-stack/nodejs.svg',
    height: 48,
    width: 75,
    docs: 'https://nodejs.org/dist/latest-v14.x/docs/api/',
  },
  {
    name: 'expressJS',
    logo: '/images/tech-stack/expressjs.svg',
    height: 48,
    width: 100,
    docs: 'https://expressjs.com/en/4x/api.html',
  },
  {
    name: 'MongoDB',
    logo: '/images/tech-stack/mongodb.svg',
    height: 48,
    width: 150,
    docs: 'https://docs.mongodb.com/drivers/node/current/',
  },
  {
    name: 'React',
    logo: '/images/tech-stack/react.svg',
    height: 48,
    width: 55,
    docs: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    name: 'NextJS',
    logo: '/images/tech-stack/nextjs.svg',
    height: 48,
    width: 55,
    docs: 'https://nextjs.org/docs',
  },
];

const social = [
  {
    name: 'GitHub',
    href: 'https://github.com/KEVINDUARTES',
    icon: iconGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kevin-duartes-0ba593183/',
    icon: iconLinkedIn,
  },
];

/*export default function Home() {
  return (
    <div>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Kevin Duartes</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Developer Full-Stack .</p>
      </div>
      <div className="mt-5 border-t border-gray-200">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Kevin Nahuel Duartes</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Application for</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Developer full-stack</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">kevinduartes792@gmail.com</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Personal interests</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">advance my professional career</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Full-stack web developer, highly trained to solve problems and create solutions,
lover of challenges and continuous learning, I adapt to any work area, I am a good colleague,
collaborative and communicative. I easily learn any technology and tools that need to be implemented.
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">you can find me in</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">LinkdIn</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">Git Hub</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    select
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
*/

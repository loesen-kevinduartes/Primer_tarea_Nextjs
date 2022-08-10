// Package Imports

// Component Imports

// Config Imports

// Custom Hook Imports

// Helper Imports

// Icon Imports

// Exported Component
export default function Header() {
  return (
    <div className='bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg'>
      <div className='px-4 py-5 sm:px-6 flex items-center justify-between'>
        <div className='flex items-center'>
          <img
            className='h-16 w-16 rounded-full mr-4 shadow-lg border border-white'
            src='/images/kevinDuartes.jpg'
            alt='Kevin Duartes'
            width={300}
            height={300}
          />
          <h3 className='text-lg leading-none font-medium text-gray-900 dark:text-white dark:text-white'>
            Kevin Duartes
          </h3>
        </div>
      </div>
    </div>
  );
}

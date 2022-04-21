import { Link } from 'react-router-dom'

export const Aside = () => {
  return (
    <aside className='bg-slate-800 border-t shadow-md w-64 h-screen sticky top-12' aria-label='Sidebar'>
      <div className='overflow-y-auto py-4 px-3 bg-slate-800'>
        <ul className='space-y-2'>
          <li>
            <Link to='/dashboard' className='flex items-center p-3 text-base font-normal text-gray-100 rounded-lg hover:bg-violet-100 hover:text-violet-600'>
              <i className='gg-home-alt' /><span className='ml-3'>Regalos</span>
            </Link>
          </li>
          <li>
            <Link to='/users' className='flex items-center p-3 text-base font-normal text-gray-100 rounded-lg hover:bg-violet-100 hover:text-violet-600'>
              <i className='gg-user' /><span className='ml-3'>Usuarios</span>
            </Link>
          </li>
          <li>
            <Link to='/events' className='flex items-center p-3 text-base font-normal text-gray-100 rounded-lg hover:bg-violet-100 hover:text-violet-600'>
              <i className='gg-user' /><span className='ml-3'>Eventos</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

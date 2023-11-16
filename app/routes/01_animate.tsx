import { NavLink, Outlet } from '@remix-run/react'

export default function AnimateIndexPage() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="1"
            className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
          >
            Animate 1
          </NavLink>
        </li>

        <li>
          <NavLink
            to="2"
            className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
          >
            Animate 2
          </NavLink>
        </li>
      </ul>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}

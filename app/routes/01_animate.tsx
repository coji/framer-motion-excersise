import { Outlet } from '@remix-run/react'

export default function AnimateIndexPage() {
  return (
    <div>
      <div>animate01</div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

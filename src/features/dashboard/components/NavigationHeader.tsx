import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover'
import { SettingsIcon } from '@/components/Icons'
import LogoutButton from './LogoutButton'
import AccountButton from './AccountButton'

type RouteLink = {
  route: string
  name: string
  style: string
  title: string
}

const allRoutes: RouteLink[] = [
  {
    route: 'expenses',
    name: 'Consumos',
    style: '',
    title: 'Consumos | Mi inventario'
  },
  {
    route: 'incomes',
    name: 'Entradas',
    style: '',
    title: 'Ingresos | Mi inventario'
  },
  {
    route: 'products',
    name: 'Productos',
    style: '',
    title: 'Productos | Mi inventario'
  }
]

export default function NavigationHeader() {
  const [routes, setRoutes] = useState<RouteLink[]>(allRoutes)
  const location = useLocation()

  useEffect(() => {
    const getLinkStyle = (path: string) => {
      return location.pathname == `/dashboard/${path}`
        ? 'px-2 pb-1 border-b-2 border-sky-blue text-sky-blue font-bold'
        : 'px-2 pb-1 font-medium'
    }
    document.title =
      routes.find(({ route }) => `/dashboard/${route}` == location.pathname)
        ?.title ?? 'No Route'

    setRoutes((prevRoutes) =>
      prevRoutes.map(({ route, name, title }) => {
        return { route, name, style: getLinkStyle(route), title }
      })
    )
  }, [location])

  return (
    <>
      <header className="w-full pt-7 px-9 border-b-[1px] border-light-gray">
        <section className="mb-10 flex justify-between">
          <h1 className="text-deep-blue text-3xl font-bold">Dashboard</h1>

          <div className="flex justify-center">
            <Popover>
              <PopoverTrigger asChild>
                {/* <Button variant="primary">Open</Button> */}
                <button type="button" aria-label="open settings">
                  <SettingsIcon />
                </button>
              </PopoverTrigger>
              <PopoverContent className="p-0 mr-4">
                <div className="flex flex-col">
                  <AccountButton />
                  <div className="w-[90%] mx-auto border-b-[1px] border-light-gray" />
                  <LogoutButton />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </section>

        <nav className="flex gap-4">
          {routes.map(({ route, name, style }, index) => (
            <Link to={route} key={index} className={style}>
              {name}
            </Link>
          ))}
        </nav>
      </header>
    </>
  )
}

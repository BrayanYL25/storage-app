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
    name: 'Compras',
    style: '',
    title: 'Compras (Ingresos) | Mi inventario'
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
        ? 'w-full px-3 py-2 bg-[#9AD1D4] bg-opacity-60 border-r-2 border-sky-blue text-sky-blue font-bold'
        : 'w-full px-3 py-2 font-medium'
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
      <header className="h-screen col-start-1 col-span-3 overflow-hidden pt-7 border-b-[1px] flex flex-col border-r-[1px] border-light-gray">
        <h1 className="text-deep-blue px-3 pb-4 text-3xl font-bold">
          Inventario
        </h1>
        <nav className="flex flex-col">
          {routes.map(({ route, name, style }, index) => (
            <Link to={route} key={index} className={style}>
              {name}
            </Link>
          ))}
        </nav>

        <section className="mt-auto mb-4">
          <div className="flex justify-center">
            <Popover>
              <PopoverTrigger asChild>
                {/* <Button variant="primary">Open</Button> */}
                <button type="button" aria-label="open settings">
                  <SettingsIcon />
                </button>
              </PopoverTrigger>
              <PopoverContent className="p-0 ml-4">
                <div className="flex flex-col">
                  <AccountButton />
                  <div className="w-[90%] mx-auto border-b-[1px] border-light-gray" />
                  <LogoutButton />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </section>
      </header>
    </>
  )
}

import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

type RouteLink = {
  route: string
  name: string
  style: string
  title: string
}

const allRoutes: RouteLink[] = [
  {
    route: 'expenses',
    name: 'Salidas',
    style: '',
    title: 'Salidas | Mi inventario'
  },
  {
    route: 'incomes',
    name: 'Entradas',
    style: '',
    title: 'Ingresos | Mi inventario'
  },
  {
    route: 'settings',
    name: 'Ajustes',
    style: '',
    title: 'Ajustes | Mi inventario'
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
        <h1 className="text-deep-blue text-3xl font-bold mb-6">Dashboard</h1>

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

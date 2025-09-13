
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  SHOP = 'shop',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.SHOP]: '/shop',
}

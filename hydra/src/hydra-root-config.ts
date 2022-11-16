import { registerApplication, start, LifeCycles } from 'single-spa'

registerApplication({
  name: '@single-spa/welcome',
  app: () =>
    System.import<LifeCycles>(
      'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
    ),
  activeWhen: (location: Location) => location.pathname === '/',
})

registerApplication({
  name: '@hydra/react-single',
  app: () => System.import<LifeCycles>('@hydra/react-single'),
  activeWhen: (location: Location) => location.pathname === '/react-single',
})

registerApplication({
  name: '@hydra/react-multiples',
  app: () => System.import<LifeCycles>('@hydra/react-multiples'),
  activeWhen: ['/react-multiples'],
})

// registerApplication({
//   name: "@hydra/navbar",
//   app: () => System.import("@hydra/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
})

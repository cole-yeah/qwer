const routes = [
  {
    path: "/canvas",
    name: "Canvas",
    floor: 1,
    component: () => import("@/views/canvas")
  },
  {
    path: "/canvas/imageNode",
    name: "ImageNode",
    floor: 2,
    component: () => import("@/views/canvas/imageNode")
  },
  {
    path: "/canvas/triangle",
    name: "Triangle",
    floor: 2,
    component: () => import("@/views/canvas/triangle")
  },
  {
    path: "/canvas/player",
    name: "Player",
    floor: 2,
    component: () => import("@/views/canvas/player")
  },
  {
    path: "/canvas/meteors",
    name: "Meteors",
    floor: 2,
    component: () => import("@/views/canvas/meteors")
  },
  {
    path: "/canvas/clock",
    name: "Clock",
    floor: 2,
    component: () => import("@/views/canvas/clock")
  },
  {
    path: "/canvas/confetti",
    name: "Confetti",
    floor: 2,
    component: () => import("@/views/canvas/confetti")
  }
];

export default routes;

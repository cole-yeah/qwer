const routes = [
  {
    path: "/list",
    name: "List",
    floor: 1,
    component: () => import("@/views/list")
  },
  {
    path: "/canvas/virtual",
    name: "Virtual",
    floor: 2,
    component: () => import("@/views/list/virtual")
  }
];

export default routes;

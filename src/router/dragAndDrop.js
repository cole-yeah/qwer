const routes = [
  {
    path: "/dragAndDrop",
    name: "DragAndDrop",
    floor: 1,
    component: () => import("@/views/dragAndDrop")
  },
  {
    path: "/dragAndDrop/main",
    name: "Main",
    floor: 2,
    component: () => import("@/views/dragAndDrop/main")
  }
];

export default routes;

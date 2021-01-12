const routes = [
  {
    path: "/countDown",
    name: "CountDown",
    floor: 1,
    component: () => import("@/views/countDown")
  },
  {
    path: "/countDown/pageTurn",
    name: "PageTurn",
    floor: 2,
    component: () => import("@/views/countDown/pageTurn")
  }
];

export default routes;

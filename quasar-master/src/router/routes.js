const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        path: "form-handling",
        component: () => import("pages/FormHandling.vue"),
      },
    ],
  },
  {
    path: "/instagram",
    component: () => import("layouts/InstagramLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/instagram/ProfilePosts.vue"),
      },
      {
        path: "saved",
        component: () => import("src/pages/instagram/ProfileSaved.vue"),
      },
      {
        path: "tagged",
        component: () => import("src/pages/instagram/ProfileTagged.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "sign-in",
        component: () => import("src/pages/auth/SignIn.vue"),
      },
      {
        path: "sign-up",
        component: () => import("src/pages/auth/SignUp.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

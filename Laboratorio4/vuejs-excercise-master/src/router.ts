import Router, { RouteConfig } from 'vue-router';
import { LoginPageContainer } from 'pages/login';
import { RecipeListPageContainer } from 'pages/recipe/list';
import { EditRecipePageContainer } from 'pages/recipe/edit';

export const baseRoutes = {
  root: '/',
  login: '/login',
  recipe: '/recipe',
  add: '/recipe/recipe',
  edit: '/recipe/:id',
};

const isLogged = (): boolean => {
  return localStorage.getItem('token') ? true : false;
};

const handleRoutes = (): string =>
  isLogged() ? baseRoutes.recipe : baseRoutes.login;

export type BaseRoutes = typeof baseRoutes;

const routes: RouteConfig[] = [
  { path: baseRoutes.root, name: 'root', redirect: handleRoutes() },
  { path: baseRoutes.login, name: 'login', component: LoginPageContainer },
  {
    path: baseRoutes.recipe,
    name: 'recipe',
    component: RecipeListPageContainer,
    meta: { requiresAuth: true },
  },
  {
    path: baseRoutes.add,
    name: 'add-page',
    component: EditRecipePageContainer,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: baseRoutes.edit,
    name: 'edit-page',
    component: EditRecipePageContainer,
    props: true,
    meta: { requiresAuth: true },
  },
];

export const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((item) => item.meta.requiresAuth)) {
    if (!isLogged()) {
      next(baseRoutes.login);
    } else {
      next();
    }
  } else {
    next();
  }
});
// 1. Definir rutas públicas
// 2. Definir rutas que necesitan autorización
// 3. Saber si el usuario está autenticado

// 4. Retornar next("/login") si NO está autenticado o next() si SÍ está autenticado

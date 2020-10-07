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

export type BaseRoutes = typeof baseRoutes;

const routes: RouteConfig[] = [
  { path: baseRoutes.root, redirect: baseRoutes.login },
  { path: baseRoutes.login, component: LoginPageContainer },
  { path: baseRoutes.recipe, component: RecipeListPageContainer },
  { path: baseRoutes.add, component: EditRecipePageContainer, props: true },
  { path: baseRoutes.edit, component: EditRecipePageContainer, props: true },
];

export const router = new Router({
  routes,
});

const isLogged = ():boolean => {
  return localStorage.getItem('token') ? true : false;
};

// router.beforeEach((to, from, next) => {
//   console.log(isLogged());
//   if (to.name !== "baseRoutes.login" && !isLogged()) next({ name: baseRoutes.login })
//   else next()
// });
// 1. Definir rutas públicas
// 2. Definir rutas que necesitan autorización
// 3. Saber si el usuario está autenticado

// 4. Retornar next("/login") si NO está autenticado o next() si SÍ está autenticado

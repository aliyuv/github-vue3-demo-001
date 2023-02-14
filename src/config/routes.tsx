import { RouteRecordRaw } from "vue-router";
import { Welcome } from "../views/Welcome";
import { First } from "../components/Welcome/First";
import { Four } from "../components/Welcome/Four";
import { Second } from "../components/Welcome/Second";
import { Third } from "../components/Welcome/Third";
import { StartPage } from "../views/StartPage";
import { ItemPage } from "../views/ItemPage";
import { ItemList } from "../components/item/ItemList";
import { ItemCreate } from "../components/item/ItemCreate";
import { TagPage } from "../views/TagPage";
import { CreateTag } from "../components/tag/CreateTag";
import { EditTag } from "../components/tag/EditTag";

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      { path: '', redirect: '/welcome/1' },
      { path: '1', name: 'Welcome1', component: First },
      { path: '2', name: 'Welcome2', component: Second },
      { path: '3', name: 'Welcome3', component: Third },
      { path: '4', name: 'Welcome4', component: Four },
    ]
  },
  { path: '/start', component: StartPage },
  {
    path: '/items', component: ItemPage,
    children: [
      { path: '', component: ItemList },
      { path: 'create', component: ItemCreate },
    ]
  },
  {
    path: '/tags', component: TagPage,
    children: [
      { path: 'create', component: CreateTag },
      { path: ':id/edit', component: EditTag },
    ]
  }
]
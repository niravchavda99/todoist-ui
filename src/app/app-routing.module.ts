import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClosedTodosComponent} from "./closed-todos/closed-todos.component";
import {OpenTodosComponent} from "./open-todos/open-todos.component";

const routes: Routes = [
  {
    path: "closed",
    component: ClosedTodosComponent
  },
  {
    path: "open",
    component: OpenTodosComponent
  },
  {
    path: '',
    redirectTo: 'open',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HistoryComponent } from "./expenses/history/history.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "history",
    component: HistoryComponent
  },
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

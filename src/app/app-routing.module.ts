import { AnswerComponent } from "./pages/answer/answer.component";
import { BuilderComponent } from "./pages/builder/builder.component";
import { FormComponent } from "./pages/form/form.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "form/builder", pathMatch: "full" },
  {
    path: "form",
    component: FormComponent,
    children: [
      { path: "", redirectTo: "builder", pathMatch: "full" },
      { path: "builder", component: BuilderComponent },
      { path: "answer", component: AnswerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

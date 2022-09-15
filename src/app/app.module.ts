import { AnswerComponent } from "./pages/answer/answer.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormComponent } from "./pages/form/form.component";
import { BuilderComponent } from "./pages/builder/builder.component";
import { MatSliderModule } from "@angular/material/slider";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { ModalComponent } from "./components/modal/modal.component";
import { AnswerItemComponent } from "./components/answer-item/answer-item.component";
import { BuilderItemComponent } from "./components/builder-item/builder-item.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BuilderComponent,
    ModalComponent,
    AnswerItemComponent,
    BuilderItemComponent,
    AnswerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

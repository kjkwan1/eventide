import { NgModule } from "@angular/core";
import { NewsComponent } from "./components/news/news.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: NewsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class NewsRoutingModule {}
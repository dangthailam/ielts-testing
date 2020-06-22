import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestsComponent } from './tests/tests.component';
import { NewTestComponent } from './tests/new-test/new-test.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'tests',
        pathMatch: 'full'
    },
    {
        path: 'tests',
        loadChildren: () => import('./tests/tests.module').then(m => m.TestsModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

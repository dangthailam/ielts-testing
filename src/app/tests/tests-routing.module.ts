import { Routes, RouterModule } from '@angular/router';
import { TestsComponent } from './tests.component';
import { TestListComponent } from './test-list/test-list.component';
import { NewTestComponent } from './new-test/new-test.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '',
        component: TestsComponent,
        children: [
            {
                path: 'list',
                component: TestListComponent
            },
            {
                path: 'new',
                component: NewTestComponent
            },
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestsRoutingModule { }

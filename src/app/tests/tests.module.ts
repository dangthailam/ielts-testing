import { NgModule } from '@angular/core';
import { TestsComponent } from './tests.component';
import { NewTestComponent } from './new-test/new-test.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestsRoutingModule } from './tests-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [TestsRoutingModule, CommonModule],
    declarations: [TestsComponent, NewTestComponent, TestListComponent],
})
export class TestsModule { }

import { NgModule } from '@angular/core';
import { TestsComponent } from './tests.component';
import { NewTestComponent } from './new-test/new-test.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestsRoutingModule } from './tests-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [TestsRoutingModule, CommonModule, SharedModule, FontAwesomeModule, NgbModule],
    declarations: [TestsComponent, NewTestComponent, TestListComponent],
})
export class TestsModule { }

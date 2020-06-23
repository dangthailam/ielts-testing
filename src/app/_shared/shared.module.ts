import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FillInBlankComponent } from './components/fill-in-blank/fill-in-blank.component';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
    declarations: [
      MultipleChoiceComponent,
      CheckboxComponent,
      FillInBlankComponent
    ],
    exports: [
        MultipleChoiceComponent,
        CheckboxComponent,
        FillInBlankComponent
    ],
    imports: [
        CKEditorModule
    ],
    providers: [],
  })
  export class SharedModule { }
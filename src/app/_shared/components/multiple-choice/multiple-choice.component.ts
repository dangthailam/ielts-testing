import { Component, OnInit } from '@angular/core';
import * as InlineEditor from '@ckeditor/ckeditor5-build-inline';

@Component({
    selector: 'app-multiple-choice',
    templateUrl: './multiple-choice.component.html',
    styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent implements OnInit {
    public Editor = InlineEditor;
    constructor() { }

    ngOnInit(): void {
    }

}

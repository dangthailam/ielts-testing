import { Component, OnInit, Input } from '@angular/core';
import * as InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { Question } from '../../models/question.model';
import { QuestionType } from '../../models/questionType.enum';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-multiple-choice',
    templateUrl: './multiple-choice.component.html',
    styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent implements OnInit {
    @Input() multipleChoice: Question;
    @Input() orderNumber: number;


    faPlus = faPlus;
    faEdit = faEdit;
    Editor = InlineEditor;
    constructor() { }


    ngOnInit(): void {
        this.multipleChoice = this.multipleChoice || new Question(QuestionType.MultipleChoice);
        this.multipleChoice.answers = [
            "<p>Option 1</p>",
            "<p>Option 2</p>",
            "<p>Option 3</p>"
        ]
    }

}

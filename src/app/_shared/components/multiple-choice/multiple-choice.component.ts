import { Component, OnInit, Input } from '@angular/core';
import * as InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { Question } from '../../models/question.model';
import { QuestionType } from '../../models/questionType.enum';
import { faPlus, faEdit, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import { Answer } from '../../models/answer.model';

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
    faCheck = faCheck;
    faTrash = faTrash;
    Editor = InlineEditor;
    constructor() { }


    ngOnInit(): void {
        this.multipleChoice = this.multipleChoice || new Question(QuestionType.MultipleChoice);
        this.multipleChoice.answers = [
            new Answer('<p>Option 1</p>'),
            new Answer('<p>Option 2</p>'),
            new Answer('<p>Option 3</p>')
        ]
    }

    addNewAnswer(question: Question) {
        question.answers.push(new Answer(`Option ${question.answers.length + 1}`));
    }
}

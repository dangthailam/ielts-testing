import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question.model';
import { QuestionType } from '../../models/questionType.enum';
import { faPlus, faEdit, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import { Answer } from '../../models/answer.model';
import { QuestionComponent } from '../QuestionComponent';

@Component({
    selector: 'app-multiple-choice',
    templateUrl: './multiple-choice.component.html',
    styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent extends QuestionComponent implements OnInit {

    faPlus = faPlus;
    faEdit = faEdit;
    faCheck = faCheck;
    faTrash = faTrash;
    constructor() { super(QuestionType.MultipleChoice); }


    ngOnInit(): void {
        this.question.answers = [
            new Answer('<p>Option 1</p>'),
            new Answer('<p>Option 2</p>'),
            new Answer('<p>Option 3</p>')
        ]
    }

    addNewAnswer() {
        this.question.answers.push(new Answer(`Option ${this.question.answers.length + 1}`));
    }
}

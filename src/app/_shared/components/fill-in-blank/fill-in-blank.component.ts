import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../QuestionComponent';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Question } from '../../models/question.model';
import { QuestionType } from '../../models/questionType.enum';

@Component({
    selector: 'app-fill-in-blank',
    templateUrl: './fill-in-blank.component.html',
    styleUrls: ['./fill-in-blank.component.scss', '../multiple-choice/multiple-choice.component.scss']
})
export class FillInBlankComponent extends QuestionComponent implements OnInit {
    faPlus = faPlus;
    faTrash = faTrash;

    constructor() { super(QuestionType.FillInBlank); }

    ngOnInit(): void {

    }

    addBlankSpace() {
        this.question.body += ' [Blank] ';
        console.log(this.question.body);
    }

}

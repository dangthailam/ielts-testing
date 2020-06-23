import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/_shared/models/test.model';
import { Question } from 'src/app/_shared/models/question.model';
import { QuestionType } from 'src/app/_shared/models/questionType.enum';

@Component({
    selector: 'app-new-test',
    templateUrl: './new-test.component.html',
    styleUrls: ['./new-test.component.scss']
})
export class NewTestComponent implements OnInit {

    test: Test = new Test();
    QuestionType = QuestionType;

    ngOnInit(): void {
    }

    addQuestion(type: QuestionType) {
        this.test.questions.push(new Question(type));
    }

    constructor() { }
}

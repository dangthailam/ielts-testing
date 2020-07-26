import { Input } from '@angular/core';
import { Question } from '../models/question.model';
import * as InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { QuestionType } from '../models/questionType.enum';

export abstract class QuestionComponent {
    @Input() question: Question;
    @Input() orderNumber: number;

    Editor = InlineEditor;

    constructor(type: QuestionType) {
        this.question = new Question(type);
    }
}
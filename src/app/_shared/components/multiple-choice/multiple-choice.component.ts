import { Component, OnInit, Input } from '@angular/core';
import * as InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { Question } from '../../models/question.model';
import { QuestionType } from '../../models/questionType.enum';
import { faPlus, faEdit, faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';

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
    faBan = faBan;
    Editor = InlineEditor;
    onEdit = false;
    private oldMultipleChoice: Question;
    constructor() { }


    ngOnInit(): void {
        this.multipleChoice = this.multipleChoice || new Question(QuestionType.MultipleChoice);
        this.multipleChoice.answers = [
            '<p>Option 1</p>',
            '<p>Option 2</p>',
            '<p>Option 3</p>'
        ]
    }

    editQuestion() {
        this.oldMultipleChoice = _.cloneDeep(this.multipleChoice);
        this.onEdit = true;
    }

    cancel() {
        this.onEdit = false;
        this.multipleChoice = this.oldMultipleChoice;
        this.oldMultipleChoice = null;
    }

    approve() {
        this.onEdit = false;
        this.oldMultipleChoice = null;
    }
}

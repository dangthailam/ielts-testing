import { QuestionType } from './questionType.enum';
import { Answer } from './answer.model';

export class Question {
    id: number;
    type: QuestionType;
    body: string;
    point: number;
    answers: Answer[];
    isOnEdit: boolean;

    constructor(type: QuestionType) {
        this.type = type;
        this.body = 'Write your question';
        this.answers = [];
    }
}
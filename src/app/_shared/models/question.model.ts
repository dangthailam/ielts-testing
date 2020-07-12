import { QuestionType } from './questionType.enum';

export class Question {
    id: number;
    type: QuestionType;
    body: string;
    point: number;
    answers: string[];

    constructor(type: QuestionType) {
        this.type = type;
        this.body = "Write your question"
    }
}
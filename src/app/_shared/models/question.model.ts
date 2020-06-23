import { QuestionType } from './questionType.enum';

export class Question {
    id: number;
    type: QuestionType;
    body: string;
    point: number;
    answer: string[];

    constructor(type: QuestionType) {
        this.type = type;
    }
}
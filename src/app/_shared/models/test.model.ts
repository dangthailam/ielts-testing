import { Question } from './question.model';

export class Test {
    id: number;
    questions: Question[];
    duration: number;
    audioFile: string;

    constructor() {
        this.questions = [];
    }
}
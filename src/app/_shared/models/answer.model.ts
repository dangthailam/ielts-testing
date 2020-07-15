export class Answer {
    content: string;
    isRight: boolean;
    isOnEdit: boolean;

    constructor(content: string) {
        this.content = content;
    }
}
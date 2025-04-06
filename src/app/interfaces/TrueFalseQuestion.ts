export interface TrueFalseQuestion {
    id: number;
    question: string;
    imageUrl?: string;
    correctAnswer: boolean;
    explanationCorrect: string;
    explanationWrong: string;
}

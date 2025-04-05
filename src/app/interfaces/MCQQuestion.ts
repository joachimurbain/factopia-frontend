interface MCQQuestion {
    title: string;
    question: string;
    responses: string[];
    solution: number;  // Index of the correct answer in the responses array
    category: string[];
    image?: string;  // Optional image
  }

  export default MCQQuestion; 
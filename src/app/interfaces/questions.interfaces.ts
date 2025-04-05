interface TrueFalseQuestion {
    name: string;
    title: string;
    question: string;
    solution: boolean;
    category: string[];
    image?: string;  // Optional image
  }
  
  interface RealOrFakeImageQuestion {
    name: string;
    title: string;
    image: string;  // Required image
    solution: boolean;
    category: string[];
  }
  
  interface Card {
    title: string;
    question: string;
    solution: boolean;
    category: string[];
    image?: string;  // Optional image
  }
  
  interface MCQQuestion {
    title: string;
    question: string;
    responses: string[];
    solution: number;  // Index of the correct answer in the responses array
    category: string[];
    image?: string;  // Optional image
  }
  
  interface TikTokRealOrFakeQuestion {
    name: string;
    title: string;
    video: string;  // Required video URL (TikTok video)
    solution: boolean;
    category: string[];
  }
  
interface TikTokRealOrFakeQuestion {
    name: string;
    title: string;
    video: string;  // Required video URL (TikTok video)
    solution: boolean;
    category: string[];
  }

  export default TikTokRealOrFakeQuestion; 
interface TikTokRealOrFakeQuestion {
    name: string;
    title: string;
    video: string;  // Required video URL (TikTok video)
    video_caption: string;
    solution: boolean;
    explanation: string;
  }

  export default TikTokRealOrFakeQuestion; 
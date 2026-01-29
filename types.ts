
export interface Source {
  title: string;
  s3_key: string;
  chunk_id: string;
  text_content: string;
}

export interface AnswerResponse {
  question: string;
  answer: string;
  sources: Source[];
  followups: string[];
}

export interface QuestionRequest {
  query: string;
}

export enum AppState {
  HOME = 'HOME',
  NEWS = 'NEWS',
  PRO = 'PRO',
  RESULTS = 'RESULTS',
  ERROR = 'ERROR'
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
}

export interface ChatHistoryItem {
  id: string;
  title: string;
  timestamp: string;
}

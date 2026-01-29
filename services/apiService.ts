
import { AnswerResponse, QuestionRequest, Source } from '../types';

/**
 * Mock API service simulating AWS API Gateway + Lambda + ChromaDB.
 * Replace the implementation within 'askQuestion' to connect to a real backend.
 */
export const apiService = {
  askQuestion: async (request: QuestionRequest): Promise<AnswerResponse> => {
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock response data logic based on common Armenian legal queries
    const query = request.query.toLowerCase();
    
    if (query.includes('constitution')) {
      return {
        question: request.query,
        answer: "The Constitution of the Republic of Armenia, adopted in 1995 and amended in 2005 and 2015, establishes Armenia as a sovereign, democratic, social, and legal state. Power in the Republic of Armenia belongs to the people, who exercise it through free elections, referenda, and state and local self-government bodies.",
        sources: [
          {
            title: "Constitution of Armenia - Article 1",
            s3_key: "armenia-legal/constitution_2015_en.txt",
            chunk_id: "const_art_01_chunk",
            text_content: "Article 1. The Republic of Armenia is a sovereign, democratic, social state governed by the rule of law."
          }
        ],
        followups: [
          "What are the human rights protected?",
          "How can the constitution be amended?"
        ]
      };
    }

    if (query.includes('residency') || query.includes('migration')) {
      return {
        question: request.query,
        answer: "In Armenia, foreigners can obtain temporary, permanent, or special residency status. Temporary residency is typically granted for one year and can be extended. Grounds include work permits, entrepreneurship, or study. Permanent residency requires 3 years of living in Armenia and basic knowledge of the Armenian language or significant investment.",
        sources: [
          {
            title: "Law on Foreigners of the Republic of Armenia",
            s3_key: "armenia-legal/law_on_foreigners_ch4.txt",
            chunk_id: "foreigners_res_02_chunk",
            text_content: "Chapter 4, Article 15: Residence status in the Republic of Armenia shall be granted to a foreigner for a term of up to one year..."
          }
        ],
        followups: [
          "How to apply for a work permit?",
          "What is a Special Residency status?"
        ]
      };
    }

    // Default Fallback
    return {
      question: request.query,
      answer: "The Republic of Armenia provides a comprehensive legal framework for foreigners regarding migration, residency, and labor rights. Legal processes are primarily governed by the Law on Foreigners and the Labor Code. For specific legal advice, it is recommended to consult with the Migration and Citizenship Service or a licensed local attorney.",
      sources: [
        {
          title: "General Legal Framework - Armenia",
          s3_key: "armenia-legal/overview_legal_framework.txt",
          chunk_id: "general_ov_01",
          text_content: "This document provides an overview of the legal structures within the Republic of Armenia concerning international residents and constitutional protections."
        }
      ],
      followups: [
        "Explain the visa-free regime.",
        "How to register a business in Armenia?"
      ]
    };
  }
};

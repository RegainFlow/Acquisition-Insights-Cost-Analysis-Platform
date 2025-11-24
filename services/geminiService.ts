
import { GoogleGenAI, Type } from "@google/genai";
import { Vendor, LineItem } from "../types";

// Initialize the client
// NOTE: In a real production environment, calls should be proxied through a backend to protect the key.
// For this demo, we assume the key is in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const geminiService = {
  /**
   * Analyzes a vendor's risk profile based on their data.
   */
  analyzeVendorRisk: async (vendor: Vendor): Promise<string> => {
    try {
      const model = 'gemini-2.5-flash';
      const prompt = `
        Analyze the following vendor for acquisition risk.
        Vendor Name: ${vendor.name}
        Category: ${vendor.category}
        Risk Score (0-100, 100 is high risk): ${vendor.riskScore}
        Total Spend: $${vendor.totalSpend}
        Active Contracts: ${vendor.activeContracts}
        Last Audit: ${vendor.lastAuditDate}

        Provide a concise executive summary (max 150 words) of the risk profile. 
        Highlight any anomalies if the risk score is above 50 or if the audit date is older than 1 year.
        Suggest 2 actionable mitigation strategies.
      `;

      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          temperature: 0.4,
        }
      });

      return response.text || "Analysis unavailable.";
    } catch (error) {
      console.error("Gemini analysis failed:", error);
      return "AI Analysis currently unavailable. Please check API configuration.";
    }
  },

  /**
   * Reviews proposal line items for cost anomalies compared to market standards (simulated DPHSL).
   */
  reviewProposalCosts: async (items: LineItem[], vendorName: string): Promise<string> => {
    try {
      const model = 'gemini-2.5-flash';
      const itemsJson = JSON.stringify(items);
      
      const prompt = `
        You are an expert government acquisition cost analyst.
        Review the following line items for a proposal from vendor "${vendorName}".
        
        Line Items: ${itemsJson}

        Task:
        1. Identify any line items where the Unit Price seems unusually high for the Description.
        2. Calculate the total value.
        3. Provide a "Fair Reasonableness" determination statement.
        4. Return the output as a formatted HTML string (no markdown code blocks, just tags like <p>, <ul>, <li>, <strong>).
        
        Style the HTML to work on a dark background (avoid black text).
      `;

      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          temperature: 0.2,
        }
      });

      return response.text || "<p>Cost review unavailable.</p>";
    } catch (error) {
      console.error("Gemini cost review failed:", error);
      return "<p>Error generating cost review.</p>";
    }
  },

  /**
   * Generates a chat response for general acquisition insights.
   */
  askAcquisitionAssistant: async (query: string, contextData: string): Promise<string> => {
    try {
      const model = 'gemini-2.5-flash';
      const prompt = `
        Context Data (Acquisition Stats): ${contextData}
        
        User Query: ${query}
        
        Answer as an Acquisition Intelligence Assistant named "RegainAI".
        Be brief, professional, and data-driven.
      `;

       const response = await ai.models.generateContent({
        model,
        contents: prompt,
      });

      return response.text || "I couldn't process that request.";
    } catch (error) {
      console.error("Chat failed:", error);
      return "I am having trouble connecting to the intelligence network.";
    }
  }
};

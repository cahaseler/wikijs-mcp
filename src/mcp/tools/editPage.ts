import { z } from "zod";
import { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
import { WikiJSClient } from '../../wikijs/index.js';

export const PARAMETERS = {
  id: z.number().describe('The ID of the page to update'),
  title: z.string().describe('The new title of the page'),
  content: z.string().describe('The new content of the page'),
  description: z.string().describe('The new description of the page'),
  editor: z.string().default('markdown').describe('The editor type (e.g., markdown, visual)'),
  isPublished: z.boolean().default(true).describe('Whether the page is published'),
  isPrivate: z.boolean().default(false).describe('Whether the page is private'),
  locale: z.string().default('en').describe('The locale of the page'),
  tags: z.array(z.string()).default([]).describe('Tags for the page'),
  path: z.string().describe('The path of the page')
};

export const createTool = (wikiClient: WikiJSClient): ToolCallback<typeof PARAMETERS> => {
  return async (params) => {
    const result = await wikiClient.updatePage(params);
    
    if (!result) {
      return {
        content: [{
          type: "text",
          text: "Failed to update page"
        }]
      };
    }

    if (!result.responseResult?.succeeded) {
      return {
        content: [{
          type: "text",
          text: `Failed to update page: ${result.responseResult?.message || 'Unknown error'} (Error code: ${result.responseResult?.errorCode})`
        }]
      };
    }

    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          succeeded: true,
          message: result.responseResult?.message || 'Page updated successfully'
        }, null, 2)
      }]
    };
  };
};
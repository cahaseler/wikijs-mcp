import { WikiJSClient } from '../../wikijs/index.js';
import { z } from 'zod';
import { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';

export const PARAMETERS = {
  title: z.string().describe('The title of the page'),
  content: z.string().describe('The content of the page'),
  description: z.string().describe('The description of the page'),
  path: z.string().describe('The path of the page'),
  editor: z.string().default('markdown').describe('The editor type (e.g., markdown, visual)'),
  isPublished: z.boolean().default(true).describe('Whether the page is published'),
  isPrivate: z.boolean().default(false).describe('Whether the page is private'),
  locale: z.string().default('en').describe('The locale of the page'),
  tags: z.array(z.string()).default([]).describe('Tags for the page')
};

export const createTool = (wikiClient: WikiJSClient): ToolCallback<typeof PARAMETERS> => {
  return async (params) => {
    const result = await wikiClient.createPage({
      title: params.title,
      content: params.content,
      description: params.description,
      path: params.path,
      editor: params.editor,
      isPublished: params.isPublished,
      isPrivate: params.isPrivate,
      locale: params.locale,
      tags: params.tags
    });

    if (!result) {
      return {
        content: [{
          type: "text",
          text: "Failed to create page"
        }]
      };
    }

    if (!result.responseResult?.succeeded) {
      return {
        content: [{
          type: "text",
          text: `Failed to create page: ${result.responseResult?.message || 'Unknown error'} (Error code: ${result.responseResult?.errorCode})`
        }]
      };
    }

    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          succeeded: true,
          message: result.responseResult?.message || 'Page created successfully'
        }, null, 2)
      }]
    };
  };
};
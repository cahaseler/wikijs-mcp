import { GraphQLClient } from 'graphql-request';
import { getSdk, Sdk } from	'./generated/graphql.js';

export class WikiJSClient {
  private sdk: Sdk;

  constructor(endpoint: string, authToken: string) {
    const defaultHeaders = {
      Authorization: `Bearer ${authToken}`
    };

    const endpointWithGraphql = `${endpoint}/graphql`;
    
    const client = new GraphQLClient(endpointWithGraphql, {
      headers: defaultHeaders
    });

    this.sdk = getSdk(client);
  }


  async searchPages(query: string, path?: string, locale?: string) {
    const result = await this.sdk.SearchPages({ query, path, locale });
    return result.pages?.search || { results: [], suggestions: [], totalHits: 0 };
  }

  async getAllPages({limit, locale, tags}: {limit?: number, locale?: string, tags?: string[]} = {}) {
    const result = await this.sdk.GetAllPages({ limit, locale, tags });
    return result.pages?.list || [];
  }

  async getPageById(id: number) {
    const result = await this.sdk.GetPageById({ id });
    return result.pages?.single || null;
  }

  async getPageByPath(path: string, locale: string) {
    const result = await this.sdk.GetPageByPath({ path, locale });
    return result.pages?.singleByPath || null;
  }

  async createPage(params: {
    title: string;
    content: string;
    description: string;
    path: string;
    editor?: string;
    isPublished?: boolean;
    isPrivate?: boolean;
    locale?: string;
    tags?: string[];
  }) {
    const result = await this.sdk.CreatePage({
      title: params.title,
      content: params.content,
      description: params.description,
      path: params.path,
      editor: params.editor || 'markdown',
      isPublished: params.isPublished ?? true,
      isPrivate: params.isPrivate ?? false,
      locale: params.locale || 'en',
      tags: params.tags || []
    });
    
    return result.pages?.create || null;
  }

  async updatePage(params: {
    id: number;
    title: string;
    content: string;
    description: string;
    editor: string;
    isPublished: boolean;
    isPrivate: boolean;
    locale: string;
    tags: string[];
    path: string;
  }) {
    const result = await this.sdk.UpdatePage(params);
    return result.pages?.update || null;
  }
} 

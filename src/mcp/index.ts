import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createTool as createSearchPagesTool, PARAMETERS as SEARCH_PAGES_TOOL_PARAMETERS } from './tools/searchPage.js';
import { createTool as createGetPageByIdTool, PARAMETERS as GET_PAGE_BY_ID_TOOL_PARAMETERS } from './tools/getPageById.js';
import { createTool as createGetPageByPathTool, PARAMETERS as GET_PAGE_BY_PATH_TOOL_PARAMETERS } from './tools/getPageByPath.js';
import { createTool as createGetAllPagesTool, PARAMETERS as GET_ALL_PAGES_TOOL_PARAMETERS } from './tools/getAllPages.js';
import { createTool as createEditPageTool, PARAMETERS as EDIT_PAGE_TOOL_PARAMETERS } from './tools/editPage.js';
import { createTool as createCreatePageTool, PARAMETERS as CREATE_PAGE_TOOL_PARAMETERS } from './tools/createPage.js';
import { WikiJSClient } from '../wikijs';
import { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import { CONFIG } from '../config/index.js';

export class WikiJSMcpServer {
    private server: McpServer;
    private wikiClient: WikiJSClient;

    constructor(wikiClient: WikiJSClient, options: {
        version: string;
        instructions: string;
    }) {
        this.server = new McpServer({
            name: 'wikijs-mcp-server',
            version: options.version,
            instructions: options.instructions
        });

        this.wikiClient = wikiClient;
        this._registerTools();
    }

    private _registerTools() {
        this.server.tool(
            'search_pages',
            'Search for pages in WikiJS by query string',
            SEARCH_PAGES_TOOL_PARAMETERS,
            createSearchPagesTool(this.wikiClient));

        this.server.tool(
            'get_page_by_id',
            'Get a WikiJS page by its ID',
            GET_PAGE_BY_ID_TOOL_PARAMETERS,
            createGetPageByIdTool(this.wikiClient)
        );

        this.server.tool(   
            'get_page_by_path',
            'Get a WikiJS page by its path and locale',
            GET_PAGE_BY_PATH_TOOL_PARAMETERS,
            createGetPageByPathTool(this.wikiClient)
        );
        
        this.server.tool(
            'get_all_pages',
            'Get all pages in WikiJS',
            GET_ALL_PAGES_TOOL_PARAMETERS,
            createGetAllPagesTool(this.wikiClient)
        );

        if (CONFIG.ENABLE_EDIT) {
            this.server.tool(
                'create_page',
                'Create a new WikiJS page',
                CREATE_PAGE_TOOL_PARAMETERS,
                createCreatePageTool(this.wikiClient)
            );

            this.server.tool(
                'edit_page',
                'Edit a WikiJS page by its ID',
                EDIT_PAGE_TOOL_PARAMETERS,
                createEditPageTool(this.wikiClient)
            );
        }
    }
    
    public async connect(transport: Transport) {
        await this.server.connect(transport);
    }

    public async close() {
        await this.server.close();
    }   
    
}

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Build Commands
- `npm run build` - Compiles TypeScript to JavaScript and sets executable permissions
- `make build` - Alternative build command using Makefile
- `npm run codegen` - Generates TypeScript types from WikiJS GraphQL schema (requires WIKIJS_URL in .env)

### Development Commands
- `make run` - Builds and runs the MCP server
- `make clean` - Removes build artifacts
- `docker-compose up -d` - Starts a local WikiJS instance for testing
- `docker-compose down` - Stops the local WikiJS instance

## Architecture

This is a Model Context Protocol (MCP) server that bridges AI assistants with WikiJS instances. The architecture follows a three-layer pattern:

### Core Components

1. **MCP Layer** (`src/mcp/`)
   - `WikiJSMcpServer` class manages the MCP server lifecycle and tool registration
   - Tools are registered in `src/mcp/index.ts:27-54` with specific parameter schemas
   - Each tool is a separate module in `src/mcp/tools/`

2. **WikiJS Client Layer** (`src/wikijs/`)
   - `WikiJSClient` class wraps GraphQL operations
   - Uses generated GraphQL types from `src/wikijs/generated/graphql.ts`
   - GraphQL queries are defined in `src/wikijs/queries/pages.graphql`

3. **Entry Point** (`src/index.ts`)
   - Initializes WikiJS client with URL and API key from environment
   - Creates MCP server instance and connects via stdio transport
   - Handles fatal errors and process exit

### Tool Architecture

Each MCP tool follows a consistent pattern:
- Exports a `createTool` function that returns a handler
- Exports a `PARAMETERS` schema for validation
- Uses Zod for runtime parameter validation
- Returns structured responses with content arrays

### GraphQL Integration

The project uses GraphQL Code Generator to create typed SDK from WikiJS API:
- Schema is fetched from `${WIKIJS_URL}/graphql`
- Queries in `.graphql` files generate TypeScript types
- SDK provides type-safe methods for WikiJS operations

## Environment Configuration

Required environment variables (set in `.env`):
- `WIKIJS_URL` - Base URL of WikiJS instance (without /graphql)
- `WIKIJS_API_KEY` - Bearer token for WikiJS API authentication

## Type Safety

The project uses TypeScript with strict typing:
- Generated GraphQL types ensure API contract compliance
- Zod schemas validate MCP tool parameters at runtime
- All async operations are properly typed

## MCP Tools Available

- `search_pages` - Full-text search across WikiJS pages
- `get_page_by_id` - Retrieve specific page by numeric ID
- `get_page_by_path` - Retrieve page by path and locale
- `get_all_pages` - List all pages with optional filters
- `create_page` - Create a new WikiJS page (only available when WIKIJS_ENABLE_EDIT=true)
- `edit_page` - Edit a WikiJS page by ID (only available when WIKIJS_ENABLE_EDIT=true)
# WikiJS MCP Server

A Model Context Protocol (MCP) server that provides integration with WikiJS, allowing AI assistants to search and retrieve content from your WikiJS knowledge base.

## Overview

This MCP server enables AI assistants to interact with WikiJS instances by providing tools to:
- Search for pages by query string
- Retrieve pages by ID
- Retrieve pages by path and locale
- Get all pages from the wiki
- Edit pages (when enabled)

## Installation

### Using npx (recommended)
```bash
npx @cahaseler/wikijs-mcp
```

The binary will be available as `wikijs-mcp-edit` to avoid conflicts with the original package.

### From source
```bash
git clone https://github.com/cahaseler/wikijs-mcp.git
cd wikijs-mcp
npm install
npm run build
```

## Configuration

### Claude Code

#### Method 1: Using the CLI (Recommended)
```bash
# Add as a user-scoped server (available across all projects)
claude mcp add wikijs \
  -e WIKIJS_URL=https://your-wiki.example.com \
  -e WIKIJS_API_KEY=your-api-key \
  -- wikijs-mcp-edit

# Or with edit functionality enabled
claude mcp add wikijs \
  -e WIKIJS_URL=https://your-wiki.example.com \
  -e WIKIJS_API_KEY=your-api-key \
  -e WIKIJS_ENABLE_EDIT=true \
  -- wikijs-mcp-edit
```

#### Method 2: Project-scoped configuration
Create a `.mcp.json` file in your project root:
```json
{
  "mcpServers": {
    "wikijs": {
      "command": "npx",
      "args": ["wikijs-mcp-edit"],
      "env": {
        "WIKIJS_URL": "https://your-wiki.example.com",
        "WIKIJS_API_KEY": "your-api-key",
        "WIKIJS_ENABLE_EDIT": "false"
      }
    }
  }
}
```

### Cursor
Add to your Cursor settings (`.cursor/settings.json`):
```json
{
  "mcpServers": {
    "wikijs-mcp": {
      "command": "npx",
      "args": ["wikijs-mcp-edit"],
      "env": {
        "WIKIJS_URL": "https://your-wiki.example.com",
        "WIKIJS_API_KEY": "your-api-key",
        "WIKIJS_ENABLE_EDIT": "false"
      }
    }
  }
}
```

### Claude Desktop
Add to your Claude Desktop configuration:
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- Linux: `~/.config/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "wikijs-mcp": {
      "command": "npx",
      "args": ["wikijs-mcp-edit"],
      "env": {
        "WIKIJS_URL": "https://your-wiki.example.com",
        "WIKIJS_API_KEY": "your-api-key",
        "WIKIJS_ENABLE_EDIT": "false"
      }
    }
  }
}
```

## Getting a WikiJS API Key

1. Log into your WikiJS instance as an administrator
2. Go to **Administration** > **API Access**
3. Enable the API if not already enabled
4. Click **New API Key**
5. Give it a name (e.g., "MCP Server")
6. Select **Full Access** or configure specific permissions
7. Set an appropriate expiration date
8. Copy the generated key immediately (it won't be shown again)

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `WIKIJS_URL` | URL of your WikiJS instance | Yes | - |
| `WIKIJS_API_KEY` | WikiJS API key | Yes | - |
| `WIKIJS_ENABLE_EDIT` | Enable page editing functionality | No | false |

## Available Tools

Once configured, the following tools will be available:

- **search_pages** - Search for pages by query string
  - Parameters: `query` (required), `path` (optional), `locale` (optional)
  
- **get_page_by_id** - Retrieve a specific page by its ID
  - Parameters: `id` (required)
  
- **get_page_by_path** - Retrieve a page by its path and locale
  - Parameters: `path` (required), `locale` (required)
  
- **get_all_pages** - List all pages with optional filters
  - Parameters: `limit` (optional), `locale` (optional), `tags` (optional)
  
- **create_page** - Create a new WikiJS page (only when `WIKIJS_ENABLE_EDIT=true`)
  - Parameters: `title` (required), `content` (required), `description` (required), `path` (required), `editor` (optional), `isPublished` (optional), `isPrivate` (optional), `locale` (optional), `tags` (optional)
  
- **edit_page** - Edit a WikiJS page (only when `WIKIJS_ENABLE_EDIT=true`)
  - Parameters: `id` (required), `title`, `content`, `description`, `editor`, `isPublished`, `isPrivate`, `locale`, `tags`, `path`

## Development

### Prerequisites
- Node.js 18+
- Docker (for local WikiJS testing)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/cahaseler/wikijs-mcp.git
cd wikijs-mcp
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment template:
```bash
cp env.example .env
```

4. Edit `.env` with your WikiJS credentials

### Local WikiJS Instance

To run a local WikiJS instance for testing:

```bash
# Start WikiJS and PostgreSQL
docker-compose up -d

# The instance will be available at http://localhost:3000
# Follow the setup wizard to create an admin account
```

### Building

```bash
# Using npm
npm run build

# Using make
make build
```

### Testing the MCP Server

```bash
# Run the built server
node build/index.js

# Or use the make command
make run
```

## Security Considerations

- **API Key Storage**: Never commit your API key to version control
- **Edit Permissions**: The edit functionality is disabled by default. Only enable it if you trust the environment where the MCP server is running
- **Scope Permissions**: When creating the WikiJS API key, consider using the minimum required permissions instead of full access

## Troubleshooting

### "WIKIJS_URL and WIKIJS_API_KEY must be set"
Ensure your environment variables are properly configured. Check your `.env` file or the environment variables in your MCP client configuration.

### "Failed to update page: Unauthorized"
Your API key may be expired or lack the necessary permissions. Create a new API key with appropriate permissions.

### GraphQL errors during development
If you modify the GraphQL queries, regenerate the types:
```bash
npm run codegen
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
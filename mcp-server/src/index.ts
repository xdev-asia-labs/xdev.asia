#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerTools } from "./tools/index.js";
import { registerResources } from "./resources/index.js";
import { registerPrompts } from "./prompts/index.js";

const server = new McpServer({
  name: "xdev-knowledge-mcp",
  version: "2.0.0",
});

// Register all components
registerTools(server);
registerResources(server);
registerPrompts(server);

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);

import { ToolsHandler } from 'main/preload';

declare global {
  interface Window {
    tools: ToolsHandler;
  }
}

export {};

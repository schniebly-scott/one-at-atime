import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

const toolsHandler = {
  close: () => ipcRenderer.invoke('close'),
  mini: () => ipcRenderer.invoke('mini'),
}

contextBridge.exposeInMainWorld('tools', toolsHandler);

export type ToolsHandler = typeof toolsHandler;


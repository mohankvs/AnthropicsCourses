export interface NotebookCell {
  cell_type: 'code' | 'markdown';
  source: string[];
  outputs?: any[];
}

export interface NotebookContent {
  cells: NotebookCell[];
  metadata: any;
}

export const parseNotebookContent = (notebookJson: string): NotebookContent | null => {
  try {
    const notebook = JSON.parse(notebookJson);
    return {
      cells: notebook.cells || [],
      metadata: notebook.metadata || {}
    };
  } catch (error) {
    console.error('Error parsing notebook content:', error);
    return null;
  }
};

export const extractTextFromCell = (cell: NotebookCell): string => {
  if (Array.isArray(cell.source)) {
    return cell.source.join('');
  }
  return cell.source || '';
};

export const renderMarkdownCell = (cell: NotebookCell): string => {
  const text = extractTextFromCell(cell);
  // Basic markdown processing - in a real app, you'd use a proper markdown parser
  return text
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/`([^`]*)`/gim, '<code>$1</code>')
    .replace(/\n/gim, '<br>');
};

export const renderCodeCell = (cell: NotebookCell): string => {
  const code = extractTextFromCell(cell);
  return `<pre><code>${escapeHtml(code)}</code></pre>`;
};

export const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

export const extractImagesFromNotebook = (notebook: NotebookContent): string[] => {
  const images: string[] = [];
  
  notebook.cells.forEach(cell => {
    if (cell.outputs) {
      cell.outputs.forEach(output => {
        if (output.data && output.data['image/png']) {
          images.push(`data:image/png;base64,${output.data['image/png']}`);
        }
        if (output.data && output.data['image/jpeg']) {
          images.push(`data:image/jpeg;base64,${output.data['image/jpeg']}`);
        }
      });
    }
  });
  
  return images;
};

export const getNotebookSummary = (notebook: NotebookContent): { 
  cellCount: number; 
  codeCount: number; 
  markdownCount: number; 
  title?: string;
} => {
  const cellCount = notebook.cells.length;
  const codeCount = notebook.cells.filter(cell => cell.cell_type === 'code').length;
  const markdownCount = notebook.cells.filter(cell => cell.cell_type === 'markdown').length;
  
  // Try to extract title from first markdown cell
  let title: string | undefined;
  const firstMarkdownCell = notebook.cells.find(cell => cell.cell_type === 'markdown');
  if (firstMarkdownCell) {
    const text = extractTextFromCell(firstMarkdownCell);
    const titleMatch = text.match(/^#\s+(.+)$/m);
    if (titleMatch) {
      title = titleMatch[1].trim();
    }
  }
  
  return {
    cellCount,
    codeCount,
    markdownCount,
    title
  };
};
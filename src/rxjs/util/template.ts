interface TemplateOptions {
  title: string;
  docsUrl: string;
  marbleDiagramPath: string;
  importExample: string;
  usageExample: string;
}

export const template = function(options: TemplateOptions): string {
  return /*html*/`
    <div class="header">
      <h2>${options.title}</h2>
      (<a href="${options.docsUrl}" target="_blank">Docs</a>)
      <span><a href="#top" title="Back to top">Top</a></span>
    </div>

    <h3>How to import</h3>
    <pre><code class="language-js">${options.importExample}</code></pre>

    <h3>Example</h3>
<pre><code class="language-js">${options.usageExample}</code></pre>

    <h3>Marble diagram</h3>
    <details>
      <summary>Expand</summary>
      <img src="${options.marbleDiagramPath}" alt="Marble diagram" />
    </details>
  `;
};
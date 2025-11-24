
(function() {
    window.renderWorkflow = function(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Inject stylesheet if not present
        if (!document.getElementById('n8n-style')) {
            const link = document.createElement('link');
            link.id = 'n8n-style';
            link.rel = 'stylesheet';
            link.href = 'n8n-assets/index-BrPcZBSq.css';
            document.head.appendChild(link);
        }

        // Inject JS bundle
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'n8n-assets/index-TlvUXvTf.js';
        container.appendChild(script);

        // Create root element expected by the bundle
        const root = document.createElement('div');
        root.id = 'n8n-root';
        root.style.width = '100%';
        root.style.height = '100%';
        container.innerHTML = '';
        container.appendChild(root);
    };
})();

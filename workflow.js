(function () {
    const SCRIPT_SOURCES = [
        { key: 'React', src: 'https://unpkg.com/react@18/umd/react.production.min.js' },
        { key: 'ReactDOM', src: 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js' },
        { key: 'ReactFlow', src: 'https://unpkg.com/reactflow@11.10.1/dist/umd/reactflow.min.js' }
    ];

    const STYLE_ID = 'reactflow-cdn-style';
    const STYLE_HREF = 'https://unpkg.com/reactflow@11.10.1/dist/style.css';

    let loadPromise = null;
    const roots = new Map();

    function ensureStyle() {
        if (document.getElementById(STYLE_ID)) return;
        const link = document.createElement('link');
        link.id = STYLE_ID;
        link.rel = 'stylesheet';
        link.href = STYLE_HREF;
        document.head.appendChild(link);
    }

    function loadScriptSequentially(index = 0) {
        if (index >= SCRIPT_SOURCES.length) return Promise.resolve();
        const { key, src } = SCRIPT_SOURCES[index];

        if (window[key]) {
            return loadScriptSequentially(index + 1);
        }

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.crossOrigin = 'anonymous';
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load ${key} from ${src}`));
            document.head.appendChild(script);
        }).then(() => loadScriptSequentially(index + 1));
    }

    function loadReactFlow() {
        if (window.React && window.ReactDOM && window.ReactFlow) {
            return Promise.resolve();
        }
        if (!loadPromise) {
            ensureStyle();
            loadPromise = loadScriptSequentially();
        }
        return loadPromise;
    }

    function createWorkflowApp() {
        const React = window.React;
        const ReactDOM = window.ReactDOM;
        const ReactFlow = window.ReactFlow;

        const {
            ReactFlowProvider,
            Background,
            Controls,
            addEdge,
            MarkerType,
            useNodesState,
            useEdgesState,
        } = ReactFlow;

        const ReactFlowComponent = ReactFlow.default || ReactFlow.ReactFlow;
        const { useCallback } = React;

        const initialNodes = [
            {
                id: '1',
                type: 'input',
                data: { label: 'New Lead (HubSpot)' },
                position: { x: 0, y: 0 },
            },
            {
                id: '2',
                data: { label: 'Enrichment Agent (Web Scraper)' },
                position: { x: 0, y: 120 },
            },
            {
                id: '3',
                data: { label: 'Draft Outreach (GPT-4)' },
                position: { x: 0, y: 240 },
            },
            {
                id: '4',
                data: { label: 'Human Approval (Slack)' },
                position: { x: 0, y: 360 },
            },
            {
                id: '5',
                data: { label: 'Send Email (Gmail)' },
                position: { x: -150, y: 480 },
            },
            {
                id: '6',
                data: { label: 'Update CRM (HubSpot)' },
                position: { x: 150, y: 480 },
            },
        ];

        const nodeStyle = {
            background: '#fff',
            border: '1px solid rgba(20, 51, 166, 0.2)',
            borderRadius: 10,
            padding: 12,
            width: 220,
            fontSize: 12,
            fontWeight: 600,
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        };

        initialNodes.forEach(node => { node.style = nodeStyle; node.sourcePosition = 'bottom'; node.targetPosition = 'top'; });

        const initialEdges = [
            { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
            { id: 'e2-3', source: '2', target: '3', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
            { id: 'e3-4', source: '3', target: '4', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
            { id: 'e4-5', source: '4', target: '5', label: 'Approved', markerEnd: { type: MarkerType.ArrowClosed }, style: { stroke: '#2D6A4F' } },
            { id: 'e4-6', source: '4', target: '6', label: 'Approved', markerEnd: { type: MarkerType.ArrowClosed }, style: { stroke: '#2D6A4F' } },
        ];

        function WorkflowCanvas() {
            const [nodes, , onNodesChange] = useNodesState(initialNodes);
            const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

            const onConnect = useCallback(
                (params) => setEdges((eds) => addEdge({ ...params, markerEnd: { type: MarkerType.ArrowClosed } }, eds)),
                [setEdges]
            );

            return React.createElement(
                'div',
                { style: { width: '100%', height: '100%' } },
                React.createElement(
                    ReactFlowComponent,
                    {
                        nodes,
                        edges,
                        onNodesChange,
                        onEdgesChange,
                        onConnect,
                        fitView: true,
                        panOnScroll: true,
                        zoomOnScroll: false,
                        attributionPosition: "bottom-right"
                    },
                    React.createElement(Background, { color: "#E5E5E5", gap: 24 }),
                    React.createElement(Controls, null)
                )
            );
        }

        return function WorkflowApp() {
            return React.createElement(
                ReactFlowProvider,
                null,
                React.createElement(WorkflowCanvas)
            );
        };
    }

    window.renderWorkflow = function renderWorkflow(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        loadReactFlow()
            .then(() => {
                const ReactDOM = window.ReactDOM;
                const WorkflowApp = createWorkflowApp();

                if (roots.has(containerId)) {
                    roots.get(containerId).unmount();
                }

                const root = ReactDOM.createRoot(container);
                root.render(window.React.createElement(WorkflowApp));
                roots.set(containerId, root);
            })
            .catch((err) => {
                console.error(err);
                container.innerHTML = `<div style="color: red; padding: 20px; text-align: center;">${err.message}</div>`;
            });
    };
})();

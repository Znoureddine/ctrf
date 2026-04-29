// Reveal.js initialization
Reveal.initialize({
    width: 1800,
    height: 1100,
    hash: true,
    controls: true,
    progress: true,
    center: false,
    slideNumber: 'c/t',
    transition: 'slide',
    backgroundTransition: 'fade',
    margin: 0.1,
    minScale: 0.2,
    maxScale: 2.0,
    fragments: false,
    keyboard: true,
    touch: true,
    help: false,
    hideAddressBar: true,
    autoAnimateEasing: 'ease-out',
    autoAnimateDuration: 0.8,
    autoAnimateUnmatched: false
});

let currentLang = 'fr';
let x6ZoneMap = null;
let x6Roadmap = null;
let x6ReportRoadmap = null;

// Multi-language context
const i18nNodes = {
    fr: {
        // Zone Roadmap
        start: 'Début',
        create: 'Création de la DS',
        submission: 'Soumission de la DS',
        accuse: 'Envoi d\'accusé',
        assign: 'Assignement\nde la DS',
        process: 'Traitement\nde la DS',
        decision_ds: 'Qualification',
        opt_archive: 'Archivage',
        opt_process: 'Traitement',
        archive_step: 'Archivage pour\nrecoupements',
        feedback_ds: 'Feedback à\nl\'assujetti',
        feedback_ds_1: 'Feedback à\nl\'assujetti',
        feedback_ds_2: 'Feedback à\nl\'assujetti',
        report: 'Rédaction\nd’un rapport',
        prioritization: 'Priorisation de la DS',
        evaluation: 'Évaluation',
        diffusion: 'Archivage ou\ndiffusion du rapport',
        end: 'Fin',
        oui: 'Oui',
        non: 'Non',
        // Actors
        act_assujetti: 'Assujetti',
        act_systeme: 'Système',
        act_president: 'Président',
        act_pres_snr: 'Président /\nAnalyste Senior',
        act_analyste: 'Analyste J / S',
        act_pres_conseil: 'Président du Conseil',
        act_analyste_jr: 'Analyste Junior',
        act_analyste_snr: 'Analyste Senior',
        act_autorite: 'Autorité',

        // Roadmap Actor Nodes (Slide 8)
        submission_actor: 'Assujetti',
        prioritization_actor: 'Système',
        accuse_actor: 'Président',
        assign_actor: 'Président /\nAnalyste Senior',
        evaluation_actor: 'Analyste J / S',
        archive_step_actor: 'Analyste J / S',
        feedback_ds_1_actor: 'Analyste J / S',
        process_actor: 'Analyste J / S',
        feedback_ds_2_actor: 'Analyste J / S',
        report_actor: 'Analyste J / S',

        // Report Roadmap
        r_start: 'Début',
        r_draft: 'Rédaction du\nrapport',
        r_submit: 'Soumission',
        r_val: 'Validation',
        r_comite: 'Validation par\nle Conseil',
        r_dif: 'Diffusion aux\nAutorités',
        r_cons: 'Consultation\ndu rapport',
        r_feed: 'Envoi de\nfeedback',
        r_end: 'Fin',

        // Zone Map
        zone_public_title: 'Zone Grand Public',
        zone_restricted_title: 'Zone Publique Restreinte',
        zone_private_title: 'Zone Privée CTRF',
        internet_access: 'Accès Internet\n(Ouvert)',
        web_filter: 'Filtrage Web\n(IP Restreintes)',
        vpn_tunnel: 'Tunnel VPN\n+ Filtrage Web',
        epnfd_label: 'EPNFD',
        bank_label: 'Institutions Financières',
        auth_label: 'Autorités Externes',
        staff_label: 'Utilisateurs CTRF',
        ai_engine: 'Appel API Externe',
        database: 'Bases de données'
    },
    en: {
        // Zone Roadmap
        start: 'Start',
        create: 'STR Creation',
        submission: 'STR Submission',
        accuse: 'Sending ACK',
        assign: 'STR\nAssignment',
        process: 'STR\nProcessing',
        decision_ds: 'Qualification',
        opt_archive: 'Archiving',
        opt_process: 'Processing',
        archive_step: 'Archiving for\ncross-checking',
        feedback_ds: 'Feedback to\nReporting Entity',
        feedback_ds_1: 'Feedback to\nReporting Entity',
        feedback_ds_2: 'Feedback to\nReporting Entity',
        report: 'Intelligence\nReporting',
        prioritization: 'STR Prioritization',
        evaluation: 'Evaluation',
        diffusion: 'Archiving or\nDissemination',
        end: 'End',
        oui: 'Yes',
        non: 'No',
        // Actors
        act_assujetti: 'Subject Entity',
        act_systeme: 'System',
        act_president: 'President',
        act_pres_snr: 'President /\nSenior Analyst',
        act_analyste: 'Analyst (S/J)',
        act_pres_conseil: 'Board President',
        act_analyste_jr: 'Junior Analyst',
        act_analyste_snr: 'Senior Analyst',
        act_autorite: 'Authority',

        // Roadmap Actor Nodes (Slide 8)
        submission_actor: 'Subject Entity',
        prioritization_actor: 'System',
        accuse_actor: 'President',
        assign_actor: 'President /\nSenior Analyst',
        evaluation_actor: 'Analyst (S/J)',
        archive_step_actor: 'Analyst (S/J)',
        feedback_ds_1_actor: 'Analyst (S/J)',
        process_actor: 'Analyst (S/J)',
        feedback_ds_2_actor: 'Analyst (S/J)',
        report_actor: 'Analyst (S/J)',

        // Report Roadmap
        r_start: 'Start',
        r_draft: 'Report\nDrafting',
        r_submit: 'Submission',
        r_val: 'Validation',
        r_comite: 'Board\nValidation',
        r_dif: 'Diffusion to\nAuthorities',
        r_cons: 'Report\nConsultation',
        r_feed: 'Sending\nFeedback',
        r_end: 'End',

        // Zone Map
        zone_public_title: 'Grand Public Zone',
        zone_restricted_title: 'Restricted Public Zone',
        zone_private_title: 'CTRF Private Zone',
        internet_access: 'Internet Access\n(Open)',
        web_filter: 'Web Filtering\n(Restricted IP)',
        vpn_tunnel: 'VPN Tunnel\n+ Web Filter',
        epnfd_label: 'DNFBPs',
        bank_label: 'Financial Institutions',
        auth_label: 'External Authorities',
        staff_label: 'CTRF Users',
        ai_engine: 'External API Call',
        database: 'Databases'
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    document.documentElement.setAttribute('data-lang', currentLang);

    // Refresh X6 Diagrams labels
    if (x6ZoneMap) updateX6Labels(x6ZoneMap, 'zone');
    if (x6Roadmap) updateX6Labels(x6Roadmap, 'roadmap');
    if (x6ReportRoadmap) updateX6Labels(x6ReportRoadmap, 'roadmap');

    Reveal.layout();
}

window.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'l') {
        toggleLanguage();
    }
});

function updateX6Labels(graph, type) {
    const langData = i18nNodes[currentLang];
    graph.getNodes().forEach(node => {
        const id = node.id;
        if (langData[id]) {
            node.attr('label/text', langData[id]);
        }
    });
    // Update edge labels if any
    graph.getEdges().forEach(edge => {
        const labels = edge.getLabels();
        if (labels && labels.length > 0) {
            const labelText = labels[0].attrs.label.text;
            // Handle Yes/No translations in both languages
            const yesTexts = ['Oui', 'Yes', 'OUI', 'YES'];
            const noTexts = ['Non', 'No', 'NON', 'NO'];
            if (yesTexts.includes(labelText)) {
                edge.setLabels([{ attrs: { label: { text: langData.oui, fill: '#059669', fontWeight: 'bold' } } }]);
            } else if (noTexts.includes(labelText)) {
                edge.setLabels([{ attrs: { label: { text: langData.non, fill: '#ef4444', fontWeight: 'bold' } } }]);
            }
        }
    });
}

// Slide events
Reveal.on('slidechanged', event => {
    // Toggle Hub button visibility
    const backToHub = document.querySelector('.back-to-hub');
    if (backToHub) {
        const isStart = event.indexh === 0 || event.indexh === 1;
        backToHub.style.opacity = isStart ? '0' : '1';
        backToHub.style.pointerEvents = isStart ? 'none' : 'auto';
    }

    if (event.currentSlide.querySelector('#ds-roadmap-container') && !x6Roadmap) {
        initDSLifecycle();
    }
    if (event.currentSlide.querySelector('#report-roadmap-container') && !x6ReportRoadmap) {
        initReportLifecycle();
    }
});



function initDSLifecycle() {
    const container = document.getElementById('ds-roadmap-container');
    if (!container || typeof X6 === 'undefined') return;

    x6Roadmap = new X6.Graph({
        container: container,
        width: 1610,
        height: 800,
        background: { color: 'transparent' },
        grid: false,
        interacting: false,
    });

    const langData = i18nNodes[currentLang];
    const nodeStyle = {
        body: { fill: 'white', stroke: '#0284c7', strokeWidth: 3, rx: 12 },
        label: { fill: '#1e293b', fontSize: 16, fontWeight: 'bold' }
    };
    const diamondStyle = {
        body: { fill: 'white', stroke: '#f59e0b', strokeWidth: 3, refPoints: '0,10 10,0 20,10 10,20' },
        label: { fill: '#1e293b', fontSize: 14, fontWeight: 'bold' }
    };
    const actorStyle = {
        body: { fill: 'rgba(15, 23, 42, 0.05)', stroke: '#0f172a', strokeDasharray: '4 4', rx: 8 },
        label: { fill: '#0f172a', fontSize: 15, fontWeight: '800', textTransform: 'uppercase' }
    };

    // Helper to add node with actor label
    const addStep = (id, x, y, width, height, label, actorText, actorPos = 'top') => {
        x6Roadmap.addNode({ id, x, y, width, height, label, attrs: nodeStyle });
        if (actorText) {
            const actorBoxHeight = 50;
            const actY = actorPos === 'top' ? y - (actorBoxHeight + 5) : y + height + 5;
            x6Roadmap.addNode({
                id: `${id}_actor`,
                x: x + 10, y: actY,
                width: width - 20, height: actorBoxHeight,
                label: actorText,
                attrs: actorStyle
            });
        }
    };

    // --- ROW 1: TOP (Left to Right) ---
    const row1Y = 180;
    x6Roadmap.addNode({ id: 'start', x: 40, y: row1Y + 5, width: 60, height: 60, shape: 'circle', label: langData.start, attrs: nodeStyle });

    addStep('submission', 120, row1Y, 175, 75, langData.submission, langData.act_assujetti, 'bottom');
    addStep('prioritization', 320, row1Y, 175, 75, langData.prioritization, langData.act_systeme, 'bottom');
    addStep('accuse', 520, row1Y, 175, 75, langData.accuse, langData.act_president, 'bottom');
    addStep('assign', 720, row1Y, 180, 75, langData.assign, langData.act_pres_snr, 'bottom');

    // Evaluation Diamond
    x6Roadmap.addNode({ id: 'evaluation', x: 940, y: row1Y - 10, width: 140, height: 90, shape: 'polygon', label: langData.evaluation, attrs: diamondStyle });
    x6Roadmap.addNode({
        id: 'evaluation_actor', x: 950, y: row1Y + 85, width: 120, height: 50,
        label: langData.act_analyste, attrs: actorStyle
    });

    // --- ROW 2: BOTTOM ---
    const row2Y = 500;

    // Path 1 (Top sub-track of Row 2): Archive -> Feedback -> End
    addStep('archive_step', 780, row2Y - 70, 200, 75, langData.archive_step, langData.act_analyste, 'bottom');
    addStep('feedback_ds_1', 530, row2Y - 70, 200, 75, langData.feedback_ds, langData.act_analyste, 'bottom');

    // Path 2 (Bottom sub-track of Row 2): Traitement -> Feedback -> Rapport -> End
    addStep('process', 780, row2Y + 80, 200, 75, langData.process, langData.act_analyste, 'bottom');
    addStep('feedback_ds_2', 530, row2Y + 80, 200, 75, langData.feedback_ds, langData.act_analyste, 'bottom');
    addStep('report', 280, row2Y + 80, 200, 75, langData.report, langData.act_analyste, 'bottom');

    // Final End node (Leftmost in Row 2)
    x6Roadmap.addNode({ id: 'end', x: 80, y: row2Y + 15, width: 60, height: 60, shape: 'circle', label: langData.end, attrs: nodeStyle });

    const edge = (src, tgt, label = null) => x6Roadmap.addEdge({
        source: src, target: tgt,
        labels: label ? [{ attrs: { label: { text: label, fill: '#64748b', fontWeight: 'bold' } } }] : [],
        attrs: { line: { stroke: '#0ea5e9', strokeWidth: 3, class: 'data-flow-line' } },
        connector: 'smooth'
    });

    // --- Connections ---
    edge('start', 'submission');
    edge('submission', 'prioritization');
    edge('prioritization', 'accuse');
    edge('accuse', 'assign');
    edge('assign', 'evaluation');

    // Transitions from Evaluation directly to Row 2 paths
    // Path 1 (Archive)
    x6Roadmap.addEdge({
        source: { cell: 'evaluation', anchor: 'right' },
        target: { cell: 'archive_step', anchor: 'right' },
        labels: [{ attrs: { label: { text: langData.opt_archive, fill: '#ef4444', fontWeight: 'bold' } } }],
        attrs: { line: { stroke: '#ef4444', strokeWidth: 3, strokeDasharray: '5 5' } },
        connector: 'smooth',
        router: { name: 'manhattan', args: { startDirections: ['right'], endDirections: ['right'], padding: 30 } }
    });
    edge('archive_step', 'feedback_ds_1');

    // Path 2 (Traitement)
    x6Roadmap.addEdge({
        source: { cell: 'evaluation', anchor: 'right' },
        target: { cell: 'process', anchor: 'right' },
        labels: [{ attrs: { label: { text: langData.opt_process, fill: '#059669', fontWeight: 'bold' } } }],
        attrs: { line: { stroke: '#0ea5e9', strokeWidth: 3, class: 'data-flow-line' } },
        connector: 'smooth',
        router: { name: 'manhattan', args: { startDirections: ['right'], endDirections: ['right'], padding: 60 } }
    });
    edge('process', 'feedback_ds_2');
    edge('feedback_ds_2', 'report');

    // Ending connections
    x6Roadmap.addEdge({
        source: 'feedback_ds_1', target: 'end',
        attrs: { line: { stroke: '#94a3b8', strokeWidth: 2, strokeDasharray: '5 5' } },
        connector: 'smooth',
        router: { name: 'manhattan', args: { startDirections: ['left'], endDirections: ['top'], padding: 20 } }
    });
    x6Roadmap.addEdge({
        source: 'report', target: 'end',
        attrs: { line: { stroke: '#0ea5e9', strokeWidth: 3, class: 'data-flow-line' } },
        connector: 'smooth'
    });

    x6Roadmap.zoomToFit({ padding: 80 });
}

function initReportLifecycle() {
    const container = document.getElementById('report-roadmap-container');
    if (!container || typeof X6 === 'undefined') return;

    x6ReportRoadmap = new X6.Graph({
        container: container,
        width: 1610,
        height: 800,
        background: { color: 'transparent' },
        grid: false,
        interacting: false,
    });

    const langData = i18nNodes[currentLang];
    const nodeStyle = {
        body: { fill: 'white', stroke: '#0284c7', strokeWidth: 3, rx: 12 },
        label: { fill: '#1e293b', fontSize: 16, fontWeight: 'bold' }
    };
    const diamondStyle = {
        body: { fill: 'white', stroke: '#f59e0b', strokeWidth: 3, refPoints: '0,10 10,0 20,10 10,20' },
        label: { fill: '#1e293b', fontSize: 14, fontWeight: 'bold' }
    };
    const actorStyle = {
        body: { fill: 'rgba(15, 23, 42, 0.05)', stroke: '#0f172a', strokeDasharray: '4 4', rx: 8 },
        label: { fill: '#0f172a', fontSize: 15, fontWeight: '800', textTransform: 'uppercase' }
    };

    // Helper to add node with actor label at bottom
    const addReportStep = (id, x, y, width, height, label, actorText) => {
        x6ReportRoadmap.addNode({ id, x, y, width, height, label, attrs: nodeStyle });
        if (actorText) {
            const actorBoxHeight = 50;
            const actY = y + height + 5;
            x6ReportRoadmap.addNode({
                id: `${id}_actor`,
                x: x + 10, y: actY,
                width: width - 20, height: actorBoxHeight,
                label: actorText,
                attrs: actorStyle
            });
        }
    };

    // --- ROW 1: TOP (Left to Right) ---
    const row1Y = 180;
    x6ReportRoadmap.addNode({ id: 'r_start', x: 40, y: row1Y + 5, width: 60, height: 60, shape: 'circle', label: langData.r_start, attrs: nodeStyle });

    addReportStep('r_draft', 140, row1Y, 190, 75, langData.r_draft, langData.act_analyste_jr);
    addReportStep('r_submit', 380, row1Y, 170, 75, langData.r_submit, langData.act_analyste_jr);

    // Validation Diamond
    x6ReportRoadmap.addNode({ id: 'r_val', x: 620, y: row1Y - 10, width: 130, height: 90, shape: 'polygon', label: langData.r_val, attrs: diamondStyle });
    x6ReportRoadmap.addNode({
        id: 'r_val_actor', x: 625, y: row1Y + 85, width: 120, height: 50,
        label: langData.act_analyste_snr, attrs: actorStyle
    });

    // Updated Actor for Diffusion: Président
    addReportStep('r_dif', 850, row1Y, 210, 75, langData.r_dif, langData.act_president);

    // --- ROW 2: BOTTOM (Right to Left) ---
    const row2Y = 500;
    addReportStep('r_cons', 850, row2Y, 210, 75, langData.r_cons, langData.act_autorite);
    addReportStep('r_feed', 580, row2Y, 210, 75, langData.r_feed, langData.act_autorite);

    // Final End Node
    x6ReportRoadmap.addNode({ id: 'r_end', x: 450, y: row2Y + 5, width: 60, height: 60, shape: 'circle', label: langData.r_end, attrs: nodeStyle });

    const edge = (src, tgt, label = null) => x6ReportRoadmap.addEdge({
        source: src, target: tgt,
        labels: label ? [{ attrs: { label: { text: (label === 'Oui' || label === 'Yes' || label === langData.oui) ? langData.oui : langData.non, fill: (label === 'Oui' || label === 'Yes' || label === langData.oui) ? '#059669' : '#ef4444', fontWeight: 'bold' } } }] : [],
        attrs: { line: { stroke: '#0ea5e9', strokeWidth: 3, class: 'data-flow-line' } },
        connector: 'smooth'
    });

    // Connections
    edge('r_start', 'r_draft');
    edge('r_draft', 'r_submit');
    edge('r_submit', 'r_val');

    // Validation Outcomes
    // Direct from Validation to Diffusion (Removed Comité step)
    x6ReportRoadmap.addEdge({
        source: 'r_val', target: 'r_dif',
        labels: [{ attrs: { label: { text: langData.oui, fill: '#059669', fontWeight: 'bold' } } }],
        attrs: { line: { stroke: '#0ea5e9', strokeWidth: 3, class: 'data-flow-line' } },
        connector: 'smooth'
    });

    // REJECTION LOOP: Validation -> Drafting
    x6ReportRoadmap.addEdge({
        source: { cell: 'r_val', anchor: 'top' },
        target: { cell: 'r_draft', anchor: 'top' },
        labels: [{ attrs: { label: { text: langData.non, fill: '#ef4444', fontWeight: 'bold' } } }],
        attrs: { line: { stroke: '#ef4444', strokeWidth: 3, strokeDasharray: '5 5' } },
        router: { name: 'manhattan', args: { startDirections: ['top'], endDirections: ['top'], padding: 40 } }
    });

    // Jump to Row 2: Diffusion -> Consultation (via right turn)
    x6ReportRoadmap.addEdge({
        source: { cell: 'r_dif', anchor: 'right' },
        target: { cell: 'r_cons', anchor: 'right' },
        attrs: { line: { stroke: '#0ea5e9', strokeWidth: 3, class: 'data-flow-line' } },
        router: { name: 'manhattan', args: { startDirections: ['right'], endDirections: ['right'], padding: 30 } }
    });

    edge('r_cons', 'r_feed');
    edge('r_feed', 'r_end');

    x6ReportRoadmap.zoomToFit({ padding: 80 });
}

// Particle.js background
document.addEventListener("DOMContentLoaded", function () {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80 },
                "color": { "value": "#0284c7" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5 },
                "size": { "value": 4, "random": true },
                "line_linked": { "enable": true, "distance": 180, "color": "#0284c7", "opacity": 0.6 },
                "move": { "enable": true, "speed": 1.5 }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
                "modes": { "grab": { "distance": 180 } }
            },
            "retina_detect": true
        });
    }

    // Video modal logic...
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('video-modal-player');
    const source = document.getElementById('video-modal-source');
    const titleText = document.getElementById('video-modal-title-text');
    const closeBtn = document.getElementById('video-modal-close');

    if (!modal || !player || !source) return;

    window.openVideoModal = function (videoSrc, titleFr, titleEn) {
        const lang = document.documentElement.getAttribute('data-lang') || 'fr';
        titleText.textContent = lang === 'en' ? (titleEn || titleFr) : (titleFr || titleEn);
        source.src = videoSrc;
        player.load();
        modal.classList.add('is-open');
        Reveal.configure({ keyboard: false });
        setTimeout(() => player.play().catch(() => { }), 400);
    }

    window.closeVideoModal = function () {
        player.pause();
        player.currentTime = 0;
        modal.classList.remove('is-open');
        Reveal.configure({ keyboard: true });
    }

    document.addEventListener('click', function (e) {
        const bubble = e.target.closest('.has-video');
        if (bubble) {
            e.stopPropagation();
            const videoSrc = bubble.dataset.video;
            const titleFr = bubble.dataset.titleFr;
            const titleEn = bubble.dataset.titleEn;
            if (videoSrc) window.openVideoModal(videoSrc, titleFr, titleEn);
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            window.closeVideoModal();
            return;
        }
        if ((e.key === 'Enter' || e.key === ' ') && document.activeElement && document.activeElement.classList.contains('has-video')) {
            e.preventDefault();
            document.activeElement.click();
        }
    });

    closeBtn.addEventListener('click', window.closeVideoModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) window.closeVideoModal();
    });
});


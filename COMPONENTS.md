# Componenti UI Avanzati - Admin Framework

Documentazione completa per tutti i componenti UI avanzati del framework.

## 🎯 Modal Dialog

### Utilizzo Base
\`\`\`html
<!-- Trigger Button -->
<button class="admin-btn admin-btn-primary" onclick="openModal('myModal')">
    Apri Modal
</button>

<!-- Modal Structure -->
<div class="admin-modal-overlay" id="myModal">
    <div class="admin-modal">
        <div class="admin-modal-header">
            <h3 class="admin-modal-title">Titolo Modal</h3>
            <button class="admin-modal-close" onclick="closeModal('myModal')">×</button>
        </div>
        <div class="admin-modal-body">
            <!-- Contenuto modal -->
        </div>
        <div class="admin-modal-footer">
            <button class="admin-btn admin-btn-secondary" onclick="closeModal('myModal')">Annulla</button>
            <button class="admin-btn admin-btn-primary">Conferma</button>
        </div>
    </div>
</div>
\`\`\`

### Funzioni JavaScript
\`\`\`javascript
// Aprire modal
adminFramework.openModal('myModal');

// Chiudere modal
adminFramework.closeModal('myModal');

// Chiudere tutti i modal
adminFramework.closeAllModals();
\`\`\`

## 📋 Dropdown Menu

### Utilizzo Base
\`\`\`html
<div class="admin-dropdown" id="myDropdown">
    <button class="admin-dropdown-toggle" onclick="toggleDropdown('myDropdown')">
        <span>Seleziona Opzione</span>
        <svg class="admin-dropdown-arrow" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
        </svg>
    </button>
    <div class="admin-dropdown-menu">
        <a href="#" class="admin-dropdown-item">Opzione 1</a>
        <a href="#" class="admin-dropdown-item">Opzione 2</a>
        <div class="admin-dropdown-divider"></div>
        <a href="#" class="admin-dropdown-item">Opzione 3</a>
    </div>
</div>
\`\`\`

### Funzioni JavaScript
\`\`\`javascript
// Toggle dropdown
adminFramework.toggleDropdown('myDropdown');

// Chiudere tutti i dropdown
adminFramework.closeAllDropdowns();
\`\`\`

## 💬 Tooltip

### Posizioni Disponibili
\`\`\`html
<!-- Tooltip Top (default) -->
<div class="admin-tooltip admin-tooltip-top">
    <button class="admin-btn admin-btn-secondary">Hover me</button>
    <div class="admin-tooltip-content">Tooltip in alto</div>
</div>

<!-- Tooltip Bottom -->
<div class="admin-tooltip admin-tooltip-bottom">
    <button class="admin-btn admin-btn-secondary">Hover me</button>
    <div class="admin-tooltip-content">Tooltip in basso</div>
</div>

<!-- Tooltip Left -->
<div class="admin-tooltip admin-tooltip-left">
    <button class="admin-btn admin-btn-secondary">Hover me</button>
    <div class="admin-tooltip-content">Tooltip a sinistra</div>
</div>

<!-- Tooltip Right -->
<div class="admin-tooltip admin-tooltip-right">
    <button class="admin-btn admin-btn-secondary">Hover me</button>
    <div class="admin-tooltip-content">Tooltip a destra</div>
</div>
\`\`\`

## 🔔 Toast Notifications

### Tipi Disponibili
\`\`\`javascript
// Success Toast
adminFramework.showToast('success', 'Successo!', 'Operazione completata.');

// Warning Toast
adminFramework.showToast('warning', 'Attenzione!', 'Controlla i dati inseriti.');

// Error Toast
adminFramework.showToast('error', 'Errore!', 'Si è verificato un problema.');

// Info Toast
adminFramework.showToast('info', 'Informazione', 'Nuova notifica disponibile.');

// Toast personalizzato con durata
adminFramework.showToast('success', 'Salvato!', 'Dati salvati correttamente.', 3000);
\`\`\`

### Struttura HTML (generata automaticamente)
\`\`\`html
<div class="admin-toast-container" id="toastContainer">
    <div class="admin-toast success show">
        <svg class="admin-toast-icon">...</svg>
        <div class="admin-toast-content">
            <div class="admin-toast-title">Successo!</div>
            <p class="admin-toast-message">Operazione completata.</p>
        </div>
        <button class="admin-toast-close">×</button>
    </div>
</div>
\`\`\`

## 📑 Tabs

### Utilizzo Base
\`\`\`html
<div class="admin-tabs">
    <div class="admin-tab-list">
        <button class="admin-tab-button active" onclick="switchTab(event, 'tab1')">Tab 1</button>
        <button class="admin-tab-button" onclick="switchTab(event, 'tab2')">Tab 2</button>
        <button class="admin-tab-button" onclick="switchTab(event, 'tab3')">Tab 3</button>
    </div>
</div>
<div class="admin-tab-content">
    <div id="tab1" class="admin-tab-panel active">
        <p>Contenuto Tab 1</p>
    </div>
    <div id="tab2" class="admin-tab-panel">
        <p>Contenuto Tab 2</p>
    </div>
    <div id="tab3" class="admin-tab-panel">
        <p>Contenuto Tab 3</p>
    </div>
</div>
\`\`\`

### Funzioni JavaScript
\`\`\`javascript
// Cambiare tab programmaticamente
adminFramework.switchTab(event, 'tab2');
\`\`\`

## 🎵 Accordion

### Utilizzo Base
\`\`\`html
<div class="admin-accordion">
    <div class="admin-accordion-item">
        <button class="admin-accordion-header" onclick="toggleAccordion(this)">
            <span>Sezione 1</span>
            <svg class="admin-accordion-icon">...</svg>
        </button>
        <div class="admin-accordion-content">
            <div class="admin-accordion-body">
                <p>Contenuto della sezione 1</p>
            </div>
        </div>
    </div>
    <div class="admin-accordion-item">
        <button class="admin-accordion-header" onclick="toggleAccordion(this)">
            <span>Sezione 2</span>
            <svg class="admin-accordion-icon">...</svg>
        </button>
        <div class="admin-accordion-content">
            <div class="admin-accordion-body">
                <p>Contenuto della sezione 2</p>
            </div>
        </div>
    </div>
</div>
\`\`\`

### Accordion Multi-Apertura
\`\`\`html
<!-- Permette apertura multipla -->
<div class="admin-accordion" data-single="false">
    <!-- Items accordion -->
</div>
\`\`\`

## 🔄 Toggle Switch

### Utilizzo Base
\`\`\`html
<label class="d-flex align-center gap-2">
    <div class="admin-toggle">
        <input type="checkbox" class="admin-toggle-input" id="toggle1">
        <span class="admin-toggle-slider"></span>
    </div>
    <span>Abilita notifiche</span>
</label>

<!-- Toggle disabilitato -->
<div class="admin-toggle">
    <input type="checkbox" class="admin-toggle-input" disabled>
    <span class="admin-toggle-slider"></span>
</div>
\`\`\`

### JavaScript
\`\`\`javascript
// Toggle programmatico
const toggle = document.getElementById('toggle1');
adminFramework.toggleSwitch(toggle);
\`\`\`

## 📊 Progress Bar

### Tipi Disponibili
\`\`\`html
<!-- Progress Bar Standard -->
<div class="admin-progress">
    <div class="admin-progress-bar" style="width: 75%"></div>
</div>
<div class="admin-progress-text">75% Completato</div>

<!-- Progress Bar Success -->
<div class="admin-progress">
    <div class="admin-progress-bar success" style="width: 100%"></div>
</div>

<!-- Progress Bar Warning -->
<div class="admin-progress">
    <div class="admin-progress-bar warning" style="width: 45%"></div>
</div>

<!-- Progress Bar Danger -->
<div class="admin-progress">
    <div class="admin-progress-bar danger" style="width: 20%"></div>
</div>
\`\`\`

### JavaScript
\`\`\`javascript
// Impostare progresso programmaticamente
adminFramework.setProgress('.admin-progress-bar', 85, true);
\`\`\`

## ⏳ Loading States

### Spinner
\`\`\`html
<!-- Spinner Standard -->
<div class="admin-loading">
    <div class="admin-spinner"></div>
    <span>Caricamento...</span>
</div>

<!-- Spinner Grande -->
<div class="admin-loading">
    <div class="admin-spinner admin-spinner-lg"></div>
    <span>Caricamento...</span>
</div>

<!-- Spinner Piccolo -->
<div class="admin-loading">
    <div class="admin-spinner admin-spinner-sm"></div>
    <span>Caricamento...</span>
</div>
\`\`\`

### Skeleton Loading
\`\`\`html
<div class="admin-skeleton admin-skeleton-text"></div>
<div class="admin-skeleton admin-skeleton-text"></div>
<div class="admin-skeleton admin-skeleton-text" style="width: 60%;"></div>

<!-- Skeleton Avatar -->
<div class="admin-skeleton admin-skeleton-avatar"></div>

<!-- Skeleton Button -->
<div class="admin-skeleton admin-skeleton-button"></div>
\`\`\`

### JavaScript Loading
\`\`\`javascript
// Mostrare loading su elemento
const button = document.getElementById('myButton');
adminFramework.showLoading(button, 'Salvando...');

// Nascondere loading
adminFramework.hideLoading(button);
\`\`\`

## 🍞 Breadcrumbs

### Utilizzo Base
\`\`\`html
<nav class="admin-breadcrumb">
    <div class="admin-breadcrumb-item">
        <a href="#" class="admin-breadcrumb-link">Home</a>
    </div>
    <svg class="admin-breadcrumb-separator">...</svg>
    <div class="admin-breadcrumb-item">
        <a href="#" class="admin-breadcrumb-link">Utenti</a>
    </div>
    <svg class="admin-breadcrumb-separator">...</svg>
    <div class="admin-breadcrumb-item">
        <span class="admin-breadcrumb-current">Dettaglio</span>
    </div>
</nav>
\`\`\`

## ⌨️ Scorciatoie da Tastiera

Il framework include scorciatoie da tastiera integrate:

- **ESC**: Chiude modal e dropdown aperti
- **Ctrl/Cmd + K**: Focus sulla barra di ricerca (se presente)

## 🎨 Personalizzazione

### Variabili CSS Personalizzabili
\`\`\`css
:root {
  /* Modal */
  --modal-overlay-bg: rgba(0, 0, 0, 0.5);
  --modal-border-radius: var(--border-radius-lg);
  
  /* Toast */
  --toast-duration: 5000ms;
  --toast-slide-distance: 100%;
  
  /* Tooltip */
  --tooltip-bg: var(--gray-900);
  --tooltip-color: var(--white);
  --tooltip-delay: 0.15s;
  
  /* Progress */
  --progress-height: 0.5rem;
  --progress-border-radius: var(--border-radius);
}
\`\`\`

### Temi Personalizzati
\`\`\`javascript
// Impostare tema
adminFramework.setTheme('dark');

// Toggle tema
adminFramework.toggleTheme();

// Ottenere tema corrente
const currentTheme = adminFramework.getTheme();
\`\`\`

## 🔧 Utility Functions

### Debounce e Throttle
\`\`\`javascript
// Debounce function
const debouncedSearch = adminFramework.debounce((query) => {
    // Logica di ricerca
}, 300);

// Throttle function
const throttledScroll = adminFramework.throttle(() => {
    // Logica scroll
}, 100);
\`\`\`

### Validazione Form
\`\`\`javascript
// Validare form
const form = document.getElementById('myForm');
const isValid = adminFramework.validateForm(form);

// Mostrare errore campo
adminFramework.showFieldError(input, 'Campo obbligatorio');

// Pulire errore campo
adminFramework.clearFieldError(input);
\`\`\`

## 📱 Responsive Design

Tutti i componenti sono completamente responsive e si adattano automaticamente a:

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: 768px - 1024px
- **Large**: > 1024px

## ♿ Accessibilità

I componenti includono:

- Supporto screen reader con attributi ARIA
- Navigazione da tastiera
- Focus management
- Contrasto colori conforme WCAG AA
- Testi alternativi per icone

## 🚀 Performance

- CSS ottimizzato con variabili native
- JavaScript modulare e lazy-loaded
- Animazioni hardware-accelerated
- Debounce/throttle per eventi frequenti
- Gestione memoria per componenti dinamici

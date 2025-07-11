# 📚 Guida Completa - Admin Framework CSS

Una documentazione completa con esempi pratici per tutti i componenti UI del framework di amministrazione.

## 🚀 Introduzione

Il framework Admin CSS è una soluzione completa per creare dashboard di amministrazione moderne, responsive e accessibili. Include oltre 20 componenti UI pronti all'uso con JavaScript integrato.

### ⚡ Quick Start

\`\`\`html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <!-- CSS Framework -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/utilities.css">
</head>
<body>
    <div class="admin-layout">
        <!-- Il tuo contenuto qui -->
    </div>
    
    <!-- JavaScript Framework -->
    <script src="js/admin-framework.js"></script>
</body>
</html>
\`\`\`

---

## 🎯 Modal Dialog

I modal sono finestre di dialogo che si sovrappongono al contenuto principale per richiedere attenzione dell'utente.

### 📋 Esempio Base

\`\`\`html
<!-- Pulsante per aprire il modal -->
<button class="admin-btn admin-btn-primary" onclick="openModal('basicModal')">
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" style="margin-right: 8px;">
        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
    </svg>
    Nuovo Utente
</button>

<!-- Struttura Modal -->
<div class="admin-modal-overlay" id="basicModal">
    <div class="admin-modal">
        <div class="admin-modal-header">
            <h3 class="admin-modal-title">Aggiungi Nuovo Utente</h3>
            <button class="admin-modal-close" onclick="closeModal('basicModal')">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                </svg>
            </button>
        </div>
        <div class="admin-modal-body">
            <form id="userForm">
                <div class="admin-form-group">
                    <label class="admin-form-label">Nome Completo</label>
                    <input type="text" class="admin-form-input" placeholder="Inserisci nome e cognome" required>
                </div>
                <div class="admin-form-group">
                    <label class="admin-form-label">Email</label>
                    <input type="email" class="admin-form-input" placeholder="utente@esempio.com" required>
                </div>
                <div class="admin-form-group">
                    <label class="admin-form-label">Ruolo</label>
                    <select class="admin-form-select">
                        <option value="">Seleziona ruolo</option>
                        <option value="admin">Amministratore</option>
                        <option value="editor">Editor</option>
                        <option value="viewer">Visualizzatore</option>
                    </select>
                </div>
            </form>
        </div>
        <div class="admin-modal-footer">
            <button class="admin-btn admin-btn-secondary" onclick="closeModal('basicModal')">
                Annulla
            </button>
            <button class="admin-btn admin-btn-primary" onclick="saveUser()">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" style="margin-right: 8px;">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Salva Utente
            </button>
        </div>
    </div>
</div>
\`\`\`

### 🔥 Modal di Conferma

\`\`\`html
<!-- Modal di conferma eliminazione -->
<div class="admin-modal-overlay" id="deleteModal">
    <div class="admin-modal admin-modal-sm">
        <div class="admin-modal-header">
            <h3 class="admin-modal-title text-danger">Conferma Eliminazione</h3>
            <button class="admin-modal-close" onclick="closeModal('deleteModal')">×</button>
        </div>
        <div class="admin-modal-body">
            <div class="d-flex align-center gap-3 mb-4">
                <div class="admin-icon-circle bg-danger-light">
                    <svg width="24" height="24" fill="#dc2626" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
                    </svg>
                </div>
                <div>
                    <h4 class="mb-2">Sei sicuro?</h4>
                    <p class="mb-0 text-gray-600">Questa azione eliminerà definitivamente l'utente <strong>Mario Rossi</strong> e non potrà essere annullata.</p>
                </div>
            </div>
        </div>
        <div class="admin-modal-footer">
            <button class="admin-btn admin-btn-secondary" onclick="closeModal('deleteModal')">
                Annulla
            </button>
            <button class="admin-btn admin-btn-danger" onclick="confirmDelete()">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" style="margin-right: 8px;">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                Elimina Definitivamente
            </button>
        </div>
    </div>
</div>
\`\`\`

### 🎛️ Funzioni JavaScript

\`\`\`javascript
// Aprire modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus sul primo input se presente
    const firstInput = modal.querySelector('input, select, textarea');
    if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
    }
}

// Chiudere modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Salvare utente (esempio)
function saveUser() {
    const form = document.getElementById('userForm');
    if (form.checkValidity()) {
        // Simula salvataggio
        showToast('success', 'Utente Salvato!', 'Il nuovo utente è stato aggiunto con successo.');
        closeModal('basicModal');
        form.reset();
    } else {
        showToast('error', 'Errore!', 'Compila tutti i campi obbligatori.');
    }
}
\`\`\`

---

## 📋 Dropdown Menu

I dropdown forniscono un menu di opzioni che appare al click di un pulsante.

### 🎯 Dropdown Base

\`\`\`html
<div class="admin-dropdown" id="actionsDropdown">
    <button class="admin-dropdown-toggle">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20" style="margin-right: 8px;">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
        </svg>
        Azioni
        <svg class="admin-dropdown-arrow" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
        </svg>
    </button>
    <div class="admin-dropdown-menu">
        <a href="#" class="admin-dropdown-item">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
            </svg>
            Modifica
        </a>
        <a href="#" class="admin-dropdown-item">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"/>
                <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v1H3a1 1 0 000 2v10a2 2 0 002 2h10a2 2 0 002-2V7a1 1 0 100-2h-1V4a2 2 0 00-2-2H6zM6 4h8v1H6V4zm8 3v8H6v-8h8z"/>
            </svg>
            Duplica
        </a>
        <div class="admin-dropdown-divider"></div>
        <a href="#" class="admin-dropdown-item text-danger" onclick="openModal('deleteModal')">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
            </svg>
            Elimina
        </a>
    </div>
</div>
\`\`\`

### 👤 Dropdown Utente

\`\`\`html
<div class="admin-dropdown" id="userDropdown">
    <button class="admin-dropdown-toggle">
        <img src="/placeholder.svg?height=32&width=32" alt="Avatar" class="admin-avatar">
        <div class="admin-user-info">
            <span class="admin-user-name">Mario Rossi</span>
            <span class="admin-user-role">Amministratore</span>
        </div>
        <svg class="admin-dropdown-arrow" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
        </svg>
    </button>
    <div class="admin-dropdown-menu admin-dropdown-menu-right">
        <div class="admin-dropdown-header">
            <div class="admin-user-details">
                <strong>Mario Rossi</strong>
                <small>mario.rossi@esempio.com</small>
            </div>
        </div>
        <div class="admin-dropdown-divider"></div>
        <a href="#" class="admin-dropdown-item">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
            </svg>
            Il Mio Profilo
        </a>
        <a href="#" class="admin-dropdown-item">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"/>
            </svg>
            Impostazioni
        </a>
        <a href="#" class="admin-dropdown-item">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
            </svg>
            Aiuto
        </a>
        <div class="admin-dropdown-divider"></div>
        <a href="#" class="admin-dropdown-item">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"/>
            </svg>
            Logout
        </a>
    </div>
</div>
\`\`\`

---

## 💬 Tooltip

I tooltip mostrano informazioni aggiuntive al passaggio del mouse.

### 🎯 Tooltip Base

\`\`\`html
<!-- Tooltip in alto (default) -->
<div class="admin-tooltip admin-tooltip-top">
    <button class="admin-btn admin-btn-secondary">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
        </svg>
    </button>
    <div class="admin-tooltip-content">
        Questo pulsante mostra informazioni aggiuntive
    </div>
</div>

<!-- Tooltip con HTML -->
<div class="admin-tooltip admin-tooltip-right">
    <span class="admin-badge admin-badge-info">?</span>
    <div class="admin-tooltip-content">
        <strong>Informazione Importante</strong><br>
        Questo campo è obbligatorio per completare la registrazione.
    </div>
</div>

<!-- Tooltip su icona -->
<div class="admin-tooltip admin-tooltip-bottom">
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" class="text-gray-400 cursor-help">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"/>
    </svg>
    <div class="admin-tooltip-content">
        Clicca per maggiori informazioni su questa funzionalità
    </div>
</div>
\`\`\`

### 🎨 Tooltip Colorati

\`\`\`html
<!-- Tooltip Success -->
<div class="admin-tooltip admin-tooltip-top admin-tooltip-success">
    <button class="admin-btn admin-btn-success">Salva</button>
    <div class="admin-tooltip-content">
        I dati verranno salvati nel database
    </div>
</div>

<!-- Tooltip Warning -->
<div class="admin-tooltip admin-tooltip-top admin-tooltip-warning">
    <button class="admin-btn admin-btn-warning">Attenzione</button>
    <div class="admin-tooltip-content">
        Questa azione richiede conferma
    </div>
</div>

<!-- Tooltip Error -->
<div class="admin-tooltip admin-tooltip-top admin-tooltip-error">
    <button class="admin-btn admin-btn-danger">Elimina</button>
    <div class="admin-tooltip-content">
        Attenzione: questa azione è irreversibile
    </div>
</div>
\`\`\`

---

## 🔔 Toast Notifications

Le notifiche toast mostrano messaggi temporanei all'utente.

### 🎯 Tipi di Toast

\`\`\`javascript
// Toast di successo
showToast('success', 'Operazione Completata!', 'I dati sono stati salvati correttamente nel database.');

// Toast di avviso
showToast('warning', 'Attenzione!', 'Alcuni campi potrebbero non essere stati salvati.');

// Toast di errore
showToast('error', 'Errore di Connessione!', 'Impossibile connettersi al server. Riprova più tardi.');

// Toast informativo
showToast('info', 'Nuova Funzionalità!', 'È disponibile una nuova versione dell\'applicazione.');

// Toast personalizzato con durata
showToast('success', 'Upload Completato!', 'Il file è stato caricato con successo.', 3000);
\`\`\`

### 🎛️ Funzione Toast Avanzata

\`\`\`javascript
function showToast(type, title, message, duration = 5000) {
    const container = document.getElementById('toastContainer') || createToastContainer();
    const toast = document.createElement('div');
    toast.className = `admin-toast ${type}`;
    
    const iconMap = {
        success: `<svg class="admin-toast-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
        </svg>`,
        warning: `<svg class="admin-toast-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"/>
        </svg>`,
        error: `<svg class="admin-toast-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
        </svg>`,
        info: `<svg class="admin-toast-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
        </svg>`
    };
    
    toast.innerHTML = `
        ${iconMap[type]}
        <div class="admin-toast-content">
            <div class="admin-toast-title">${title}</div>
            <p class="admin-toast-message">${message}</p>
        </div>
        <button class="admin-toast-close" onclick="removeToast(this)">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
            </svg>
        </button>
    `;
    
    container.appendChild(toast);
    
    // Animazione di entrata
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Auto-rimozione
    setTimeout(() => removeToast(toast.querySelector('.admin-toast-close')), duration);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'admin-toast-container';
    document.body.appendChild(container);
    return container;
}
\`\`\`

---

## 📑 Tabs

Le schede organizzano il contenuto in sezioni navigabili.

### 🎯 Tabs Base

\`\`\`html
<div class="admin-card">
    <div class="admin-card-header">
        <h3 class="admin-card-title">Impostazioni Utente</h3>
    </div>
    <div class="admin-card-body p-0">
        <!-- Tab Navigation -->
        <div class="admin-tabs">
            <div class="admin-tab-list">
                <button class="admin-tab-button active" onclick="switchTab(event, 'profile')">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                    </svg>
                    Profilo
                </button>
                <button class="admin-tab-button" onclick="switchTab(event, 'security')">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                    Sicurezza
                </button>
                <button class="admin-tab-button" onclick="switchTab(event, 'notifications')">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    Notifiche
                </button>
                <button class="admin-tab-button" onclick="switchTab(event, 'billing')">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                        <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                    </svg>
                    Fatturazione
                </button>
            </div>
        </div>
        
        <!-- Tab Content -->
        <div class="admin-tab-content">
            <!-- Profilo Tab -->
            <div id="profile" class="admin-tab-panel active">
                <div class="p-6">
                    <h4 class="mb-4">Informazioni Personali</h4>
                    <div class="d-grid grid-cols-2 gap-4">
                        <div class="admin-form-group">
                            <label class="admin-form-label">Nome</label>
                            <input type="text" class="admin-form-input" value="Mario">
                        </div>
                        <div class="admin-form-group">
                            <label class="admin-form-label">Cognome</label>
                            <input type="text" class="admin-form-input" value="Rossi">
                        </div>
                        <div class="admin-form-group">
                            <label class="admin-form-label">Email</label>
                            <input type="email" class="admin-form-input" value="mario.rossi@esempio.com">
                        </div>
                        <div class="admin-form-group">
                            <label class="admin-form-label">Telefono</label>
                            <input type="tel" class="admin-form-input" value="+39 123 456 7890">
                        </div>
                    </div>
                    <div class="admin-form-group">
                        <label class="admin-form-label">Bio</label>
                        <textarea class="admin-form-textarea" rows="3" placeholder="Scrivi qualcosa su di te..."></textarea>
                    </div>
                </div>
            </div>
            
            <!-- Sicurezza Tab -->
            <div id="security" class="admin-tab-panel">
                <div class="p-6">
                    <h4 class="mb-4">Impostazioni di Sicurezza</h4>
                    <div class="admin-form-group">
                        <label class="d-flex align-center gap-3">
                            <div class="admin-toggle">
                                <input type="checkbox" class="admin-toggle-input" checked>
                                <span class="admin-toggle-slider"></span>
                            </div>
                            <div>
                                <strong>Autenticazione a Due Fattori</strong>
                                <p class="text-sm text-gray-600 mb-0">Aggiungi un livello extra di sicurezza al tuo account</p>
                            </div>
                        </label>
                    </div>
                    <div class="admin-form-group">
                        <label class="admin-form-label">Cambia Password</label>
                        <input type="password" class="admin-form-input" placeholder="Password attuale">
                        <input type="password" class="admin-form-input mt-2" placeholder="Nuova password">
                        <input type="password" class="admin-form-input mt-2" placeholder="Conferma nuova password">
                    </div>
                </div>
            </div>
            
            <!-- Notifiche Tab -->
            <div id="notifications" class="admin-tab-panel">
                <div class="p-6">
                    <h4 class="mb-4">Preferenze Notifiche</h4>
                    <div class="space-y-4">
                        <label class="d-flex align-center gap-3">
                            <div class="admin-toggle">
                                <input type="checkbox" class="admin-toggle-input" checked>
                                <span class="admin-toggle-slider"></span>
                            </div>
                            <div>
                                <strong>Notifiche Email</strong>
                                <p class="text-sm text-gray-600 mb-0">Ricevi aggiornamenti via email</p>
                            </div>
                        </label>
                        <label class="d-flex align-center gap-3">
                            <div class="admin-toggle">
                                <input type="checkbox" class="admin-toggle-input">
                                <span class="admin-toggle-slider"></span>
                            </div>
                            <div>
                                <strong>Notifiche Push</strong>
                                <p class="text-sm text-gray-600 mb-0">Ricevi notifiche push sul browser</p>
                            </div>
                        </label>
                        <label class="d-flex align-center gap-3">
                            <div class="admin-toggle">
                                <input type="checkbox" class="admin-toggle-input" checked>
                                <span class="admin-toggle-slider"></span>
                            </div>
                            <div>
                                <strong>Newsletter</strong>
                                <p class="text-sm text-gray-600 mb-0">Ricevi la newsletter settimanale</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            
            <!-- Fatturazione Tab -->
            <div id="billing" class="admin-tab-panel">
                <div class="p-6">
                    <h4 class="mb-4">Informazioni di Fatturazione</h4>
                    <div class="admin-alert admin-alert-info mb-4">
                        <strong>Piano Attuale:</strong> Professional - €29/mese
                    </div>
                    <div class="admin-form-group">
                        <label class="admin-form-label">Metodo di Pagamento</label>
                        <div class="admin-card p-4">
                            <div class="d-flex align-center gap-3">
                                <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                                    <rect width="32" height="20" rx="4" fill="#1a365d"/>
                                    <text x="16" y="12" text-anchor="middle" fill="white" font-size="8">VISA</text>
                                </svg>
                                <div>
                                    <strong>**** **** **** 1234</strong>
                                    <p class="text-sm text-gray-600 mb-0">Scade 12/25</p>
                                </div>
                                <button class="admin-btn admin-btn-sm admin-btn-secondary ml-auto">
                                    Modifica
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
\`\`\`

---

## 🎵 Accordion

Gli accordion organizzano contenuti in sezioni espandibili.

### 🎯 Accordion Base

\`\`\`html
<div class="admin-card">
    <div class="admin-card-header">
        <h3 class="admin-card-title">Domande Frequenti</h3>
        <p class="admin-card-subtitle">Trova risposte alle domande più comuni</p>
    </div>
    <div class="admin-card-body p-0">
        <div class="admin-accordion">
            <!-- Item 1 -->
            <div class="admin-accordion-item">
                <button class="admin-accordion-header" onclick="toggleAccordion(this)">
                    <span>Come posso reimpostare la mia password?</span>
                    <svg class="admin-accordion-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                    </svg>
                </button>
                <div class="admin-accordion-content">
                    <div class="admin-accordion-body">
                        <p>Per reimpostare la password, segui questi passaggi:</p>
                        <ol>
                            <li>Vai alla pagina di login</li>
                            <li>Clicca su "Password dimenticata?"</li>
                            <li>Inserisci il tuo indirizzo email</li>
                            <li>Controlla la tua email per il link di reset</li>
                            <li>Segui le istruzioni nell'email</li>
                        </ol>
                        <div class="admin-alert admin-alert-info mt-3">
                            <strong>Nota:</strong> Il link di reset è valido per 24 ore.
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Item 2 -->
            <div class="admin-accordion-item">
                <button class="admin-accordion-header" onclick="toggleAccordion(this)">
                    <span>Come posso cambiare il mio piano di abbonamento?</span>
                    <svg class="admin-accordion-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                    </svg>
                </button>
                <div class="admin-accordion-content">
                    <div class="admin-accordion-body">
                        <p>Puoi modificare il tuo piano in qualsiasi momento:</p>
                        <ul>
                            <li>Vai alle <strong>Impostazioni Account</strong></li>
                            <li>Seleziona la scheda <strong>Fatturazione</strong></li>
                            <li>Clicca su <strong>Cambia Piano</strong></li>
                            <li>Scegli il nuovo piano desiderato</li>
                        </ul>
                        <div class="d-flex gap-2 mt-3">
                            <button class="admin-btn admin-btn-sm admin-btn-primary">
                                Vai alle Impostazioni
                            </button>
                            <button class="admin-btn admin-btn-sm admin-btn-secondary">
                                Confronta Piani
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Item 3 -->
            <div class="admin-accordion-item">
                <button class="admin-accordion-header" onclick="toggleAccordion(this)">
                    <span>Quali sono i metodi di pagamento accettati?</span>
                    <svg class="admin-accordion-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                    </svg>
                </button>
                <div class="admin-accordion-content">
                    <div class="admin-accordion-body">
                        <p>Accettiamo i seguenti metodi di pagamento:</p>
                        <div class="d-grid grid-cols-2 gap-4 mt-3">
                            <div class="admin-card p-3">
                                <h5>Carte di Credito</h5>
                                <ul class="mb-0">
                                    <li>Visa</li>
                                    <li>Mastercard</li>
                                    <li>American Express</li>
                                </ul>
                            </div>
                            <div class="admin-card p-3">
                                <h5>Pagamenti Digitali</h5>
                                <ul class="mb-0">
                                    <li>PayPal</li>
                                    <li>Apple Pay</li>
                                    <li>Google Pay</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
\`\`\`

---

## 🔄 Toggle Switch

Gli interruttori toggle permettono di attivare/disattivare opzioni.

### 🎯 Toggle Base

\`\`\`html
<!-- Toggle semplice -->
<div class="admin-form-group">
    <label class="d-flex align-center gap-3">
        <div class="admin-toggle">
            <input type="checkbox" class="admin-toggle-input" id="notifications">
            <span class="admin-toggle-slider"></span>
        </div>
        <span>Abilita notifiche</span>
    </label>
</div>

<!-- Toggle con descrizione -->
<div class="admin-form-group">
    <label class="d-flex align-center gap-3">
        <div class="admin-toggle">
            <input type="checkbox" class="admin-toggle-input" id="darkMode" checked>
            <span class="admin-toggle-slider"></span>
        </div>
        <div>
            <strong>Modalità Scura</strong>
            <p class="text-sm text-gray-600 mb-0">Attiva il tema scuro per ridurre l'affaticamento degli occhi</p>
        </div>
    </label>
</div>

<!-- Toggle disabilitato -->
<div class="admin-form-group">
    <label class="d-flex align-center gap-3 opacity-50">
        <div class="admin-toggle">
            <input type="checkbox" class="admin-toggle-input" disabled>
            <span class="admin-toggle-slider"></span>
        </div>
        <span>Funzionalità non disponibile</span>
    </label>
</div>
\`\`\`

### 🎨 Toggle Colorati

\`\`\`html
<!-- Toggle Success -->
<div class="admin-toggle admin-toggle-success">
    <input type="checkbox" class="admin-toggle-input" checked>
    <span class="admin-toggle-slider"></span>
</div>

<!-- Toggle Warning -->
<div class="admin-toggle admin-toggle-warning">
    <input type="checkbox" class="admin-toggle-input" checked>
    <span class="admin-toggle-slider"></span>
</div>

<!-- Toggle Danger -->
<div class="admin-toggle admin-toggle-danger">
    <input type="checkbox" class="admin-toggle-input" checked>
    <span class="admin-toggle-slider"></span>
</div>
\`\`\`

---

## 📊 Progress Bar

Le barre di progresso mostrano l'avanzamento di un'operazione.

### 🎯 Progress Base

\`\`\`html
<!-- Progress standard -->
<div class="admin-form-group">
    <div class="d-flex justify-between align-center mb-2">
        <span class="admin-form-label">Caricamento File</span>
        <span class="text-sm text-gray-600">75%</span>
    </div>
    <div class="admin-progress">
        <div class="admin-progress-bar" style="width: 75%"></div>
    </div>
</div>

<!-- Progress con colori -->
<div class="admin-form-group">
    <div class="d-flex justify-between align-center mb-2">
        <span class="admin-form-label">Spazio Utilizzato</span>
        <span class="text-sm text-gray-600">8.2 GB / 10 GB</span>
    </div>
    <div class="admin-progress">
        <div class="admin-progress-bar warning" style="width: 82%"></div>
    </div>
</div>

<!-- Progress completato -->
<div class="admin-form-group">
    <div class="d-flex justify-between align-center mb-2">
        <span class="admin-form-label">Backup Completato</span>
        <svg width="16" height="16" fill="#10b981" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
        </svg>
    </div>
    <div class="admin-progress">
        <div class="admin-progress-bar success" style="width: 100%"></div>
    </div>
</div>
\`\`\`

### 🎨 Progress Animato

\`\`\`html
<!-- Progress con animazione -->
<div class="admin-progress">
    <div class="admin-progress-bar admin-progress-animated" style="width: 60%"></div>
</div>

<!-- Progress striped -->
<div class="admin-progress">
    <div class="admin-progress-bar admin-progress-striped" style="width: 45%"></div>
</div>

<!-- Progress con gradiente -->
<div class="admin-progress">
    <div class="admin-progress-bar admin-progress-gradient" style="width: 70%"></div>
</div>
\`\`\`

---

## ⏳ Loading States

Gli stati di caricamento informano l'utente che un'operazione è in corso.

### 🎯 Spinner

\`\`\`html
<!-- Spinner base -->
<div class="admin-loading">
    <div class="admin-spinner"></div>
    <span>Caricamento...</span>
</div>

<!-- Spinner grande -->
<div class="admin-loading">
    <div class="admin-spinner admin-spinner-lg"></div>
    <span>Elaborazione in corso...</span>
</div>

<!-- Spinner piccolo -->
<div class="admin-loading">
    <div class="admin-spinner admin-spinner-sm"></div>
    <span>Salvando...</span>
</div>

<!-- Spinner inline -->
<button class="admin-btn admin-btn-primary" disabled>
    <div class="admin-spinner admin-spinner-sm mr-2"></div>
    Salvando...
</button>
\`\`\`

### 🦴 Skeleton Loading

\`\`\`html
<!-- Skeleton per lista utenti -->
<div class="admin-card">
    <div class="admin-card-header">
        <div class="admin-skeleton admin-skeleton-text" style="width: 200px;"></div>
    </div>
    <div class="admin-card-body">
        <div class="space-y-4">
            <div class="d-flex align-center gap-3">
                <div class="admin-skeleton admin-skeleton-avatar"></div>
                <div style="flex: 1;">
                    <div class="admin-skeleton admin-skeleton-text"></div>
                    <div class="admin-skeleton admin-skeleton-text" style="width: 60%;"></div>
                </div>
                <div class="admin-skeleton admin-skeleton-button"></div>
            </div>
            <div class="d-flex align-center gap-3">
                <div class="admin-skeleton admin-skeleton-avatar"></div>
                <div style="flex: 1;">
                    <div class="admin-skeleton admin-skeleton-text"></div>
                    <div class="admin-skeleton admin-skeleton-text" style="width: 80%;"></div>
                </div>
                <div class="admin-skeleton admin-skeleton-button"></div>
            </div>
            <div class="d-flex align-center gap-3">
                <div class="admin-skeleton admin-skeleton-avatar"></div>
                <div style="flex: 1;">
                    <div class="admin-skeleton admin-skeleton-text"></div>
                    <div class="admin-skeleton admin-skeleton-text" style="width: 45%;"></div>
                </div>
                <div class="admin-skeleton admin-skeleton-button"></div>
            </div>
        </div>
    </div>
</div>

<!-- Skeleton per tabella -->
<div class="admin-table-container">
    <table class="admin-table">
        <thead>
            <tr>
                <th><div class="admin-skeleton admin-skeleton-text" style="width: 100px;"></div></th>
                <th><div class="admin-skeleton admin-skeleton-text" style="width: 120px;"></div></th>
                <th><div class="admin-skeleton admin-skeleton-text" style="width: 80px;"></div></th>
                <th><div class="admin-skeleton admin-skeleton-text" style="width: 60px;"></div></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div class="admin-skeleton admin-skeleton-text"></div></td>
                <td><div class="admin-skeleton admin-skeleton-text"></div></td>
                <td><div class="admin-skeleton admin-skeleton-text" style="width: 60%;"></div></td>
                <td><div class="admin-skeleton admin-skeleton-button admin-skeleton-sm"></div></td>
            </tr>
            <tr>
                <td><div class="admin-skeleton admin-skeleton-text"></div></td>
                <td><div class="admin-skeleton admin-skeleton-text"></div></td>
                <td><div class="admin-skeleton admin-skeleton-text" style="width: 80%;"></div></td>
                <td><div class="admin-skeleton admin-skeleton-button admin-skeleton-sm"></div></td>
            </tr>
        </tbody>
    </table>
</div>
\`\`\`

---

## 🍞 Breadcrumbs

I breadcrumb mostrano la posizione corrente nella navigazione.

### 🎯 Breadcrumb Base

\`\`\`html
<nav class="admin-breadcrumb">
    <div class="admin-breadcrumb-item">
        <a href="#" class="admin-breadcrumb-link">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            Dashboard
        </a>
    </div>
    <svg class="admin-breadcrumb-separator" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
    </svg>
    <div class="admin-breadcrumb-item">
        <a href="#" class="admin-breadcrumb-link">Gestione Utenti</a>
    </div>
    <svg class="admin-breadcrumb-separator" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
    </svg>
    <div class="admin-breadcrumb-item">
        <span class="admin-breadcrumb-current">Mario Rossi</span>
    </div>
</nav>
\`\`\`

---

## 🎨 Personalizzazione Avanzata

### 🎯 Variabili CSS Personalizzabili

\`\`\`css
:root {
  /* Colori Principali */
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --danger-color: #ef4444;
  --info-color: #06b6d4;
  
  /* Modal */
  --modal-overlay-bg: rgba(0, 0, 0, 0.5);
  --modal-border-radius: 12px;
  --modal-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* Toast */
  --toast-duration: 5000ms;
  --toast-slide-distance: 100%;
  --toast-border-radius: 8px;
  
  /* Tooltip */
  --tooltip-bg: #1f2937;
  --tooltip-color: #ffffff;
  --tooltip-delay: 0.15s;
  --tooltip-arrow-size: 6px;
  
  /* Progress */
  --progress-height: 8px;
  --progress-border-radius: 4px;
  --progress-bg: #e5e7eb;
  
  /* Toggle */
  --toggle-width: 44px;
  --toggle-height: 24px;
  --toggle-border-radius: 12px;
  
  /* Animazioni */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}
\`\`\`

### 🌙 Tema Scuro

\`\`\`css
[data-theme="dark"] {
  --primary-color: #3b82f6;
  --bg-color: #111827;
  --surface-color: #1f2937;
  --text-color: #f9fafb;
  --border-color: #374151;
  
  /* Modal Dark */
  --modal-overlay-bg: rgba(0, 0, 0, 0.8);
  
  /* Tooltip Dark */
  --tooltip-bg: #374151;
  --tooltip-color: #f9fafb;
}
\`\`\`

---

## 🔧 JavaScript API Completa

### 🎯 Inizializzazione

\`\`\`javascript
// Inizializza il framework
const adminFramework = new AdminFramework({
    theme: 'light', // 'light' | 'dark' | 'auto'
    toastPosition: 'top-right', // 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
    modalCloseOnOverlay: true,
    tooltipDelay: 150,
    debugMode: false
});

// Event listeners automatici
adminFramework.init();
\`\`\`

### 🎛️ Metodi Principali

\`\`\`javascript
// Modal
adminFramework.modal.open('modalId');
adminFramework.modal.close('modalId');
adminFramework.modal.closeAll();

// Toast
adminFramework.toast.show('success', 'Titolo', 'Messaggio', 5000);
adminFramework.toast.clear(); // Rimuove tutti i toast

// Dropdown
adminFramework.dropdown.toggle('dropdownId');
adminFramework.dropdown.closeAll();

// Tabs
adminFramework.tabs.switch('tabId');
adminFramework.tabs.getActive();

// Accordion
adminFramework.accordion.toggle('accordionId');
adminFramework.accordion.openAll();
adminFramework.accordion.closeAll();

// Theme
adminFramework.theme.set('dark');
adminFramework.theme.toggle();
adminFramework.theme.get();

// Utilities
adminFramework.utils.debounce(func, delay);
adminFramework.utils.throttle(func, delay);
adminFramework.utils.validateForm(formElement);
\`\`\`

---

## 📱 Responsive Design

### 🎯 Breakpoints

\`\`\`css
/* Mobile First Approach */
.admin-component {
  /* Mobile styles (default) */
}

@media (min-width: 640px) {
  /* Tablet */
  .admin-component {
    /* Tablet styles */
  }
}

@media (min-width: 768px) {
  /* Desktop */
  .admin-component {
    /* Desktop styles */
  }
}

@media (min-width: 1024px) {
  /* Large Desktop */
  .admin-component {
    /* Large desktop styles */
  }
}
\`\`\`

### 📱 Componenti Responsive

\`\`\`html
<!-- Modal responsive -->
<div class="admin-modal admin-modal-responsive">
  <!-- Su mobile occupa tutto lo schermo -->
  <!-- Su desktop ha dimensioni fisse -->
</div>

<!-- Dropdown responsive -->
<div class="admin-dropdown admin-dropdown-responsive">
  <!-- Su mobile si apre come modal -->
  <!-- Su desktop come dropdown normale -->
</div>

<!-- Tabs responsive -->
<div class="admin-tabs admin-tabs-responsive">
  <!-- Su mobile le tab diventano accordion -->
  <!-- Su desktop rimangono tab -->
</div>
\`\`\`

Un esempio di layout responsive con classi di utility:

\`\`\`html
<div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- Responsive grid -->
</div>
\`\`\`

---

## ♿ Accessibilità (WCAG AA)

### 🎯 Attributi ARIA

\`\`\`html
<!-- Modal accessibile -->
<div class="admin-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="admin-modal">
        <div class="admin-modal-header">
            <h3 id="modal-title" class="admin-modal-title">Titolo Modal</h3>
            <button class="admin-modal-close" aria-label="Chiudi modal">×</button>
        </div>
    </div>
</div>

<!-- Dropdown accessibile -->
<div class="admin-dropdown">
    <button class="admin-dropdown-toggle" 
            aria-haspopup="true" 
            aria-expanded="false"
            aria-controls="dropdown-menu">
        Menu
    </button>
    <div class="admin-dropdown-menu" 
         id="dropdown-menu" 
         role="menu">
        <a href="#" class="admin-dropdown-item" role="menuitem">Opzione 1</a>
    </div>
</div>

<!-- Toggle accessibile -->
<label class="d-flex align-center gap-3">
    <div class="admin-toggle">
        <input type="checkbox" 
               class="admin-toggle-input" 
               role="switch"
               aria-checked="false"
               aria-describedby="toggle-description">
        <span class="admin-toggle-slider"></span>
    </div>
    <div>
        <span>Abilita notifiche</span>
        <p id="toggle-description" class="text-sm text-gray-600 mb-0">
            Riceverai notifiche quando ci sono aggiornamenti importanti
        </p>
    </div>
</label>
\`\`\`

### ⌨️ Navigazione da Tastiera

\`\`\`javascript
// Gestione focus trap nei modal
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Scorciatoie da tastiera globali
document.addEventListener('keydown', (e) => {
    // ESC per chiudere modal e dropdown
    if (e.key === 'Escape') {
        adminFramework.modal.closeAll();
        adminFramework.dropdown.closeAll();
    }
    
    // Ctrl/Cmd + K per focus su ricerca
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('[data-search]');
        if (searchInput) searchInput.focus();
    }
});
\`\`\`

---

## 🚀 Performance e Ottimizzazione

### 🎯 Lazy Loading

\`\`\`javascript
// Caricamento lazy dei componenti
const lazyComponents = {
    modal: () => import('./components/modal.js'),
    dropdown: () => import('./components/dropdown.js'),
    toast: () => import('./components/toast.js')
};

// Inizializza solo quando necessario
async function initComponent(name) {
    if (!window.adminComponents[name]) {
        const module = await lazyComponents[name]();
        window.adminComponents[name] = new module.default();
    }
    return window.adminComponents[name];
}
\`\`\`

### 🔧 Debounce e Throttle

\`\`\`javascript
// Debounce per ricerca
const searchInput = document.getElementById('search');
const debouncedSearch = adminFramework.utils.debounce((query) => {
    performSearch(query);
}, 300);

searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});

// Throttle per scroll
const throttledScroll = adminFramework.utils.throttle(() => {
    updateScrollPosition();
}, 16); // 60fps

window.addEventListener('scroll', throttledScroll);
\`\`\`

---

## 🧪 Testing

### 🎯 Test Unitari

\`\`\`javascript
// Test per componenti
describe('AdminFramework Modal', () => {
    test('should open modal', () => {
        const modal = document.getElementById('testModal');
        adminFramework.modal.open('testModal');
        expect(modal.classList.contains('active')).toBe(true);
    });

    test('should close modal on ESC', () => {
        const modal = document.getElementById('testModal');
        adminFramework.modal.open('testModal');
        
        const escEvent = new KeyboardEvent('keydown', { key: 'Escape' });
        document.dispatchEvent(escEvent);
        
        expect(modal.classList.contains('active')).toBe(false);
    });
});
\`\`\`

### 🔍 Test di Accessibilità

\`\`\`javascript
// Test ARIA
describe('Accessibility Tests', () => {
    test('modal should have correct ARIA attributes', () => {
        const modal = document.querySelector('.admin-modal-overlay');
        expect(modal.getAttribute('role')).toBe('dialog');
        expect(modal.getAttribute('aria-modal')).toBe('true');
    });

    test('dropdown should be keyboard navigable', () => {
        const dropdown = document.querySelector('.admin-dropdown');
        const toggle = dropdown.querySelector('.admin-dropdown-toggle');
        
        toggle.focus();
        const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
        toggle.dispatchEvent(enterEvent);
        
        expect(dropdown.classList.contains('active')).toBe(true);
    });
});
\`\`\`

---

## 📦 Build e Deploy

### 🎯 Minificazione CSS

\`\`\`bash
# Usando PostCSS
npx postcss css/admin-framework.css -o dist/admin-framework.min.css --use autoprefixer cssnano

# Usando Sass
sass --style=compressed css/admin-framework.scss dist/admin-framework.min.css
\`\`\`

### 🚀 CDN Setup

\`\`\`html
<!-- Versione di sviluppo -->
<link rel="stylesheet" href="https://cdn.example.com/admin-framework/1.0.0/admin-framework.css">
<script src="https://cdn.example.com/admin-framework/1.0.0/admin-framework.js"></script>

<!-- Versione minificata per produzione -->
<link rel="stylesheet" href="https://cdn.example.com/admin-framework/1.0.0/admin-framework.min.css">
<script src="https://cdn.example.com/admin-framework/1.0.0/admin-framework.min.js"></script>
\`\`\`

---

## 🔗 Integrazione con Framework

### ⚛️ React

\`\`\`jsx
import { useEffect } from 'react';
import 'admin-framework/dist/admin-framework.css';

function AdminModal({ isOpen, onClose, children }) {
    useEffect(() => {
        if (isOpen) {
            window.adminFramework.modal.open('react-modal');
        } else {
            window.adminFramework.modal.close('react-modal');
        }
    }, [isOpen]);

    return (
        <div className="admin-modal-overlay" id="react-modal">
            <div className="admin-modal">
                {children}
            </div>
        </div>
    );
}
\`\`\`

### 🟢 Vue.js

\`\`\`vue
<template>
    <div class="admin-modal-overlay" :class="{ active: isOpen }" ref="modal">
        <div class="admin-modal">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['isOpen'],
    mounted() {
        this.$refs.modal.addEventListener('click', (e) => {
            if (e.target === this.$refs.modal) {
                this.$emit('close');
            }
        });
    }
}
</script>
\`\`\`

---

## 📚 Risorse Aggiuntive

### 🎯 Link Utili

- **Documentazione Completa**: [docs.admin-framework.com](https://docs.admin-framework.com)
- **Esempi Live**: [examples.admin-framework.com](https://examples.admin-framework.com)
- **GitHub Repository**: [github.com/admin-framework/css](https://github.com/admin-framework/css)
- **NPM Package**: [npmjs.com/package/admin-framework](https://npmjs.com/package/admin-framework)

### 🆘 Supporto

- **Discord Community**: [discord.gg/admin-framework](https://discord.gg/admin-framework)
- **Stack Overflow**: Tag `admin-framework`
- **GitHub Issues**: Per bug reports e feature requests
- **Email Support**: support@admin-framework.com

---

## 📄 Licenza

MIT License - Libero per uso commerciale e personale.

---

*Documentazione aggiornata al 2024 - Admin Framework CSS v1.0.0*

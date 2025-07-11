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

**🎨 Anteprima Renderizzata:**

<div style="position: relative; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 16px 0;">
    <!-- Pulsante -->
    <div style="margin-bottom: 20px;">
        <button style="background: #2563eb; color: white; border: none; padding: 10px 16px; border-radius: 6px; font-weight: 500; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
            </svg>
            Nuovo Utente
        </button>
    </div>
    
    <!-- Modal Preview -->
    <div style="background: rgba(0,0,0,0.5); border-radius: 8px; padding: 40px; position: relative;">
        <div style="background: white; border-radius: 12px; max-width: 500px; margin: 0 auto; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);">
            <!-- Header -->
            <div style="padding: 24px 24px 0; border-bottom: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #111827;">Aggiungi Nuovo Utente</h3>
                <button style="background: none; border: none; color: #6b7280; cursor: pointer; padding: 4px;">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                    </svg>
                </button>
            </div>
            
            <!-- Body -->
            <div style="padding: 24px;">
                <div style="margin-bottom: 16px;">
                    <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 6px;">Nome Completo</label>
                    <input style="width: 100%; padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px;" placeholder="Inserisci nome e cognome" />
                </div>
                <div style="margin-bottom: 16px;">
                    <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 6px;">Email</label>
                    <input style="width: 100%; padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px;" placeholder="utente@esempio.com" />
                </div>
                <div style="margin-bottom: 16px;">
                    <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 6px;">Ruolo</label>
                    <select style="width: 100%; padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px;">
                        <option>Seleziona ruolo</option>
                        <option>Amministratore</option>
                        <option>Editor</option>
                        <option>Visualizzatore</option>
                    </select>
                </div>
            </div>
            
            <!-- Footer -->
            <div style="padding: 16px 24px 24px; display: flex; gap: 12px; justify-content: flex-end; border-top: 1px solid #e5e7eb;">
                <button style="background: #f3f4f6; color: #374151; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 500; cursor: pointer;">
                    Annulla
                </button>
                <button style="background: #2563eb; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 500; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Salva Utente
                </button>
            </div>
        </div>
    </div>
</div>

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

**🎨 Anteprima Renderizzata:**

<div style="position: relative; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 16px 0;">
    <div style="background: rgba(0,0,0,0.5); border-radius: 8px; padding: 40px; position: relative;">
        <div style="background: white; border-radius: 12px; max-width: 400px; margin: 0 auto; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);">
            <!-- Header -->
            <div style="padding: 20px 20px 0; display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #dc2626;">Conferma Eliminazione</h3>
                <button style="background: none; border: none; color: #6b7280; cursor: pointer; font-size: 20px;">×</button>
            </div>
            
            <!-- Body -->
            <div style="padding: 20px;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                    <div style="width: 48px; height: 48px; background: #fef3c7; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <svg width="24" height="24" fill="#d97706" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"/>
                        </svg>
                    </div>
                    <div>
                        <h4 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">Sei sicuro?</h4>
                        <p style="margin: 0; color: #6b7280; font-size: 14px;">Questa azione eliminerà definitivamente l'utente <strong>Mario Rossi</strong> e non potrà essere annullata.</p>
                    </div>
                </div>
            </div>
            
            <!-- Footer -->
            <div style="padding: 16px 20px 20px; display: flex; gap: 12px; justify-content: flex-end;">
                <button style="background: #f3f4f6; color: #374151; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 500; cursor: pointer;">
                    Annulla
                </button>
                <button style="background: #dc2626; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 500; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    </svg>
                    Elimina Definitivamente
                </button>
            </div>
        </div>
    </div>
</div>

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

**🎨 Anteprima Renderizzata:**

<div style="position: relative; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 16px 0;">
    <div style="position: relative; display: inline-block;">
        <!-- Dropdown Button -->
        <button style="background: white; border: 1px solid #d1d5db; padding: 8px 12px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; font-size: 14px;">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
            </svg>
            Azioni
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
            </svg>
        </button>
        
        <!-- Dropdown Menu -->
        <div style="position: absolute; top: 100%; left: 0; margin-top: 4px; background: white; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); min-width: 160px; z-index: 10;">
            <a href="#" style="display: flex; align-items: center; gap: 8px; padding: 8px 12px; text-decoration: none; color: #374151; font-size: 14px; border-bottom: 1px solid #f3f4f6;">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                </svg>
                Modifica
            </a>
            <a href="#" style="display: flex; align-items: center; gap: 8px; padding: 8px 12px; text-decoration: none; color: #374151; font-size: 14px; border-bottom: 1px solid #f3f4f6;">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"/>
                </svg>
                Duplica
            </a>
            <div style="height: 1px; background: #e5e7eb; margin: 4px 0;"></div>
            <a href="#" style="display: flex; align-items: center; gap: 8px; padding: 8px 12px; text-decoration: none; color: #dc2626; font-size: 14px;">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                </svg>
                Elimina
            </a>
        </div>
    </div>
</div>

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

**🎨 Anteprima Renderizzata:**

<div style="position: relative; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 16px 0;">
    <div style="position: relative; display: inline-block;">
        <!-- User Dropdown Button -->
        <button style="background: white; border: 1px solid #d1d5db; padding: 8px 12px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; font-size: 14px;">
            <div style="width: 32px; height: 32px; background: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 12px;">
                MR
            </div>
            <div style="text-align: left;">
                <div style="font-weight: 500; color: #111827;">Mario Rossi</div>
                <div style="font-size: 12px; color: #6b7280;">Amministratore</div>
            </div>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
            </svg>
        </button>
        
        <!-- User Dropdown Menu -->
        <div style="position: absolute; top: 100%; right: 0; margin-top: 4px; background: white; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); min-width: 200px; z-index: 10;">
            <div style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
                <div style="font-weight: 600; color: #111827;">Mario Rossi</div>
                <div style="font-size: 12px; color: #6b7280;">mario.rossi@esempio.com</div>
            </div>
            <a href="#" style="display: flex; align-items: center; gap: 8px; padding: 8px 12px; text-decoration: none; color: #374151; font-size: 14px; border-bottom: 1px solid #f3f4f6;">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
                Il Mio Profilo
            </a>
            <a href="#" style="display: flex; align-items: center; gap: 8px; padding: 8px 12px; text-decoration: none; color: #374151; font-size: 14px; border-bottom: 1px solid #f3f4f6;">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"/>
                </svg>
                Impostazioni
            </a>
            <div style="height: 1px; background: #e5e7eb; margin: 4px 0;"></div>
            <a href="#" style="display: flex; align-items: center; gap: 8px; padding: 8px 12px; text-decoration: none; color: #374151; font-size: 14px;">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"/>
                </svg>
                Logout
            </a>
        </div>
    </div>
</div>

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

**🎨 Anteprima Renderizzata:**

<div style="position: relative; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 40px 20px; margin: 16px 0;">
    <div style="display: flex; gap: 20px; align-items: center; justify-content: center;">
        <!-- Tooltip Top -->
        <div style="position: relative;">
            <button style="background: #6b7280; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
                </svg>
            </button>
            <div style="position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 8px; background: #1f2937; color: white; padding: 8px 12px; border-radius: 6px; font-size: 12px; white-space: nowrap; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                Questo pulsante mostra informazioni aggiuntive
                <div style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid #1f2937;"></div>
            </div>
        </div>
        
        <!-- Tooltip Right -->
        <div style="position: relative;">
            <span style="background: #3b82f6; color: white; padding: 4px 8px; border-radius: 50%; font-size: 12px; font-weight: 600; cursor: help;">?</span>
            <div style="position: absolute; top: 50%; left: 100%; transform: translateY(-50%); margin-left: 8px; background: #1f2937; color: white; padding: 8px 12px; border-radius: 6px; font-size: 12px; white-space: nowrap; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                <strong>Informazione Importante</strong><br>
                Questo campo è obbligatorio per completare la registrazione.
                <div style="position: absolute; top: 50%; right: 100%; transform: translateY(-50%); width: 0; height: 0; border-top: 6px solid transparent; border-bottom: 6px solid transparent; border-right: 6px solid #1f2937;"></div>
            </div>
        </div>
        
        <!-- Tooltip Bottom -->
        <div style="position: relative;">
            <svg width="20" height="20" fill="#9ca3af" viewBox="0 0 20 20" style="cursor: help;">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"/>
            </svg>
            <div style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); margin-top: 8px; background: #1f2937; color: white; padding: 8px 12px; border-radius: 6px; font-size: 12px; white-space: nowrap; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                Clicca per maggiori informazioni su questa funzionalità
                <div style="position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-bottom: 6px solid #1f2937;"></div>
            </div>
        </div>
    </div>
</div>

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

**🎨 Anteprima Renderizzata:**

<div style="position: relative; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 40px 20px; margin: 16px 0;">
    <div style="display: flex; gap: 20px; align-items: center; justify-content: center;">
        <!-- Success Tooltip -->
        <div style="position: relative;">
            <button style="background: #10b981; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Salva</button>
            <div style="position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 8px; background: #10b981; color: white; padding: 8px 12px; border-radius: 6px; font-size: 12px; white-space: nowrap; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                I dati verranno salvati nel database
                <div style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid #10b981;"></div>
            </div>
        </div>
        
        <!-- Warning Tooltip -->
        <div style="position: relative;">
            <button style="background: #f59e0b; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Attenzione</button>
            <div style="position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 8px; background: #f59e0b; color: white; padding: 8px 12px; border-radius: 6px; font-size: 12px; white-space: nowrap; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                Questa azione richiede conferma
                <div style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid #f59e0b;"></div>
            </div>
        </div>
        
        <!-- Error Tooltip -->
        <div style="position: relative;">
            <button style="background: #ef4444; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Elimina</button>
            <div style="position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 8px; background: #ef4444; color: white; padding: 8px 12px; border-radius: 6px; font-size: 12px; white-space: nowrap; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                Attenzione: questa azione è irreversibile
                <div style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid #ef4444;"></div>
            </div>
        </div>
    </div>
</div>

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

**🎨 Anteprima Renderizzata:**

<div style="position: relative; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 16px 0;">
    <div style="position: fixed; top: 20px; right: 20px; z-index: 1000; display: flex; flex-direction: column; gap: 12px; max-width: 400px;">
        <!-- Success Toast -->
        <div style="background: white; border: 1px solid #d1fae5; border-left: 4px solid #10b981; border-radius: 8px; padding: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); display: flex; align-items: flex-start; gap: 12px;">
            <svg width="20" height="20" fill="#10b981" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
            </svg>
            <div style="flex: 1;">
                <div style="font-weight: 600; color: #065f46; margin-bottom: 4px;">Operazione Completata!</div>
                <p style="margin: 0; color: #047857; font-size: 14px;">I dati sono stati salvati correttamente nel database.</p>
            </div>
            <button style="background: none; border: none; color: #6b7280; cursor: pointer; padding: 2px;">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                </svg>
            </button>
        </div>
        
        <!-- Warning Toast -->
        <div style="background: white; border: 1px solid #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); display: flex; align-items: flex-start; gap: 12px;">
            <svg width="20" height="20" fill="#f59e0b" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"/>
            </svg>
            <div style="flex: 1;">
                <div style="font-weight: 600; color: #92400e; margin-bottom: 4px;">Attenzione!</div>
                <p style="margin: 0; color: #b45309; font-size: 14px;">Alcuni campi potrebbero non essere stati salvati.</p>
            </div>
            <button style="background: none; border: none; color: #6b7280; cursor: pointer; padding: 2px;">×</button>
        </div>
        
        <!-- Error Toast -->
        <div style="background: white; border: 1px solid #fecaca; border-left: 4px solid #ef4444; border-radius: 8px; padding: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); display: flex; align-items: flex-start; gap: 12px;">
            <svg width="20" height="20" fill="#ef4444" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
            </svg>
            <div style="flex: 1;">
                <div style="font-weight: 600; color: #991b1b; margin-bottom: 4px;">Errore di Connessione!</div>
                <p style="margin: 0; color: #dc2626; font-size: 14px;">Impossibile connettersi al server. Riprova più tardi.</p>
            </div>
            <button style="background: none; border: none; color: #6b7280; cursor: pointer; padding: 2px;">×</button>
        </div>
        
        <!-- Info Toast -->
        <div style="background: white; border: 1px solid #bfdbfe; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); display: flex; align-items: flex-start; gap: 12px;">
            <svg width="20" height="20" fill="#3b82f6" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/>
            </svg>
            <div style="flex: 1;">
                <div style="font-weight: 600; color: #1e40af; margin-bottom: 4px;">Nuova Funzionalità!</div>
                <p style="margin: 0; color: #2563eb; font-size: 14px;">È disponibile una nuova versione dell'applicazione.</p>
            </div>
            <button style="background: none; border: none; color: #6b7280; cursor: pointer; padding: 2px;">×</button>
        </div>
    </div>
</div>

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
        </div>
    </div>
</div>
\`\`\`

**🎨 Anteprima Renderizzata:**

<div style="position: relative; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 16px 0;">
    <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <!-- Card Header -->
        <div style="padding: 20px; border-bottom: 1px solid #e5e7eb;">
            <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #111827;">Impostazioni Utente</h3>
        </div>
        
        <!-- Tab Navigation -->
        <div style="border-bottom: 1px solid #e5e7eb;">
            <div style="display: flex; padding: 0 20px;">
                <button style="background: none; border: none; padding: 12px 16px; border-bottom: 2px solid #2563eb; color: #2563eb; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                    </svg>
                    Profilo
                </button>
                <button style="background: none; border: none; padding: 12px 16px; border-bottom: 2px solid transparent; color: #6b7280; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                    Sicurezza
                </button>
                <button style="background: none; border: none; padding: 12px 16px; border-bottom: 2px solid transparent; color: #6b7280; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    Notifiche
                </button>
                <button style="background: none; border: none; padding: 12px 16px; border-bottom: 2px solid transparent; color: #6b7280; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    </svg>
                    Fatturazione
                </button>
            </div>
        </div>
        
        <!-- Tab Content -->
        <div style="padding: 24px;">
            <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Informazioni Personali</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                <div>
                    <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 6px;">Nome</label>
                    <input style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px;" value="Mario" />
                </div>
                <div>
                    <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 6px;">Cognome</label>
                    <input style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px;" value="Rossi" />
                </div>
                <div>
                    <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 6px;">Email</label>
                    <input style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px;" value="mario.rossi@esempio.com" />
                </div>
                <div>
                    <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 6px;">Telefono</label>
                    <input style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px;" value="+39 123 456 7890" />
                </div>
            </div>
            <div>
                <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 6px;">Bio</label>
                <textarea style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; resize: vertical;" rows="3" placeholder="Scrivi qualcosa su di te..."></textarea>
            </div>
        </div>
    </div>
</div>

---

*Documentazione aggiornata al 2024 - Admin Framework CSS v1.0.0*

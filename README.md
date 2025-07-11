# Admin Dashboard CSS Framework

Un framework CSS completo e modulare per la creazione di dashboard di amministrazione utenti moderne e responsive.

## 🚀 Caratteristiche

- **Modulare**: Componenti CSS separati e riutilizzabili
- **Responsive**: Design ottimizzato per desktop, tablet e mobile
- **Accessibile**: Supporto per screen reader e navigazione da tastiera
- **Temi**: Supporto per modalità chiara e scura
- **Personalizzabile**: Variabili CSS per facile customizzazione
- **Leggero**: CSS ottimizzato senza dipendenze esterne

## 📁 Struttura del Framework

\`\`\`
css/
├── variables.css      # Variabili CSS e temi
├── base.css          # Stili base e tipografia
├── layout.css        # Layout principale e sidebar
├── components.css    # Componenti UI
├── utilities.css     # Classi utility
└── admin-framework.css # File completo (importa tutti)

examples/
├── dashboard.html    # Esempio dashboard completa
└── user-form.html   # Esempio form utente
\`\`\`

## 🎨 Componenti Inclusi

### Layout
- **Sidebar**: Collassabile con navigazione
- **Header**: Barra superiore con controlli
- **Main Content**: Area contenuto principale
- **Responsive**: Adattamento automatico mobile

### Componenti UI
- **Cards**: Contenitori per contenuti
- **Tables**: Tabelle dati responsive
- **Forms**: Input, select, textarea, checkbox
- **Buttons**: Vari stili e dimensioni
- **Badges**: Etichette colorate
- **Alerts**: Messaggi di notifica
- **Stats Cards**: Carte statistiche
- **Pagination**: Navigazione pagine

### Utility
- **Grid System**: Sistema griglia flessibile
- **Spacing**: Margin e padding
- **Typography**: Classi tipografiche
- **Colors**: Palette colori
- **Display**: Controlli visualizzazione
- **Flexbox**: Utility flexbox

## 🛠️ Installazione

### Opzione 1: File Singolo
\`\`\`html
<link rel="stylesheet" href="css/admin-framework.css">
\`\`\`

### Opzione 2: Modulare
\`\`\`html
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/utilities.css">
\`\`\`

## 📖 Utilizzo Base

### Struttura HTML Base
\`\`\`html
<div class="admin-layout">
  <aside class="admin-sidebar">
    <!-- Sidebar content -->
  </aside>
  
  <main class="admin-main">
    <header class="admin-header">
      <!-- Header content -->
    </header>
    
    <div class="admin-content">
      <!-- Main content -->
    </div>
  </main>
</div>
\`\`\`

### Card Componente
\`\`\`html
<div class="admin-card">
  <div class="admin-card-header">
    <h2 class="admin-card-title">Titolo</h2>
    <p class="admin-card-subtitle">Sottotitolo</p>
  </div>
  <div class="admin-card-body">
    <!-- Contenuto -->
  </div>
</div>
\`\`\`

### Form Elementi
\`\`\`html
<div class="admin-form-group">
  <label class="admin-form-label">Nome</label>
  <input type="text" class="admin-form-input" placeholder="Inserisci nome">
  <div class="admin-form-help">Testo di aiuto</div>
</div>
\`\`\`

### Buttons
\`\`\`html
<button class="admin-btn admin-btn-primary">Primario</button>
<button class="admin-btn admin-btn-secondary">Secondario</button>
<button class="admin-btn admin-btn-success">Successo</button>
<button class="admin-btn admin-btn-danger">Pericolo</button>
\`\`\`

## 🎨 Personalizzazione

### Variabili CSS Principali
\`\`\`css
:root {
  --primary: #2563eb;
  --success: #059669;
  --warning: #d97706;
  --danger: #dc2626;
  --sidebar-width: 16rem;
  --header-height: 4rem;
}
\`\`\`

### Tema Scuro
\`\`\`html
<body data-theme="dark">
\`\`\`

### Colori Personalizzati
\`\`\`css
:root {
  --primary: #your-color;
  --primary-hover: #your-hover-color;
  --primary-light: #your-light-color;
}
\`\`\`

## 📱 Responsive Design

Il framework include breakpoint responsive:
- **Mobile**: < 640px
- **Tablet**: < 768px  
- **Desktop**: < 1024px
- **Large**: > 1024px

### Classi Responsive
\`\`\`html
<div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- Responsive grid -->
</div>
\`\`\`

## ♿ Accessibilità

- Supporto screen reader
- Navigazione da tastiera
- Contrasto colori WCAG AA
- Attributi ARIA appropriati
- Focus visibile

## 🌐 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📝 Esempi

Vedi la cartella `examples/` per:
- Dashboard completa con sidebar e statistiche
- Form di gestione utenti
- Tabelle dati responsive
- Componenti UI vari

## 🤝 Contribuire

1. Fork del progetto
2. Crea feature branch
3. Commit delle modifiche
4. Push al branch
5. Apri Pull Request

## 📄 Licenza

MIT License - vedi file LICENSE per dettagli

## 🆘 Supporto

Per domande o problemi:
- Apri un issue su GitHub
- Consulta la documentazione
- Controlla gli esempi inclusi

---

**Admin Dashboard CSS Framework** - Creato per sviluppatori che vogliono dashboard moderne e funzionali senza complessità inutili.

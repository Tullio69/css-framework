/**
 * Admin Dashboard Framework JavaScript
 * Funzioni JavaScript per i componenti UI avanzati
 */

class AdminFramework {
  constructor() {
    this.init()
  }

  init() {
    this.setupEventListeners()
    this.setupKeyboardShortcuts()
  }

  // Event Listeners Setup
  setupEventListeners() {
    // Close dropdowns when clicking outside
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".admin-dropdown")) {
        this.closeAllDropdowns()
      }
    })

    // Close modals when clicking overlay
    document.querySelectorAll(".admin-modal-overlay").forEach((overlay) => {
      overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
          this.closeModal(overlay.id)
        }
      })
    })

    // Auto-close toasts
    this.setupToastAutoClose()
  }

  // Keyboard Shortcuts
  setupKeyboardShortcuts() {
    document.addEventListener("keydown", (event) => {
      // ESC to close modals and dropdowns
      if (event.key === "Escape") {
        this.closeAllModals()
        this.closeAllDropdowns()
      }

      // Ctrl/Cmd + K for search (if search exists)
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault()
        const searchInput = document.querySelector(".admin-search-input")
        if (searchInput) {
          searchInput.focus()
        }
      }
    })
  }

  // Sidebar Functions
  toggleSidebar() {
    const sidebar = document.querySelector(".admin-sidebar")
    const overlay = document.querySelector(".admin-sidebar-overlay")

    if (window.innerWidth <= 768) {
      // Mobile behavior
      sidebar?.classList.toggle("mobile-open")
      overlay?.classList.toggle("active")
    } else {
      // Desktop behavior
      sidebar?.classList.toggle("collapsed")
    }
  }

  // Dropdown Functions
  toggleDropdown(id) {
    const dropdown = document.getElementById(id)
    if (!dropdown) return

    const isActive = dropdown.classList.contains("active")

    // Close all dropdowns
    this.closeAllDropdowns()

    // Toggle current dropdown
    if (!isActive) {
      dropdown.classList.add("active")
      dropdown.querySelector(".admin-dropdown-toggle")?.classList.add("active")
    }
  }

  closeAllDropdowns() {
    document.querySelectorAll(".admin-dropdown").forEach((dropdown) => {
      dropdown.classList.remove("active")
      dropdown.querySelector(".admin-dropdown-toggle")?.classList.remove("active")
    })
  }

  // Modal Functions
  openModal(id) {
    const modal = document.getElementById(id)
    if (!modal) return

    modal.classList.add("active")
    document.body.style.overflow = "hidden"

    // Focus first focusable element
    const focusable = modal.querySelector("input, button, textarea, select")
    focusable?.focus()
  }

  closeModal(id) {
    const modal = document.getElementById(id)
    if (!modal) return

    modal.classList.remove("active")
    document.body.style.overflow = ""
  }

  closeAllModals() {
    document.querySelectorAll(".admin-modal-overlay.active").forEach((modal) => {
      this.closeModal(modal.id)
    })
  }

  // Tab Functions
  switchTab(event, tabId) {
    const tabContainer = event.target.closest(".admin-tabs")
    if (!tabContainer) return

    // Remove active class from all tabs and panels in this container
    tabContainer.querySelectorAll(".admin-tab-button").forEach((tab) => {
      tab.classList.remove("active")
    })

    const tabContent = tabContainer.nextElementSibling
    if (tabContent) {
      tabContent.querySelectorAll(".admin-tab-panel").forEach((panel) => {
        panel.classList.remove("active")
      })
    }

    // Add active class to clicked tab and corresponding panel
    event.target.classList.add("active")
    const panel = document.getElementById(tabId)
    panel?.classList.add("active")
  }

  // Accordion Functions
  toggleAccordion(header) {
    const content = header.nextElementSibling
    const accordion = header.closest(".admin-accordion")
    const isActive = header.classList.contains("active")

    // If single-open accordion, close all others
    if (accordion?.dataset.single !== "false") {
      accordion.querySelectorAll(".admin-accordion-header").forEach((h) => {
        if (h !== header) {
          h.classList.remove("active")
          h.nextElementSibling?.classList.remove("active")
        }
      })
    }

    // Toggle current item
    if (isActive) {
      header.classList.remove("active")
      content?.classList.remove("active")
    } else {
      header.classList.add("active")
      content?.classList.add("active")
    }
  }

  // Toast Functions
  showToast(type = "info", title = "", message = "", duration = 5000) {
    const container = this.getToastContainer()
    const toast = this.createToastElement(type, title, message)

    container.appendChild(toast)

    // Show toast with animation
    requestAnimationFrame(() => {
      toast.classList.add("show")
    })

    // Auto remove
    if (duration > 0) {
      setTimeout(() => {
        this.removeToast(toast)
      }, duration)
    }

    return toast
  }

  createToastElement(type, title, message) {
    const toast = document.createElement("div")
    toast.className = `admin-toast ${type}`

    const iconMap = {
      success:
        '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>',
      warning:
        '<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>',
      error:
        '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>',
      info: '<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>',
    }

    toast.innerHTML = `
            <svg class="admin-toast-icon" fill="currentColor" viewBox="0 0 20 20">
                ${iconMap[type] || iconMap.info}
            </svg>
            <div class="admin-toast-content">
                <div class="admin-toast-title">${title}</div>
                <p class="admin-toast-message">${message}</p>
            </div>
            <button class="admin-toast-close" onclick="adminFramework.removeToast(this.closest('.admin-toast'))">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
            </button>
        `

    return toast
  }

  getToastContainer() {
    let container = document.getElementById("toastContainer")
    if (!container) {
      container = document.createElement("div")
      container.id = "toastContainer"
      container.className = "admin-toast-container"
      document.body.appendChild(container)
    }
    return container
  }

  removeToast(toast) {
    if (!toast) return

    toast.classList.remove("show")
    setTimeout(() => {
      toast.remove()
    }, 300)
  }

  setupToastAutoClose() {
    // Auto-close toasts when clicking close button
    document.addEventListener("click", (event) => {
      if (event.target.closest(".admin-toast-close")) {
        const toast = event.target.closest(".admin-toast")
        this.removeToast(toast)
      }
    })
  }

  // Progress Bar Functions
  setProgress(selector, percentage, animated = true) {
    const progressBar = document.querySelector(selector)
    if (!progressBar) return

    if (animated) {
      progressBar.style.transition = "width 0.3s ease"
    }
    progressBar.style.width = `${Math.min(100, Math.max(0, percentage))}%`
  }

  // Toggle Switch Functions
  toggleSwitch(input) {
    const event = new Event("change", { bubbles: true })
    input.dispatchEvent(event)
  }

  // Loading Functions
  showLoading(element, text = "Caricamento...") {
    if (!element) return

    const loadingHTML = `
            <div class="admin-loading">
                <div class="admin-spinner"></div>
                <span>${text}</span>
            </div>
        `

    element.dataset.originalContent = element.innerHTML
    element.innerHTML = loadingHTML
    element.disabled = true
  }

  hideLoading(element) {
    if (!element || !element.dataset.originalContent) return

    element.innerHTML = element.dataset.originalContent
    element.disabled = false
    delete element.dataset.originalContent
  }

  // Utility Functions
  debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  throttle(func, limit) {
    let inThrottle
    return function () {
      const args = arguments
      
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }

  // Form Validation
  validateForm(form) {
    const inputs = form.querySelectorAll("input[required], select[required], textarea[required]")
    let isValid = true

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        this.showFieldError(input, "Questo campo è obbligatorio")
        isValid = false
      } else {
        this.clearFieldError(input)
      }
    })

    return isValid
  }

  showFieldError(input, message) {
    this.clearFieldError(input)

    input.classList.add("error")
    const errorDiv = document.createElement("div")
    errorDiv.className = "admin-form-error"
    errorDiv.textContent = message

    input.parentNode.appendChild(errorDiv)
  }

  clearFieldError(input) {
    input.classList.remove("error")
    const errorDiv = input.parentNode.querySelector(".admin-form-error")
    if (errorDiv) {
      errorDiv.remove()
    }
  }

  // Theme Functions
  setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("admin-theme", theme)
  }

  getTheme() {
    return localStorage.getItem("admin-theme") || "light"
  }

  toggleTheme() {
    const currentTheme = this.getTheme()
    const newTheme = currentTheme === "light" ? "dark" : "light"
    this.setTheme(newTheme)
    return newTheme
  }

  // Initialize theme on load
  initTheme() {
    const savedTheme = this.getTheme()
    this.setTheme(savedTheme)
  }
}

// Initialize the framework
const adminFramework = new AdminFramework()

// Global functions for backward compatibility
function toggleSidebar() {
  adminFramework.toggleSidebar()
}

function toggleDropdown(id) {
  adminFramework.toggleDropdown(id)
}

function openModal(id) {
  adminFramework.openModal(id)
}

function closeModal(id) {
  adminFramework.closeModal(id)
}

function switchTab(event, tabId) {
  adminFramework.switchTab(event, tabId)
}

function toggleAccordion(header) {
  adminFramework.toggleAccordion(header)
}

function showToast(type, title, message, duration) {
  return adminFramework.showToast(type, title, message, duration)
}

// Export for module systems
if (typeof module !== "undefined" && module.exports) {
  module.exports = AdminFramework
}

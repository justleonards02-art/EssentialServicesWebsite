/* Quote Form JavaScript */

class QuoteForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            this.setupFormValidation();
        }
    }

    setupFormValidation() {
        const inputs = this.form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('focus', () => this.clearFieldError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        
        if (!value) {
            this.showFieldError(field, 'This field is required');
            return false;
        }

        if (field.type === 'email' && !this.isValidEmail(value)) {
            this.showFieldError(field, 'Please enter a valid email');
            return false;
        }

        if (field.type === 'tel' && value && !this.isValidPhone(value)) {
            this.showFieldError(field, 'Please enter a valid phone number');
            return false;
        }

        this.clearFieldError(field);
        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPhone(phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
    }

    showFieldError(field, message) {
        this.clearFieldError(field);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #dc2626;
            font-size: 0.85rem;
            margin-top: 0.25rem;
            display: block;
        `;

        field.parentNode.appendChild(errorDiv);
        field.style.borderColor = '#dc2626';
        field.style.backgroundColor = '#fef2f2';
    }

    clearFieldError(field) {
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
        field.style.borderColor = '';
        field.style.backgroundColor = '';
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input, select, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.validateForm()) {
            return;
        }

        // Get form data
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name') || this.form.querySelector('input[placeholder*="Name"]')?.value,
            email: formData.get('email') || this.form.querySelector('input[placeholder*="Email"]')?.value,
            phone: formData.get('phone') || this.form.querySelector('input[placeholder*="Phone"]')?.value,
            service: formData.get('service') || this.form.querySelector('select')?.value,
            message: formData.get('message') || this.form.querySelector('textarea')?.value
        };

        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate sending (in production, this would send to a server)
        setTimeout(() => {
            this.showSuccessMessage();
            this.form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    }

    showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div style="
                background: #d1fae5;
                border: 2px solid #10b981;
                color: #047857;
                padding: 1rem;
                border-radius: 10px;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                gap: 1rem;
            ">
                <span style="font-size: 1.5rem;">✓</span>
                <div>
                    <strong>Thank you!</strong>
                    <p>Your message has been sent successfully. We will contact you soon.</p>
                </div>
            </div>
        `;

        this.form.parentNode.insertBefore(successDiv, this.form);

        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                successDiv.remove();
            }, 300);
        }, 5000);
    }
}

// Initialize form on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('contactForm')) {
        new QuoteForm();
    }
});

// Add fade-out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

console.log('Quote form functionality loaded!');
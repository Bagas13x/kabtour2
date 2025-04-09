document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.faq-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            
            faqItem.classList.toggle('active');
            
            this.textContent = faqItem.classList.contains('active') ? '×' : '+';
        });
    });
    
    document.querySelectorAll('.faq-header').forEach(header => {
        header.addEventListener('click', function(event) {
            if (!event.target.classList.contains('faq-toggle')) {
                const faqItem = this.closest('.faq-item');
                const toggleButton = faqItem.querySelector('.faq-toggle');
                
                faqItem.classList.toggle('active');

                toggleButton.textContent = faqItem.classList.contains('active') ? '×' : '+';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // ======== NEW: FORM SUBMISSION (AJAX) LOGIC ========
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success-message');

    // Only run this code if the contact form exists on the page
    if (contactForm && successMessage) {
        
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // This stops the default redirect

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            
            // Get language for loading text
            const lang = document.documentElement.lang || 'en';
            const sendingText = (lang === 'fr') ? 'Envoi...' : 'Sending...';

            // Disable button and show loading text
            submitButton.disabled = true;
            submitButton.innerHTML = sendingText;

            const formData = new FormData(contactForm);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData,
                });

                const result = await response.json();

                if (result.success) {
                    // Success!
                    contactForm.style.display = 'none'; // Hide the form
                    successMessage.style.display = 'block'; // Show the success message
                    
                    // Trigger the form's reset event (which clears all fields)
                    contactForm.reset(); 
                } else {
                    // Error from Web3Forms
                    console.error('Submission Error:', result);
                    alert(result.message || 'An error occurred. Please try again.');
                    // Re-enable the button
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                }
            } catch (error) {
                // Network error
                console.error('Fetch Error:', error);
                alert('An error occurred. Please check your network and try again.');
                // Re-enable the button
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }
        });
    }

    // ======== FILE UPLOADER LOGIC (with one modification) ========
    document.querySelectorAll('.file-drop-area').forEach(dropArea => {
        const fileInput = dropArea.querySelector('input[type="file"]');
        const filePreviewList = dropArea.nextElementSibling;
        const form = dropArea.closest('form'); // Get the parent form
        
        let storedFiles = []; 

        dropArea.addEventListener('click', (e) => {
            if (!e.target.classList.contains('remove-file-btn')) {
                fileInput.click();
            }
        });
        
        fileInput.addEventListener('click', (e) => {
            e.target.value = null; 
            e.stopPropagation();
        });

        fileInput.addEventListener('change', () => {
            if (fileInput.files.length > 0) {
                addFiles(fileInput.files);
            }
        });

        dropArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropArea.classList.add('drag-over');
        });

        dropArea.addEventListener('dragleave', () => {
            dropArea.classList.remove('drag-over');
        });

        dropArea.addEventListener('drop', (e) => {
            e.preventDefault();
            dropArea.classList.remove('drag-over');
            const files = e.dataTransfer.files;
            addFiles(files);
        });
        
        // **NEW: Listen for the form's reset event**
        // This clears the file list when contactForm.reset() is called on success
        if (form) {
            form.addEventListener('reset', () => {
                storedFiles = [];
                updateFileList();
            });
        }

        function addFiles(files) {
            let newFilesAdded = false;
            Array.from(files).forEach(file => {
                if (isValidFile(file)) {
                    if (!storedFiles.some(f => f.name === file.name && f.size === file.size)) {
                         storedFiles.push(file);
                         newFilesAdded = true;
                    }
                }
            });
            
            if (newFilesAdded) {
                updateFileList();
                updateInput();
            }
        }

        function isValidFile(file) {
            const allowedTypes = ['image/jpeg', 'image/png'];
            return allowedTypes.includes(file.type);
        }

        function updateFileList() {
            filePreviewList.innerHTML = '';
            
            storedFiles.forEach((file, index) => {
                const item = document.createElement('div');
                item.className = 'file-preview-item';
                
                item.innerHTML = `
                    <div class="file-info">
                        <span class="file-name">${file.name}</span>
                        <span class="file-size">(${formatFileSize(file.size)})</span>
                    </div>
                    <button type="button" class="remove-file-btn" data-index="${index}" title="Remove file">&times;</button>
                `;
                filePreviewList.appendChild(item);
            });
            
            filePreviewList.querySelectorAll('.remove-file-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const index = parseInt(e.target.getAttribute('data-index'));
                    removeFile(index);
                });
            });
        }

        function removeFile(index) {
            storedFiles.splice(index, 1);
            updateFileList();
            updateInput();
            fileInput.value = null;
        }

        function updateInput() {
            const dataTransfer = new DataTransfer();
            storedFiles.forEach(file => {
                dataTransfer.items.add(file);
            });
            fileInput.files = dataTransfer.files;
        }

        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }
    });
});
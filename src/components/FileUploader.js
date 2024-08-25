import React, { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

// Register plugins if needed
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function FileUploader() {
	const [files, setFiles] = useState([]);

	const getPresignedUrl = async (file) => {
		try {
			const response = await fetch(`https://api.web3forms.com/upload?file=${file.name}`);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Error generating pre-signed URL:', error);
			throw error;
		}
	};

	return (
		<FilePond
			files={files}
			onupdatefiles={setFiles}
			allowMultiple={true}
			maxFiles={3}
			name='attachment'
			labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
			server={{
				process: async (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
					try {
						const { url, key } = await getPresignedUrl(file);

						const response = await fetch(url, {
							method: 'PUT',
							body: file,
							headers: {
								'Content-Type': file.type,
							},
						});

						if (response.ok) {
							load(key);
						} else {
							error('Upload failed');
						}
					} catch (err) {
						error('Error uploading file');
					}
				},
			}}
		/>
	);
}

export default FileUploader;

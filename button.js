const handleCopyTitle = () => {
    const title = document.getElementById('main-title').innerText;
    const viewCount = document.getElementById('view-count').innerText;

    const count = document.getElementById('read-count');
    count.innerText = parseInt(count.innerText) + 1;

    const newDiv = document.createElement('div');
    newDiv.classList.add('flex', 'justify-between', 'items-center', 'bg-white', 'p-4', 'rounded-2xl', 'mt-5');

    newDiv.innerHTML = `
        <p class="font-semibold text-base" id="new-title">${title}</p>
        <div class="flex gap-3 items-center">
            <svg width="22.500000" height="15.500000" viewBox="0 0 22.5 15.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs/>
                <path id="Vector" d="M9.60009 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.53772 12.8999 6.1001C12.4623 5.66248 11.8688 5.41663 11.25 5.41663C10.6312 5.41663 10.0377 5.66248 9.60009 6.1001C9.1625 6.53772 8.91667 7.1311 8.91667 7.75C8.91667 8.3689 9.1625 8.96228 9.60009 9.3999ZM11.25 14.75C7.05 14.75 3.55 12.4166 0.75 7.75C3.55 3.08337 7.05 0.75 11.25 0.75C15.45 0.75 18.95 3.08337 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
            </svg>
            <p id="new-view">${viewCount}</p>
        </div>
    `;

    document.getElementById('title-container').appendChild(newDiv);
}

document.getElementById('title-copy').addEventListener('click', handleCopyTitle);




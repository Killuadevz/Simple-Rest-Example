document.getElementById('fetchUsers').addEventListener('click', () => {
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById('userList');
            userList.innerHTML = ''; 

            data.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `${user.name} - ${user.email}`;
                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erro ao buscar os usuários:', error));
});

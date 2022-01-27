document.addEventListener('DOMContentLoaded', () => {

})

fetch('http://localhost:3000/dogs')
.then(function(response) {
    return response.json();
}

fetch('http://localhost:3000/dogs') {
    method: 'PATCH',
    body: JSON.stringify,
    headers: {
        "content-type:" "application.json"
    }
})
.then(response => response.json())
.then(console.log(json))
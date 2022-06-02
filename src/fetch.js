const dogURL = 'http://localhost:3000/dogs';

function getAllDogs() {
    return fetch(dogURL)
    .then(r => r.json())
}

function updateDog(id, updatedDog) {
    return fetch(dogURL + `/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(updatedDog)
    })
    .then(r => r.json())
}
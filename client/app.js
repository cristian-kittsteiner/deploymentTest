fetch("http://localhost:3000/api/movies")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    });
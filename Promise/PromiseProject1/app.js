const url = "https://api.freeapi.app/api/v1/public/randomusers";

fetch(url)
    .then((response) => response.json())
    .then((obj) => {
        const productData = obj.data.data;
        console.log(productData);

        productData.forEach((e) => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");

            let h3 = document.createElement("h3");
            h3.innerText = `${e.name.title}. ${e.name.first} ${e.name.last}`;

            let createElementGender = document.createElement("h4");
            createElementGender.textContent = `Gender: ${e.gender}`;

            let createElementAge = document.createElement("h4");
            createElementAge.textContent = `Age: ${e.dob.age}`;

            let createElementPhone = document.createElement("h4");
            createElementPhone.textContent = `Phone: ${e.phone}`;

            let createElementEmail = document.createElement("h4");
            createElementEmail.textContent = `Email: ${e.email}`;

            let createElementImage = document.createElement("img");
            createElementImage.src = e.picture.large; // Fixed key reference
            createElementImage.alt = `${e.name.first}'s Profile`;

            cardDiv.appendChild(createElementImage);
            cardDiv.appendChild(h3);
            cardDiv.appendChild(createElementAge);
            cardDiv.appendChild(createElementPhone);
            cardDiv.appendChild(createElementGender);
            cardDiv.appendChild(createElementEmail);

            document.body.appendChild(cardDiv);
        });
    })
    .catch((error) => console.error("Error fetching data:", error));

document.addEventListener("DOMContentLoaded", () => {
    const ageRange = document.getElementById("age");
    const ageValue = document.getElementById("age-value");
    const weightElement = document.getElementById("weight-value");
    const heightElement = document.getElementById("height-value");
    const submit = document.getElementById("submit");
    const result = document.querySelector(".result-data");
    const resultTips = document.querySelector(".result-data1");

    let weight = parseInt(weightElement.innerText);
    let height = parseInt(heightElement.innerText);
    let selectedGender = "Not Selected"; 
    let weightUnit = "kg";  
    let heightUnit = "cm";  

    ageRange.addEventListener("input", () => {
        ageValue.textContent = ageRange.value;
    });

    document.querySelectorAll('input[name="gender"]').forEach(button => {
        button.addEventListener("click", (e) => {
            selectedGender = e.target.id; 
        });
    });

    document.querySelectorAll(".btn-add-weight").forEach(button => {
        button.addEventListener("click", () => {
            weight += 1;
            weightElement.innerText = weight;
        });
    });

    document.querySelectorAll(".btn-sub-weight").forEach(button => {
        button.addEventListener("click", () => {
            if (weight > 1) {
                weight -= 1;
                weightElement.innerText = weight;
            }
        });
    });

    document.querySelectorAll(".btn-add-height").forEach(button => {
        button.addEventListener("click", () => {
            height += 1;
            heightElement.innerText = height;
        });
    });

    document.querySelectorAll(".btn-sub-height").forEach(button => {
        button.addEventListener("click", () => {
            if (height > 1) {
                height -= 1;
                heightElement.innerText = height;
            }
        });
    });

    const weightUnitElement = document.getElementById("KG");
    document.querySelectorAll('input[name="unit-weight"]').forEach(button => {
        button.addEventListener("click", (e) => {
            if (e.target.id === "kg" && weightUnit !== "kg") {
                weight = weight / 1000; 
                weightElement.innerText = weight.toFixed(2);
                weightUnit = "kg";
            } else if (e.target.id === "g" && weightUnit !== "g") {
                weight = weight * 1000; 
                weightElement.innerText = weight.toFixed(0);
                weightUnit = "g";
            }
            weightUnitElement.innerText = weightUnit.toUpperCase();
        });
    });

    const heightUnitElement = document.getElementById("CM");
    document.querySelectorAll('input[name="unit-height"]').forEach(button => {
        button.addEventListener("click", (e) => {
            if (e.target.id === "cm" && heightUnit !== "cm") {
                height = height * 100;  
                heightUnit = "cm";
            } else if (e.target.id === "m" && heightUnit !== "m") {
                height = height / 100;  
                heightUnit = "m";
            }
            heightElement.innerText = height.toFixed(2);
            heightUnitElement.innerText = heightUnit.toUpperCase();
        });
    });

    function calculateBMI(weight, height, weightUnit, heightUnit) {
        let weightKg = weightUnit === "g" ? weight / 1000 : weight;  
        let heightM = heightUnit === "cm" ? height / 100 : height;  

        return weightKg / (heightM * heightM);
    }

    submit.addEventListener("click", () => {
        let BMI = calculateBMI(weight, height, weightUnit, heightUnit);
        let category = "";
        let tips = [];

        if (BMI < 18.5) {
            category = "Underweight";
            tips = [
                "Increase your calorie intake with healthy foods.",
                "Consume protein-rich foods like eggs, nuts, and dairy.",
                "Exercise to build muscle mass.",
                "Eat more frequently with balanced meals."
            ];
        } else if (BMI >= 18.5 && BMI < 25) {
            category = "Healthy Weight";
            tips = [
                "Maintain a balanced diet with proteins, carbs, and fats.",
                "Stay physically active for at least 30 minutes daily.",
                "Drink enough water and avoid sugary drinks.",
                "Monitor your weight regularly to stay in this range."
            ];
        } else if (BMI >= 25 && BMI < 30) {
            category = "Overweight";
            tips = [
                "Reduce sugar and processed food intake.",
                "Exercise regularly, at least 150 minutes per week.",
                "Increase fiber intake with fruits and vegetables.",
                "Monitor portion sizes and avoid overeating."
            ];
        } else if (BMI >= 30 && BMI < 35) {
            category = "Class 1 Obesity";
            tips = [
                "Follow a structured diet plan with a nutritionist.",
                "Engage in regular physical activity and strength training.",
                "Avoid fast food and high-calorie beverages.",
                "Consider professional health guidance if needed."
            ];
        } else if (BMI >= 35 && BMI < 40) {
            category = "Class 2 Obesity";
            tips = [
                "Consult a healthcare provider for weight management.",
                "Adopt a calorie-deficit diet with healthy foods.",
                "Increase physical activity levels daily.",
                "Stay consistent and track progress regularly."
            ];
        } else {
            category = "Class 3 Obesity";
            tips = [
                "Seek medical advice for a structured weight loss plan.",
                "Consider a low-calorie, high-nutrient diet.",
                "Engage in weight-loss-friendly exercises regularly.",
                "Monitor health conditions associated with obesity."
            ];
        }

        result.innerHTML = "";
        resultTips.innerHTML = "";

        let userInfo = document.createElement("p");
        userInfo.innerHTML = `<strong>Age:</strong> ${ageValue.innerText} years | <strong>Gender:</strong> ${selectedGender}`;

        let bmiElement = document.createElement("h1");
        bmiElement.innerText = `BMI: ${BMI.toFixed(2)}`;

        let bmiCategory = document.createElement("p");
        bmiCategory.innerText = category.toUpperCase();

        let tipsList = document.createElement("ul");
        tips.forEach(tip => {
            let li = document.createElement("li");
            li.innerText = tip;
            tipsList.appendChild(li);
        });

        result.appendChild(userInfo);
        result.appendChild(bmiElement);
        result.appendChild(bmiCategory);
        resultTips.appendChild(tipsList);
    });
});

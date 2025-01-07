document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    
    // Get user inputs
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (!weight || !height || height <= 0 || weight <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Display the result
    document.getElementById('result').style.display = 'block';
    document.getElementById('bmiResult').textContent = bmi.toFixed(2);

    // Determine BMI category
    let category = "";
    let statusClass = "";
    let statusText = "";

    if (bmi < 18.5) {
        category = "Underweight";
        statusClass = "blue";
        statusText = "You are underweight. Please consult a doctor for advice on gaining weight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        statusClass = "green";
        statusText = "You are fit and healthy!";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        statusClass = "red";
        statusText = "You are overweight. Consider a healthy diet and exercise.";
    } else {
        category = "Obesity";
        statusClass = "red";
        statusText = "You are obese. Please consult a healthcare professional for guidance.";
    }

    document.getElementById('bmiCategory').textContent = category;
    document.getElementById('bmiStatusLink').textContent = statusText;
    document.getElementById('bmiStatusLink').className = statusClass;
});


document.getElementById("submit").addEventListener("click", function () {
    try {
        const pi = 3.14;
        let radius = document.getElementById("radius").value;
        if (radius === "") {
            alert("Please enter a radius.");
            throw new Error("Radius is empty");
        }
        radius = Number(radius);
        let area = pi * radius * radius;

        let circumference = 2 * pi * radius;

        let semiCircleArea = area / 2;

        let semiCircleCircumference = pi * radius + 2 * radius;
        document.getElementById("result").textContent = "Area, " + area + ", Circumference, " + circumference + ", Semi-Circle Area, " + semiCircleArea + ", Semi-Circle Circumference, " + semiCircleCircumference;
    } catch (error) {
        document.getElementById("result").textContent = "Error: " + error.message
    }
});



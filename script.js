document.getElementById("submit").addEventListener("click", function () {
    try {
        const pi = 3.14;
        const radiusInput = document.getElementById("radius");
        const resultElement = document.getElementById("result");

        let radius = radiusInput.value.trim();

        if (radius === "") {
            alert("Please enter a radius.");
            throw new Error("Radius is empty");
        }

        radius = Number(radius);
        if (isNaN(radius) || radius <= 0) {
            alert("Please enter a valid positive number.");
            throw new Error("Invalid radius");
        }

        const area = pi * radius * radius;
        const circumference = 2 * pi * radius;
        const semiCircleArea = area / 2;
        const semiCircleCircumference = pi * radius + 2 * radius;

        resultElement.textContent =
            `Area: ${area.toFixed(2)}, Circumference: ${circumference.toFixed(2)}, ` +
            `Semi-Circle Area: ${semiCircleArea.toFixed(2)}, Semi-Circle Circumference: ${semiCircleCircumference.toFixed(2)}`;
    } catch (error) {
        document.getElementById("result").textContent = "Error: " + error.message;
    }
});

document.getElementById("submit2").addEventListener("click", function () {
    const radiusInput = document.getElementById("radius");
    radiusInput.textContent = ""; // Clear unrelated output

    const sqSideInput = document.getElementById("sqSide");
    const result = document.getElementById("result");
    const sideValue = sqSideInput.value.trim();

    try {
        if (sideValue === "") {
            alert("Please enter a side length.");
            throw new Error("Side length is empty");
        }

        const sqSide = Number(sideValue);

        if (isNaN(sqSide) || sqSide <= 0) {
            alert("Please enter a valid positive number.");
            throw new Error("Invalid side length");
        }

        const sqArea = sqSide * sqSide;
        const sqPerimeter = 4 * sqSide;

        result.textContent = `Area: ${sqArea.toFixed(2)}, Perimeter: ${sqPerimeter.toFixed(2)}`;
    } catch (error) {
        result.textContent = "Error: " + error.message;
    }
});

document.getElementById("submit3").addEventListener("click", function () {

    const baseTriangleInput = document.getElementById("base");
    const heightTriangleInput = document.getElementById("height");
    const result = document.getElementById("result");
    const baseValue = baseTriangleInput.value.trim();
    const heightValue = heightTriangleInput.value.trim();
    try {
        if (baseValue === "" || heightValue === "") {
            alert("Please enter both base and height.");
            throw new Error("Base or height is empty");
        }

        const base = Number(baseValue);
        const height = Number(heightValue);

        if (isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
            alert("Please enter valid positive numbers.");
            throw new Error("Invalid base or height");
        }

        const triangleArea = (base * height) / 2;
        const trianglePerimeter = base + 2 * Math.sqrt((base * base) + (height * height));

        result.textContent = `Area: ${triangleArea.toFixed(2)}, Perimeter: ${trianglePerimeter.toFixed(2)}`;
    } catch (error) {
        result.textContent = "Error: " + error.message;
    }
}
);
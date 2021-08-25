let cars = ["BMW", "TOYOTA", "MERSEDES"];
let models = [["X5", "X6", "X7"], ["Prius", "Corolla", "Camry"], ["C300", "E350", "G55"]];
// let model_toy = ;
// let model_mer = ;
document.getElementById("arr").innerHTML += `<option selected="selected" disabled="disabled">Select car</option>`;
for (let i = 0; i < cars.length; i++) {
    // document.getElementById("arr").innerHTML += '<option value="1">${cars[i]}</option>';
    document.getElementById("arr").innerHTML += `<option>${cars[i]}</option>`;
}
function MyFuncion() {
    var model = document.getElementById("arr").value;
    document.getElementById("carmodels").style.display = "inline-block";
    document.getElementById("carmodels").innerHTML += `<option selected="selected" disabled="disabled">Select model</option>`;
    if (model == cars[0]) {
        for (let j = 0; j < models.length; j++) {
            document.getElementById("carmodels").innerHTML += `<option>${models[0][j]}</option>`;
        }
    }
    else if (model == cars[1]) {
        for (let j = 0; j < models.length; j++) {
            document.getElementById("carmodels").innerHTML += `<option>${models[1][j]}</option>`;
        }
    }
    else {
        for (let j = 0; j < models.length; j++) {
            document.getElementById("carmodels").innerHTML += `<option>${models[2][j]}</option>`;
        }
    }
}
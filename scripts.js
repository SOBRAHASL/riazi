function spread_numbers(array, range) {
    for (let i = 0; i < array.length; i++) {
        let random_number = Math.floor(Math.random() * (range + 1)).toString();
        if (i % 2 == 0) {
            array[i].textContent = random_number
        } else {
            if (random_number % 2 == 0) {
                array[i].textContent = "+";
            } else {
                array[i].textContent = "-";
            }
        }
    }
};

function check_numbers(array) {
    let count = 0, operation = "+";
    let label = document.querySelector("label");
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) { 
            number = parseInt(array[i].textContent);
            if (operation == "+") {
                count += number;
            } else {
                count -= number;
            }
        } else {
            operation = array[i].textContent
        }
    }
    if (document.querySelector("input").value == count) {
        label.textContent = "درست"; 
    } else {
        label.textContent = "غلط";
    }
};

window.addEventListener("DOMContentLoaded", function() {
    let h2 = document.querySelectorAll("h2");

    spread_numbers(h2, 20);

    document.querySelector("button").addEventListener("click", function() {
        check_numbers(h2);
        document.querySelector("input").value = "";
        spread_numbers(h2, 20);
    });
    document.querySelector("input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.querySelector("button").click();
        }
      });
      
})
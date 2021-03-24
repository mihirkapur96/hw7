const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan",
];
function autocomplete(text1, array) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    let country;
    /*execute a function when someone writes in the text field:*/
    text1.addEventListener("input", function (e) {
        let x, y, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        country = -1;
        /*create a DIV element that will contain the items (values):*/
        x = document.createElement("DIV");
        x.setAttribute("id", this.id + "autocomplete-list");
        x.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(x);
        /*for each item in the array...*/
        for (i = 0; i < array.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (array[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                y = document.createElement("DIV");
                /*make the matching letters bold:*/
                y.innerHTML = "<strong>" + array[i].substr(0, val.length) + "</strong>";
                y.innerHTML += array[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                y.innerHTML += "<input type='hidden' value='" + array[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                y.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    text1.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                x.appendChild(y);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    text1.addEventListener("keydown", function (e) {
        let a = document.getElementById(this.id + "autocomplete-list");
        if (a) a = a.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            country++;
            /*and and make the current item more visible:*/
            addActive(a);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            country--;
            /*and and make the current item more visible:*/
            addActive(a);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (country > -1) {
                /*and simulate a click on the "active" item:*/
                if (a) a[country].click();
            }
        }
    });
    function addActive(a) {
        /*a function to classify an item as "active":*/
        if (!a) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(a);
        if (country >= a.length) country = 0;
        if (country < 0) country = (a.length - 1);
        /*add class "autocomplete-active":*/
        a[country].classList.add("autocomplete-active");
    }
    function removeActive(a) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(element) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        let y = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < y.length; i++) {
            if (element != y[i] && element != text1) {
                y[i].parentNode.removeChild(y[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

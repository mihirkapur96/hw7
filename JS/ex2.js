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
    
    let country;
    text1.addEventListener("input", function (e) {
        let x, y, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        country = -1;
        x = document.createElement("DIV");
        x.setAttribute("id", this.id + "autocomplete-list");
        x.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(x);
        
        for (i = 0; i < array.length; i++) {
            if (array[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                y = document.createElement("DIV");
                y.innerHTML = "<strong>" + array[i].substr(0, val.length) + "</strong>";
                y.innerHTML += array[i].substr(val.length);
                y.innerHTML += "<input type='hidden' value='" + array[i] + "'>";
                y.addEventListener("click", function (e) {
                    text1.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                x.appendChild(y);
            }
        }
    });
    
    text1.addEventListener("keydown", function (e) {
        let a = document.getElementById(this.id + "autocomplete-list");
        if (a) a = a.getElementsByTagName("div");
        if (e.keyCode == 40) {
            country++;
            addActive(a);
        } else if (e.keyCode == 38) { //up
            country--;
            addActive(a);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (country > -1) {
                if (a) a[country].click();
            }
        }
    });
    function addActive(a) {
        if (!a) return false;
        removeActive(a);
        if (country >= a.length) country = 0;
        if (country < 0) country = (a.length - 1);
        a[country].classList.add("autocomplete-active");
    }
    function removeActive(a) {
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(element) {
        let y = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < y.length; i++) {
            if (element != y[i] && element != text1) {
                y[i].parentNode.removeChild(y[i]);
            }
        }
    }
    
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

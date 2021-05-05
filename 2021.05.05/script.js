const search = document.querySelector("[type=\"search\"]");
const list = document.getElementsByClassName("fruits")[0];

const setList = (arr, str = null) => {
    list.innerHTML = "";
    let newArr;
    // arr.forEach(fr => {
    //     list.innerHTML += `
    //         <li>${fr}</li>
    //     `;
    // });
    if (str) {
        let exp = new RegExp(str, "i")
        let searchFruits = arr.filter(fr => {
            console.log(str);
            console.log(exp.test(fr));
            if (exp.test(fr)) return fr;
        });
        newArr = searchFruits.map(el => `<li>${el}</li>`);
    } else {
        newArr = arr.map(el => `<li>${el}</li>`);
    }
    list.innerHTML = newArr.join("");
}

setList(fruits);

search.addEventListener("input", (e) => {
    setList(fruits, e.target.value);
})
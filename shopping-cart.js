document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#productArea").addEventListener("click", (e) => {
        e.preventDefault();
        let link = e.target;
        let date = link.dataset;
        let id = date.productId;
        let shoppingList = document.querySelector(".list");

        if (id) {
            let item = document.createElement("li");
            item.innerHTML = id;
            shoppingList.appendChild(item.innerHTML);
        }
    });
});

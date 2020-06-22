let tabs = document.querySelectorAll(".tab_section ul li");
let top3 = document.querySelector(".tops");
let top10 = document.querySelector(".top10");
let top20 = document.querySelector(".top20");
let threes = document.querySelector(".threes");
let items = document.querySelectorAll(".board_item");

tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
        var currentdatali = tab.getAttribute("data-li");
        
        tabs.forEach(function(tab){
            tab.classList.remove("active");
        })

        tab.classList.add("active");
        
        items.forEach(function(item){
            item.style.display = "none";
        })

        

        if(currentdatali == "top10") {
            top10.style.display = "block";
        }
        else if(currentdatali == "top20") {
            top20.style.display = "block";
        }
        else{
            threes.style.display = "block";
        }
    })
})




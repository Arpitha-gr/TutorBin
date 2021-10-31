let input = document.querySelector('input');
let btn = document.getElementById('button');
// if ctrl+/ key is pressed, search box will be focused and if enter key is pressed, search button will be cliked
function key(e){
    e = e || window.event;
    if(e.key === "/" && e.ctrlKey ){
        input.focus();      
    }
    if(e.key === "Enter"){
        btn.click();
    }
}

// search function is used to highlight the searched keyword
function search(){
    let text = document.getElementById("textArea").value;
    let paragraph = document.getElementById("paragraph");
    if(text !== ""){
        text = text.replace(/[.**?^${}()|[\]\\]/g,"\\$&");
        let pattern = new RegExp(`${text}`,"gi");
        paragraph.innerHTML = (paragraph.textContent).replace(pattern, "<mark>$&</mark>")
    }
}


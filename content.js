const keywords = ["porn", "pornhub", "sex", "xxx"]

function blockPage(){
    const bodyText = document.body.innerText.toLowerCase()

    //check for the keywords
    const found = keywords.some(word => bodyText.includes(word))
    if (found){
        //block the page
        document.body.innerHTML = `<h1>Blocked: Adult content detected</h1>`;
    }
}

blockPage()
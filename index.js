

let submitFormValue = ()=>{
    try {
        let $ = document.querySelector.bind(document);
        console.log($('#GrossAmount').value);
    } catch (error) {
        console.log(error);
    }
}

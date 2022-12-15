function selected() {
    const selectedFile = document.getElementById('formFileLg').files[0];
    val = selectedFile;
    let d = 5
    var data = new FormData()
    data.append('files[]', val)

    fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            body: data
        }).then(response => response.json())
        .then(res => {
            console.log('Success:', res);
            sessionStorage.setItem('result', res.result)
            sessionStorage.setItem('instructions', res.instructions)
            sessionStorage.setItem('calls', res.calls)
        })
        .catch((error) => {
            console.error('Error:', error);
        });




    // document.getElementById("result").innerHTML = "New text!";
    return d; // The function returns the product of p1 and p2
}

function submitted() {




    if (sessionStorage.getItem('result') == 'undefined') {
        alert("validation failed false");
        event.preventDefault();
        returnToPreviousPage();
        return false;
    }
    if (sessionStorage.getItem('result') == null) {
        alert("validation failed false");
        event.preventDefault();
        returnToPreviousPage();
        return false;
    }
    if (sessionStorage.getItem('result') == "") {
        alert("validation failed false");
        event.preventDefault();
        returnToPreviousPage();
        return false;
    }

    return true;
}



function results() {

    // val = sessionStorage.getItem('d')
    // console.log(val)
    document.getElementById("result").innerHTML = String(sessionStorage.getItem('result'));
    document.getElementById("instructions").innerHTML = String(sessionStorage.getItem('instructions'));
    document.getElementById("calls").innerHTML = String(sessionStorage.getItem('calls'));

}

function handle() {
    sessionStorage.setItem('result', "")
    sessionStorage.setItem('instructions', "")
    sessionStorage.setItem('calls', "")
}
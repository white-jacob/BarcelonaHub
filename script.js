var txtFile = new XMLHttpRequest();
    var allText = "file not found";
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
            allText = txtFile.responseText;
            allText = allText.split("\n").join("<br>");
        }

        document.getElementById('txt').innerHTML = allText;
    }
    txtFile.open("GET", '/result/client.txt', true);
    txtFile.send(null);
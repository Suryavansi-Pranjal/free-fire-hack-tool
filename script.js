let linksClicked = 0;

function openLink(url) {
    window.open(url, '_blank');
    linksClicked += 1;
    checkLinksClicked();
}

function checkLinksClicked() {
    if (linksClicked >= 3) {
        document.getElementById('finalLinkButton').disabled = false;
    }
}

function openFinalLink() {
    const finalLink = document.getElementById('finalLink').value;
    if (finalLink) {
        window.open(finalLink, '_blank');
    }
}

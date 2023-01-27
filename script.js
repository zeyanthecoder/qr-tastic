const generateButton = document.getElementById("generate-button");
const textInput = document.getElementById("text-input");
const linkInput = document.getElementById("link-input");
const qrCode = document.getElementById("qr-code");

generateButton.addEventListener("click", function() {
    let input;
    if(textInput.value) {
        input = textInput.value;
    } else if(linkInput.value) {
        input = linkInput.value;
    }
    const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + input;
    qrCode.src = qrUrl;
});

qrCode.addEventListener("click", function() {
    if(linkInput.value) {
        window.open(linkInput.value, '_blank');
    }
});
const qrCodeContainer = document.getElementById("qr-code-container");

generateButton.addEventListener("click", function() {
    // Code to generate QR code
    qrCodeContainer.style.display = "block";
    downloadButton.style.display = "block";
    document.getElementById("qrcode").style.opacity = "1";
    document.getElementById("download-button").style.opacity = "1";

    document.getElementById("qrcode").classList.add("fade-in");
    document.getElementById("download-button").classList.add("fade-in");
});

const downloadButton = document.getElementById('download-button');

// downloadButton.addEventListener('click', function() {
//   // Get the QR code image
//   const qrCode = document.getElementById('qr-code');

//   // Create a new anchor element
//   const link = document.createElement('a');

//   // Set the anchor's href to the data URL of the QR code image
//   link.href = qrCode.src;

//   // Set the anchor's download attribute
//   link.download = 'qr-code.png';

//   // Click the anchor
//   link.click();
// });

function downloadQRCode() {
    // Get the QR code element
    var qrcode = document.getElementById("qrcode");
    var imgData = qrcode.src;
    // Creates a link and triggers download
    var link = document.createElement("a");
    link.href = imgData;
    link.download = "qrcode.png";
    link.click();
  }
  
  


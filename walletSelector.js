var errorMessage = document.querySelector(".error-message");
var walletconnect = document.querySelector("._btn-wallet.walletconnect");
var metamask = document.querySelector("._btn-wallet.metamask");
var loader = document.querySelector(".loader");

walletconnect.addEventListener('click', function(){
    errorMessage.classList.toggle('active');
    loader.classList.remove('active');
});

metamask.addEventListener('click', function(){
    loader.classList.toggle('active');
    errorMessage.classList.remove('active');
});
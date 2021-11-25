
let showNetworks = ()=>{
    let networksContainer = document.querySelector(".share_networks");
   
    if(networksContainer.style.display === "flex"){
        networksContainer.style.display =  "none"
    }else{
        networksContainer.style.display =  "flex"
    }
}
document.querySelector(".share-btn").addEventListener("click", showNetworks)
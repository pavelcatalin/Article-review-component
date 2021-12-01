
let showNetworks = ()=>{
    let networksContainer = document.querySelector(".share_networks");
    
    if(networksContainer.style.display === "flex"){
        networksContainer.style.display =  "none";
        
    }else{
        networksContainer.style.display =  "flex";
        
    }
    document.querySelector(".share-btn").classList.toggle("global")
    if(window.innerWidth <= 768){
        document.querySelector(".share-btn").classList.toggle("mobile")
    }
}
document.querySelector(".share-btn").addEventListener("click", showNetworks)
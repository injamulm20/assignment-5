// Eti like button functionality

const likeButtons = document.querySelectorAll('.like-btn');
let likeCount = 0;

for (const button of likeButtons){
    button.addEventListener("click", function(){
        this.classList.toggle("fa-regular");
        this.classList.toggle("fa-solid");
        this.classList.toggle("text-red-500");
        if (this.classList.contains("fa-solid")){
            likeCount++;
        } else {
            likeCount--;
        }
        console.log("Total Likes: " + likeCount);

        document.getElementById("like-count").innerText = likeCount;
    })
}

// Eti copy button functionality 

const copyButtons = document.querySelectorAll(".copy-button");
let copyCount = 0;

for (const button of copyButtons){
    button.addEventListener("click", function(){
        const card = this.closest(".service-card");
        const numberElement = card.querySelector("h2");
        const number = numberElement.textContent;

        navigator.clipboard.writeText(number).then(() => {
          copyCount++;
          document.getElementById('copy-count').innerText = copyCount;
          
          const originalText = this.innerHTML;
          this.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
          this.classList.add('bg-green-100');
          
          setTimeout(() => {
            this.innerHTML = originalText;
            this.classList.remove('bg-green-100');
            }, 2000);
        })
    })
}

// eti call button functionality
const callButtons = document.querySelectorAll(".call-btn");

for (const button of callButtons){
    button.addEventListener("click", function(){
        let coin = parseInt(document.getElementById("coin").innerText);
        if(coin <= 20){
            alert("You have low balance. Please recharge your account.");
            return;
        }
        const newCoin = coin - 20;
        document.getElementById("coin").innerText = newCoin;

        
        const card = this.closest(".service-card");
        const serviceName = card.querySelector("h1").innerText;
        const number = card.querySelector("h2").innerText;

        alert(`Calling ${serviceName}: ${number}`);

        

        //  Eti call history
        const callHistory = document.getElementById("call-history");
        const historyItem = document.createElement("div");
        historyItem.className = "p-2 mt-2 bg-gray-100 rounded flex justify-between items-center";
        historyItem.innerHTML = `
            <div>
            <p class="font-medium text-sm">${serviceName}</p>
            <p class="text-gray-600 text-sm">${number}</p>
            
            </div>
            <div>
            <p class="text-gray-400 text-xs">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
            </div>
        `;
        callHistory.prepend(historyItem);

        document.getElementById("clear-button").addEventListener("click", function(){
            callHistory.innerHTML = "";
        })

    })
}
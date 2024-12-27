const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click",(e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait...";

        optionImages.forEach((image2,index2) => {
            index !== index2 && image2.classList.remove("active");

        });

        gameContainer.classList.add("start");


        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            let imageSrc = e.target.querySelector("img").src;
            // set the user selected image
            userResult.src = imageSrc;
    
            // Genrating a random image for conputer 
            let randomNumber = Math.floor(Math.random() * 3);
    
            let cpuImages = ["images/rock.png","images/paper.png","images/scissors.png"];
            
            cpuResult.src = cpuImages[randomNumber];
    
            let cpuValue = ["R","P","S"][randomNumber];
            let userValue = ["R","P","S"][index];
    
            let outComes = {
                RR : "DRAW",
                RP : "Cpu",
                RS : "User",
                PP : "DRAW",
                PR : "User",
                PS : "Cpu",
                SS : "DRAW",
                SP : "User",
                SR : "Cpu",
            };
    
            let outComeValue = outComes[userValue + cpuValue];
    
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;    
        },2500);
        

    });
});


function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    var session = document.getElementById('A-P');
    var greeting = document.getElementById('morning');

    document.getElementById("set-alarm").addEventListener("click", function () {
        var optionList = document.getElementById("wake");
        var selectedOption = optionList.options[optionList.selectedIndex].text;

        document.getElementById("data1").innerHTML = "wake up time: " + selectedOption;
    });

    document.getElementById("set-alarm").addEventListener("click", function () {
        var optionList = document.getElementById("lunch");
        var selectedOption = optionList.options[optionList.selectedIndex].text;

        document.getElementById("data2").innerHTML = "lunch time: " + selectedOption;
    });

    document.getElementById("set-alarm").addEventListener("click", function () {
        var optionList = document.getElementById("nap");
        var selectedOption = optionList.options[optionList.selectedIndex].text;

        document.getElementById("data3").innerHTML = "nap time: " + selectedOption;

    });

    document.getElementById("set-alarm").addEventListener("click", function () {
        var optionList = document.getElementById("sleep");
        var selectedOption = optionList.options[optionList.selectedIndex].text;

        document.getElementById("data4").innerHTML = "night time: " + selectedOption;

    });

    //  Show greeting based on the clock timing // below the clock
    var greetingElement = document.getElementById('heading');

    // If it's between 6am and 12pm, display "GOOD MORNING WAKE UP!!"
    if (hrs >= 6 && hrs < 12) {
        greeting.innerHTML = 'GOOD MORNING WAKE UP!!';
    }

    // If it's between 12pm and 4pm, display "GOOD AFTERNOON!!"
    else if (hrs >= 12 && hrs < 16) {
        greeting.innerHTML = 'GOOD AFTERNOON !! TAKE SOME SLEEP';
    }

    // If it's between 4pm and 8pm, display "GOOD EVENING!!"
    else if (hrs >= 16 && hrs < 20) {
        greeting.innerHTML = 'GOOD EVENING !!';
    }

    // If it's after 8pm or before 6am, display "GOOD NIGHT!!"
    else {
        greeting.innerHTML = 'GOOD NIGHT !!';
    }

    // Changing text according to the clock // left container
    if (hrs >= 6 && hrs < 12) {
        // If it's between 6am and 12pm, display "GOOD MORNING WAKE UP!!"
        greetingElement.innerHTML = 'GOOD MORNING WAKE UP!!';
    } else if (hrs >= 12 && hrs < 16) {
        // If it's between 12pm and 4pm, display "GOOD AFTERNOON!!"
        greetingElement.innerHTML = 'LET\'S HAVE SOME LUNCH !!';
    } else if (hrs >= 16 && hrs < 20) {
        // If it's between 4pm and 8pm, display "GOOD EVENING!!"
        greetingElement.innerHTML = 'STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!';
    } else {
        // If it's after 8pm or before 6am, display "GOOD NIGHT!!"
        greetingElement.innerHTML = 'CLOSE YOUR EYES AND GO TO SLEEP!';
    }

    // Changing image according to the clock timing

    // Check if the current time is between 6am and 12pm
    if (hrs >= 6 && hrs < 12) {
        // Change the image to the good morning 
        document.querySelector('.pic-fun').src="./morning.png";
    }

    // Check if the current time is between 12pm and 4(16)pm
    else if (hrs >= 12 && hrs < 16) {
        // Change the image to the good good afternoon
        document.querySelector('.pic-fun').src = './lunch.png';
    }

    // Check if the current time is between 4(16)pm and 8(20)pm
    else if (hrs >= 16 && hrs < 20) {
        // Change the image to good evening image
        document.querySelector('.pic-fun').src = './evening.png';
    }


    // Check if the current time is between 8pm and 11:59pm
    else if (hrs >= 20 && hrs <= 23) {
        // Change the image to good night image
        document.querySelector('.pic-fun').src = './night.png';
    }

    // Check if the current time is between 12am and 6am
    else if (hrs >= 0 && hrs < 6) {
        // Change the image to good morning image
        document.querySelector('.pic-fun').src = './night.png';
    }

    if (hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }
    
    if(hrs<12)
    {
        hrs = '0' + hrs;
    }
    if(min<10)
    {
        min = '0' + min;
    }
    if(sec<10)
    {
        sec = '0' + sec;
    }

    document.getElementById('hrs').innerHTML = hrs;
    document.getElementById('mins').innerHTML = min;
    document.getElementById('secs').innerHTML = sec;
}
setInterval(displayTime, 1000);



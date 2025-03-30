setInterval(()=>{
    let d= new Date();
    let presentTime=document.getElementById('presentTime');
    presentTime.innerHTML=`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}`;
},1);


function updateTimeAfterBirth(date,id,name) {
    // Define your birthdate
    const birthDate = new Date(date); 

    // Get the current date and time
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDiff = currentDate - birthDate;

    // Calculate the time in different units
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365.25);

    // Create a formatted string with the time elapsed
    const timeString = `${years} years, ${Math.floor((days % 365.25) / 30)} months, ${Math.floor((days % 365.25) % 30)} days`;

    // Insert the time into the <h3> tag
    document.getElementById(id).innerHTML = `Time since ${name}: ${timeString}`;
}

// Call the function to update the time
updateTimeAfterBirth("2001-05-07T00:00:00","timeAfter","birth");
updateTimeAfterBirth("2024-07-03T00:00:00","timeAfterJob","job");
updateTimeAfterBirth("2022-05-30T00:00:00","timeAfterLove","love");


// Optionally, update the time every second if you want real-time updates
setInterval(updateTimeAfterBirth, 1000);

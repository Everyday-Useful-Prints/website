// WHERE TO UPLOAD NEW PRINTS:
// Just add a new object bracket {} to the top of this list following the exact same format.

const prints = [
    {
        title: "Alani Package",
        description: "This is my first ever youtube print. It is a package of an Alani cap for the can that goes on the cap, A cupholder that goes into your car cupholder, and finally, a handhold for your alani drink.",
        image: "https://via.placeholder.com/300x200", // Link to a picture of the print
        fileUrl: "files/Alani-Package.3mf",       // Path to your actual downloaded file
        youtubeUrl: "https://youtube.com/your-video-link-1" // Your YouTube video link
    },
    {
        title: "Parametric Cable Organizer",
        description: "Keep your desk wire-free with this simple slide-in modular cable manager block.",
        image: "https://via.placeholder.com/300x200", 
        fileUrl: "files/cable_organizer.stl",        
        youtubeUrl: "https://youtube.com/your-video-link-2" 
    },
    // Add future prints right below this line using the exact format above!
];

// This script automatically injects your prints array into the grid on your page
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("prints-grid");

    prints.forEach(print => {
        const card = document.createElement("div");
        card.classList.add("print-card");

        card.innerHTML = `
            <img src="${print.image}" alt="${print.title}" class="print-img">
            <div class="print-info">
                <h3>${print.title}</h3>
                <p>${print.description}</p>
                <div class="card-buttons">
                    <a href="${print.fileUrl}" download class="btn btn-download">Download File</a>
                    <a href="${print.youtubeUrl}" target="_blank" class="btn btn-youtube">Watch Video</a>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
});
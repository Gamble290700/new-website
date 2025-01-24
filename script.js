// Initialize counter and comments array
let counter = parseInt(localStorage.getItem("counter")) || 0; // Load saved counter, or start at 0
const incrementBtn = document.getElementById("incrementBtn");
const counterDisplay = document.getElementById("counter");
const commentInput = document.getElementById("commentInput");
const addCommentBtn = document.getElementById("addCommentBtn");
const commentsList = document.getElementById("commentsList");
const resetBtn = document.getElementById("resetBtn");

// Update the counter display on page load
counterDisplay.textContent = counter;

// Load saved comments from localStorage (if any)
const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
savedComments.forEach(comment => {
    const newComment = document.createElement("li");
    newComment.textContent = comment;
    commentsList.appendChild(newComment);
});

// Increment counter and save it to localStorage
incrementBtn.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    localStorage.setItem("counter", counter); // Save counter to localStorage
});

// Add a comment and save the updated list to localStorage
addCommentBtn.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
        const newComment = document.createElement("li");
        newComment.textContent = `Counter ${counter}: ${commentText}`; // Show current counter with the comment
        commentsList.appendChild(newComment);

        // Save new comment to localStorage
        savedComments.push(`Counter ${counter}: ${commentText}`);
        localStorage.setItem("comments", JSON.stringify(savedComments));

        commentInput.value = ""; // Clear the comment input
    } else {
        alert("Please enter a comment!");
    }
});

// Reset counter and comments
resetBtn.addEventListener("click", () => {
    // Reset counter and comments list
    counter = 0;
    counterDisplay.textContent = counter;
    localStorage.setItem("counter", counter); // Save reset counter to localStorage
    localStorage.setItem("comments", JSON.stringify([])); // Clear comments from localStorage

    // Clear the displayed comments from the page
    commentsList.innerHTML = "";
});

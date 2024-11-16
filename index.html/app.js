document.getElementById("btn1").addEventListener("click", function() {
    alert("Your order will be delivered soon");
  });

  document.getElementById("btn").addEventListener('click', function() {
    var moreText = document.getElementById("moreText");
    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'block'; // Show the text
        this.textContent = 'Show Less'; // Change button text
    } else {
        moreText.style.display = 'none'; // Hide the text
        this.textContent = 'Learn More'; // Change button text back
    }
});



// Add click event listener to all elements with the class "accordion"
var acc = document.querySelectorAll('.accordion');

acc.forEach(function(item) {
  item.addEventListener('click', function() {
    // Toggle the active class
    this.classList.toggle('active');
    
    // Get the panel next to the clicked accordion button
    var panel = this.nextElementSibling;
    
    // Toggle the "show" class to display/hide the panel
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
});

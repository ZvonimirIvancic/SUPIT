    var targets = document.getElementsByClassName('mainText');
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('pobljedi');
          entry.target.classList.add('pojavi');
        } else {
          entry.target.classList.remove('pojavi');
          entry.target.classList.add('pobljedi');
        }
      });
    });
    for (var i = 0; i < targets.length; i++) {
      observer.observe(targets[i]);
    }
    
    for (var i = 0; i < targets.length; i++) {
      targets[i].addEventListener("animationend", function() {
  if(this.classList.contains("pobljedi")) {
  this.classList.remove("pobljedi");
  } else {
  this.classList.remove("pojavi");
  }
  });
  }

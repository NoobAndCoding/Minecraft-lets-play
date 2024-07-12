function scrollToText() {
    const searchText = document.getElementById('search-input').value.trim().toLowerCase();
    if (searchText === '') {
        alert('Please enter a search term.');
        return;
    }

    let found = false;
    const sections = document.querySelectorAll('section'); // Select all sections

    sections.forEach(section => {
        const headings = section.querySelectorAll('h2, h3, p'); // Select headings and paragraphs

        headings.forEach(heading => {
            const textContent = heading.textContent.trim().toLowerCase();
            if (textContent.includes(searchText)) {
                heading.scrollIntoView({ behavior: 'smooth' });
                found = true;
                return; // Exit loop once first match is found
            }
        });

        if (found) return; // Exit loop once first match is found
    });

    if (!found) {
        alert(`"${searchText}" not found.`);
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Section not found');
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


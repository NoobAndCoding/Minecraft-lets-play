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

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('scrollContainer');
    const items = container.getElementsByClassName('scroll-item');
    let activeIndex = 0;

    function updateItems() {
        for (let i = 0; i < items.length; i++) {
            if (i === activeIndex) {
                items[i].classList.add('active');
                items[i].classList.remove('inactive');
            } else {
                items[i].classList.add('inactive');
                items[i].classList.remove('active');
            }
        }
    }

    container.addEventListener('wheel', function (event) {
        if (event.deltaY > 0) {
            activeIndex = (activeIndex + 1) % items.length;
        } else {
            activeIndex = (activeIndex - 1 + items.length) % items.length;
        }
        updateItems();
    });

    updateItems();
});


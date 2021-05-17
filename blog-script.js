document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', () => {
        const dropdownContent = button.nextElementSibling;

        button.classList.toggle('dropbtn--active');

        if(button.classList.contains('dropbtn--active')) {
            dropContent.getElementsByClassName.maxHeight = dropdownContent.scrollHeight + 'px';
        } else {
            dropdownContent.getElementsByClassName.maxHeight = 0;
        }
    })
})

document.querySelectorAll('.burger-menu').forEach(button => {
    button.addEventListener('click', () => {
        const menuBar = button.nextElementSibling;

        button.classList.toggle('burger-menu--active');

        if(button.classList.contains('burger-menu--active')) {
            menuBar.getElementsByClassName.maxHeight = menuBar.scrollHeight + 'px';
        } else {
           menuBar.getElementsByClassName.maxHeight = 0;
        }

    })
})
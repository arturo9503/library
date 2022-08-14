let myLibrary = [];
const container = document.querySelector("#container");
const btn = document.querySelector("#addBook");

myLibrary.push(new Book('Harry Potter', 'J.K. Rowling', 500, 'not read'));
myLibrary.push(new Book('The Bible', 'Jesus', 600, 'not read'));


function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function display(array){
    for (let i = 0 ; i < array.length ; i++) {
        console.log(array[i]);
        const container = document.querySelector('#main');
        const card = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const status = document.createElement('button');
        const remove = document.createElement('button')
        const idx = i;

        container.style.cssText = "display: flex; gap: 3%; flex-wrap: wrap";
        card.style.cssText = "width: 30%; border: 1px solid";

        title.textContent = "title: " + array[i].title;
        author.textContent = "autor: " +array[i].author;
        pages.textContent = "pages: " +array[i].pages;
        status.textContent = array[i].status;
        remove.textContent = "remove";

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(status);
        card.appendChild(remove);

        status.addEventListener('click', ()=> {
            if (status.textContent != "not read"){
                status.textContent = "not read";
            }
            else{
                status.textContent = "read";
            }
        });

        remove.addEventListener('click' , () => {
            card.remove();
            array.splice(idx, 1);
            console.log(array);
        })


        container.appendChild(card);


    };
};

btn.addEventListener('click', () => {
    const form = document.querySelector('#form');
    form.style.display = 'none';
    if (form.style.display === 'none'){
        form.style.display = 'block';
    }
    else{
        form.style.display = 'none';
    }
    form.addEventListener('submit', (e) => {
        form.style.display = "none";
        e.preventDefault();
        const container = document.querySelector('#main');
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const status = document.querySelector('#status').value;
        const remove = document.createElement('button');

        remove.textContent = 'remove';

        if (title != ""){
            myLibrary.push(new Book(title, author, pages, status, remove));
        }

        container.innerHTML = "";
        form.reset();
        display(myLibrary);
    });
});

display(myLibrary);



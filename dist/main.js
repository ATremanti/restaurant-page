const content = document.querySelector('#content');

function appendItems() {
    const home = document.createElement('div')
    home.classList.add('home-content')
    content.appendChild(home)

    const homep = document.createElement('p')
    homep.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem aliquid provident atque maiores dolorem eos corrupti? Laborum placeat velit animi minus enim. Molestiae dicta ad molestias dolorum porro tenetur?"
    home.appendChild(homep)
}

appendItems();
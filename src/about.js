const createAbout = (() => {
    const content = document.querySelector('#content');

    const about = document.createElement('div');
    about.classList.add('about-content', 'animated');
    content.appendChild(about);

    const aboutp = document.createElement('div');
    aboutp.classList.add('about-para');
    aboutp.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos ducimus repellat impedit. Sunt, soluta beatae totam modi a praesentium tenetur, facilis eos incidunt sit, hic ipsa aliquid maiores deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos ducimus repellat impedit. Sunt, soluta beatae totam modi a praesentium tenetur, facilis eos incidunt sit, hic ipsa aliquid maiores deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos ducimus repellat impedit. Sunt, soluta beatae totam modi a praesentium tenetur, facilis eos incidunt sit, hic ipsa aliquid maiores deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos ducimus repellat impedit. Sunt, soluta beatae totam modi a praesentium tenetur, facilis eos incidunt sit, hic ipsa aliquid maiores deleniti?";
    about.appendChild(aboutp);
})

export { createAbout }
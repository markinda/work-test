function file() {

    var input = document.getElementById("file");
    var list = document.querySelector(".file__list");


    input.addEventListener('change', e => {

        list.innerHTML = "";

        if (input.files.length <= 5) {

            for (let i = 0; i < input.files.length; i++) {
                let files = input.files[i].name;

                if (input.files[i].type === "image/jpeg" || input.files[i].type === "image/jpg" || input.files[i].type === "image/png") {

                    innerItem(files);

                } else {
                    alert('изображение должно быть в формате JPG, JPEG, PNG')
                }
            }

        } else {
            alert('Вы можете загрузить только 5 изображений')
        }
    });

    const innerItem = (files) => {

        return list.innerHTML += `
            <li class="file__item">
                <div class="file__del">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.79289 14.293L14.7929 4.29297L16.2071 5.70718L6.20711 15.7072L4.79289 14.293Z" fill="#747474"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.20711 4.29297L16.2071 14.293L14.7929 15.7072L4.79289 5.70718L6.20711 4.29297Z" fill="#747474"/>
                    </svg>
                </div>
                <p class="file__name">${files}</p>
            </li>
        `;
    }
}

file();

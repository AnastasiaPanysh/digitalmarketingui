class Client {
    constructor() {
        this.getMoreInfo()
    }

    getMoreInfo() {
        const plus = document.querySelector('.img-plus');
        const information =document.querySelector('.information');

        plus.addEventListener('click', () => {
            if (information.hidden) {
                information.hidden = false;
                plus.style = `background-image: url(./assets\/minus.svg); margin-top:40px;`;

               
            } else {
                information.hidden = true;
                plus.style = `background-image: url(./assets\/image (3).svg);`;
            }
        });        
    }
}

const client = new Client()
class WhatsAppBtn {

    constructor({ dialcode, phone, text, backgroundColor, callTo, textColor, position}) {
        this.dialcode = dialcode
        this.phone = phone
        this.text = text
        this.backgroundColor = backgroundColor
        this.callTo = callTo
        this.textColor = textColor
        this.position = position
    }

    renderButton() {
        let fontAwesome = document.createElement('script')
        fontAwesome.setAttribute('src', 'https://kit.fontawesome.com/2640aa91b4.js')
        document.body.appendChild(fontAwesome)

        let roboto = document.createElement('link')
        roboto.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto&display=swap')
        roboto.setAttribute('rel', 'stylesheet')
        document.body.appendChild(roboto)

        let styles = document.createElement('link')
        styles.setAttribute('href', 'https://javimata.com/errores-del-ecommerce/dist/css/whatsapp-button-widget.css')

        styles.setAttribute('rel', 'stylesheet')
        styles.setAttribute('type', 'text/css')
        styles.setAttribute('style', `background:${this.backgroundColor}`)

        document.body.appendChild(styles)

        let root = document.createElement('div')
        root.className = 'WhatsAppButton__root'
        if(this.position == 'right'){ 
            root.setAttribute('style', 'position: fixed; bottom: 10px;right: 20px; z-index:99; text-align: center; margin: auto')
        }else{
            root.setAttribute('style', 'position: fixed; bottom: 10px;left: 20px; z-index:99; text-align: center; margin: auto')
        }
        document.body.appendChild(root);

        let button_root = document.createElement('a')
        button_root.setAttribute('href', `https://api.whatsapp.com/send?phone=${this.dialcode}${this.phone}&text=${this.text}`)
        button_root.setAttribute('style', 'text-decoration: none')
        button_root.setAttribute('target', '_blank')
        root.appendChild(button_root)

        let button = document.createElement('button')
        button.setAttribute('class', 'whatsapp__button')

        button_root.appendChild(button)

        let button_text = document.createElement('p')
        button_text.setAttribute('style', 'margin: 0')
        button_text.innerText = this.callTo
        button.appendChild(button_text)

        let whatsappIcon = document.createElement('i')
        whatsappIcon.setAttribute('class', 'fab fa-whatsapp')

        whatsappIcon.setAttribute('style', 'font-size: 24px; margin-left: 5px')
        button.appendChild(whatsappIcon)

        /*
        let poweredByButton = document.createElement('a')
        poweredByButton.setAttribute('href', 'https://leadsales.mx')
        poweredByButton.setAttribute('class', 'whatsapp__poweredBy')
        poweredByButton.setAttribute('target', '_blank')
        poweredByButton.innerText = 'Powered by Leadsales'
        root.appendChild(poweredByButton)
        */

        button.setAttribute('style', `background:${this.backgroundColor};color:${this.textColor};z-index:99;text-align:center; display: flex; align-items:center`)

    }
}
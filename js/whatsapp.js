class WhatsAppBtn {

    constructor({ phone, text, backgroundColor, callTo, iconColor, position, positionText, width, ga, fb}) {
        this.phone           = phone
        this.text            = text ? text : "";
        this.backgroundColor = backgroundColor ? backgroundColor : "#4DC247";
        this.callTo          = callTo
        this.iconColor       = iconColor ? iconColor : "#fff"
        this.positionText    = positionText ? positionText : "tl";
        this.position        = position ? position : "rb";
        this.width           = width ? width : "60";
        this.ga              = ga
        this.fb              = fb
    }

    renderButton() {

        let backgroundColor = this.backgroundColor;
        let colorIcon = this.iconColor;
        let widthIcon = this.width;

        let root = document.createElement('div')
        root.className = 'jam_whatsapp'
        root.classList.add(this.position)
        root.classList.add(this.positionText)
        document.body.appendChild(root);

        // Add CSS
        let styles = document.createElement('link')
        styles.setAttribute('href', 'css/jam-whatsapp-button.css')
        styles.setAttribute('rel', 'stylesheet')
        styles.setAttribute('type', 'text/css')
        styles.setAttribute('style', `background:${this.backgroundColor}`)
        document.body.appendChild(styles)


        if ( this.callTo !== undefined && this.callTo != "" ) {

            let text_callTo = document.createElement('div')
            text_callTo.setAttribute('class','jam_whatsapp_text')
            text_callTo.innerText = this.callTo
            root.appendChild(text_callTo)

        }


        let button_root = document.createElement('a')
        button_root.setAttribute('href', `https://wa.me/${this.phone}?text=${this.text}`)
        button_root.setAttribute('class', 'link_whatsapp')
        button_root.setAttribute('style', 'text-decoration: none')
        button_root.setAttribute('target', '_blank')
        root.appendChild(button_root)
        
        let icon = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
        icon.setAttribute('id', 'jam_whatsapp_widget')
        icon.setAttribute('viewBox', '0 0 32 32')
        icon.setAttribute('width', widthIcon)
        icon.setAttribute('height', widthIcon)
        button_root.appendChild(icon)

        var svg = document.querySelector('#jam_whatsapp_widget');

        var iconCircle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        iconCircle.setAttribute('id', 'whatsapp_icon_path')
        iconCircle.setAttribute('cx', '15.8')
        iconCircle.setAttribute('cy', '15.8')
        iconCircle.setAttribute('r', '15.2')
        iconCircle.setAttribute('fill', backgroundColor)
        svg.appendChild(iconCircle);

        var iconPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        iconPath.setAttribute("d", "M18.9,17c-0.3,0-1,1.3-1.4,1.3c-0.1,0-0.2,0-0.3-0.1c-0.8-0.4-1.4-0.8-2-1.4 c-0.5-0.5-1.1-1.2-1.4-1.8c0-0.1-0.1-0.1-0.1-0.2c0-0.3,0.9-0.9,0.9-1.4c0-0.1-0.7-2-0.8-2.2c-0.1-0.3-0.2-0.5-0.6-0.5 c-0.2,0-0.3,0-0.5,0c-0.3,0-0.5,0.1-0.7,0.3c-0.6,0.6-1,1.2-1,2.1v0.1c0,0.9,0.4,1.9,1,2.6c1.2,1.7,2.4,3.2,4.3,4.1 c0.6,0.3,1.9,0.8,2.6,0.8c0.8,0,2-0.5,2.3-1.2c0.1-0.3,0.2-0.7,0.2-1c0-0.1,0-0.1,0-0.2C21.3,18.2,19.1,17,18.9,17z M16.2,24.2 c-1.6,0-3.3-0.5-4.6-1.4l-3.3,1l1.1-3.1c-1-1.4-1.6-3.2-1.6-5c0-4.7,3.8-8.4,8.4-8.4s8.4,3.8,8.4,8.4 C24.6,20.4,20.8,24.2,16.2,24.2z M16.2,5.6C10.6,5.6,6,10.1,6,15.7c0,1.8,0.5,3.7,1.5,5.2l-1.8,5.4l5.6-1.8 c4.9,2.7,11.1,0.9,13.8-4c0.8-1.5,1.3-3.2,1.3-4.9C26.3,10.1,21.8,5.6,16.2,5.6L16.2,5.6z");
        iconPath.setAttribute('id', 'whatsapp_icon_path')
        iconPath.setAttribute('fill', colorIcon)
        svg.appendChild(iconPath);


        let link_whatsapp = document.querySelector('.jam_whatsapp a.link_whatsapp');
        link_whatsapp.addEventListener('click', function(){
            
            let ga = this.ga
            let fb = this.fb

            if ( typeof gtag == 'function' && ga[0] ) {
                gtag('event', ga[1], { 'event_category': ga[0], 'event_label': ga[2] });
            }

            if (typeof fbq == 'function' && fb[0]) {
                fbq('track', fb[0], { content_name: fb[1] });
            }

        });

    }

}
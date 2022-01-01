window.onload = () => {
    const getElement = (selector) => {
        const element = document.querySelector(selector)

        if (element) return element
        throw Error(
            `Please double check your class names, there is no ${selector} class`
        )
    }

    // Nav Bar
    const links = getElement('.nav-links')
    const navBtnDOM = getElement('.nav-btn')

    navBtnDOM.addEventListener('click', () => {
        links.classList.toggle('show-links')
    })

    // Modal Window
    const btnContactMe = getElement('.btn-contact')
    const modal = document.querySelector('.modal-overlay')
    const btnClose = document.querySelector('.close-btn')

    btnContactMe.addEventListener('click', () => {
        modal.classList.add('open-modal')
    })

    btnClose.addEventListener('click', () => {
        modal.classList.remove('open-modal')
    })

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            modal.classList.remove('open-modal')
        }
    })
}

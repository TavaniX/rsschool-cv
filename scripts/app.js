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

    // anchor smooth scrolling
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault()
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })
    }

    // scroll top button
    let goTopBtn = document.querySelector('.top')
    window.addEventListener('scroll', trackScroll)
    goTopBtn.addEventListener('click', backToTop)

    function trackScroll() {
        let scrolled = window.pageYOffset
        // let coords = document.documentElement.clientHeight

        if (scrolled > 250) {
            goTopBtn.classList.add('top-show')
        }
        if (scrolled < 250) {
            goTopBtn.classList.remove('top-show')
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -5100)
            setTimeout(backToTop, 0)
        }
    }
}

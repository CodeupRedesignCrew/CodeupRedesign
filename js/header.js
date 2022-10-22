/*
    Fetch all the nav links from the headerlinks.json file and add them to the nav_links container in the header
*/
fetch('js/data/headerlinks.json').then(async req=>{
    let links = await req.json()
    let navLinksContainer = document.getElementById('nav_links')
    links.forEach(link=>{
        let linkElement = document.createElement('a')
        linkElement.innerText = link.title
        linkElement.href = link.to
        linkElement.classList.add('nav_link')
        navLinksContainer.appendChild(linkElement)
    })
})


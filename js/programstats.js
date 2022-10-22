/*
    Fetch all the stats from programstats.json  about programs and display them to the user
*/
fetch('js/data/programstats.json').then(async req=>{
    let stats = await req.json()
    let statsContainer = document.getElementById('stat_numbers')
    links.forEach(link=>{
        let linkElement = document.createElement('a')
        linkElement.innerText = link.title
        linkElement.href = link.to
        linkElement.classList.add('nav_link')
        navLinksContainer.appendChild(linkElement)
    })
})

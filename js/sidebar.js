/*
    Fetch all the sidebar links from the sidebarlinks.json file and add them to the sidebar container
*/
fetch('js/data/sidebarlinks.json').then(async req=>{
    let links = await req.json()
    let sidebarContainer = document.getElementById('sidebar')
    let gridTemplateRows = ''
    let startNowButton = document.getElementById('sidebar_start_now_button')
    links.forEach(link=>{
        let linkElement = document.createElement('a')
        linkElement.innerText = link.title
        linkElement.href = window.location.hostname === 'localhost' ? link.to : '/CodeupRedesign' + link.to
        linkElement.classList.add('sidebar_link')
        sidebarContainer.insertBefore(linkElement,startNowButton)
        gridTemplateRows += ' 40px'
    })
    sidebarContainer.style.display = 'grid'
    sidebarContainer.style.gridTemplateRows = gridTemplateRows
})
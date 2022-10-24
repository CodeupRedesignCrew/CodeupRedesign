/*
    Fetch all the stats from programstats.json  about programs and display them to the user
*/
fetch('js/data/programstats.json').then(async req=>{
    let stats = await req.json() //Retrieve all stat objects

    //Retrieve the parent container
    let statsContainer = document.getElementById('stat_numbers')

    stats.forEach(stat=>{ //Iterate through each stat object
        //Create the stat element
        let statElement = document.createElement('div')
        statElement.classList.add('stat')
        
        //Add the stat icon
        let icon = document.createElement('img')
        icon.src = stat.icon
        icon.classList.add('stat_icon')
        statElement.appendChild(icon)

        //Add the stat number
        let statNumber = document.createElement('div')
        statNumber.classList.add('stat_number')
        statElement.appendChild(statNumber)

        //Add the stat first subheading
        let firstSubheading = document.createElement('div')
        firstSubheading.classList.add('stat_subheading_one')
        statElement.appendChild(firstSubheading)

        //Add the stat second subheading
        let secondSubheading = document.createElement('div')
        secondSubheading.classList.add('stat_subheading_two')
        statElement.appendChild(secondSubheading)

        //Add the stat element to the stats container
        statsContainer.appendChild(statElement)
    })
})

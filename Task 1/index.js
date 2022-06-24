import data from './events.json' assert { type: "json" };
const search = document.getElementById('serachbox');
search.addEventListener('keyup',(e)=>{
    const event = e.target.value.toLowerCase();
    const filteredData = data.filter(two => {
        return two.name.toLowerCase().includes(event);
    })
    display(filteredData);
})
const display = (items)=>{
    const html = items
    .map((item)=>{
        return `
        <div class="row mydiv">
        <div class="col">
        <img class="myimage" src=${item.image}/>
        </div>
        <div class="col">
            <h4 class="myname">${item.name}</h4>
            <p class="mytype">${item.type}<p/>
            <p class="mydate">${item.date}<p/>
            <p class="myseat">Seats Available:${item.SeatsAvailable}<p/>
            ${(item.SeatsAvailable!=0)?`<button class="btn btn-success">Book Now</button>` :`<button class="btn btn-danger">Sold Out</button>` }
        </div>
            <p class="myvenue">Venue : ${item.venue}<p/>
        </div>
        `
    })
    .join('')
    document.getElementById('main').innerHTML = html;
};
display(data)
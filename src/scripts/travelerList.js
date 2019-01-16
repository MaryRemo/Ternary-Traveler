import travelerCollection from "./travelerCollection"
import createTravels from "./travels"

const travelerList = {
    listing(){
        travelerCollection.getAllTravels()
        .then(allTravels => {
            let eventDocFragment = document.createDocumentFragment()
            allTravels.forEach(travelItem => {
                let travelHTML = createTravels.creatingTravels(travelItem)
                eventDocFragment.appendChild(travelHTML)
                console.log(allTravels);
            });
            let outputArticle = document.querySelector(".displayTravels")
            while (outputArticle.firstChild) {
                outputArticle.removeChild(outputArticle.firstChild);
            }
            outputArticle.appendChild(eventDocFragment)

        })
    }
}
export default travelerList
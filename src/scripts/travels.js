import editForm from "./editForm";
import travelerCollection from "./travelerCollection";
import travelerList from "./travelerList";

const createTravels = {
    creatingTravels(travelObject){
        let travelArticle = document.createElement("fieldset");

        let travelName = document.createElement("h3")
        travelName.textContent = travelObject.name;

        let travelDescription = document.createElement("section")
        travelDescription.textContent = travelObject.description;

        let travelCost = document.createElement("section")
        travelCost.textContent = travelObject.cost;

        let travelPlace = document.createElement("section")
        travelPlace.textContent = travelObject.place;

        let travelReview = document.createElement("section")
        travelReview.textContent = travelObject.review;

        let editButton = document.createElement("button")
        editButton.textContent = "Edit Event"
        editButton.setAttribute("id", `editEvent--${travelObject.id}`)
        editButton.addEventListener("click", () => {
        let articleID = event.target.id
        console.log(articleID)
        let travelEditId = articleID.split("--")[1]
        console.log(travelEditId)
    travelerCollection.getTravel(travelEditId)
    .then(response => {
        editForm.createEditForm(response)
        })
    })

        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete Event"
        deleteButton.setAttribute("id", `deleteEvent--${travelObject.id}`)
        deleteButton.addEventListener("click", () => {
            console.log(event)
            alert("Are you sure you want to delete?")
            let deleteTravelId = event.target.id.split("--")[1]
            travelerCollection.deleteTravels(deleteTravelId)
    .then(response => {
           travelerList.listing()
           console.log(response)
        })
    })

    travelArticle.appendChild(travelName)
    travelArticle.appendChild(travelDescription)
    travelArticle.appendChild(travelCost)
    travelArticle.appendChild(travelPlace)
    travelArticle.appendChild(travelReview)
    travelArticle.appendChild(editButton)
    travelArticle.appendChild(deleteButton)


        return travelArticle
    }
}

export default createTravels
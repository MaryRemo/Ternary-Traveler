import travelerCollection from "./travelerCollection"
import travelerList from "./travelerList"

const editForm = {
    createEditForm (travelToEdit) {
        let travelNameField = document.createElement("p")
        let travelNameLabels = document.createElement("label")
        travelNameLabels.textContent = "Cost"
        let travelNameInput = document.createElement("input")
        travelNameInput.value = travelToEdit.cost

        travelNameField.appendChild(travelNameLabels)
        travelNameField.appendChild(travelNameInput)

        let travelReviewField = document.createElement("p")
        let travelReviewLabel = document.createElement("label")
        travelReviewLabel.textContent = "Review"
        let travelReviewInput = document.createElement("input")
        travelReviewInput.value = travelToEdit.review

        travelReviewField.appendChild(travelReviewLabel)
        travelReviewField.appendChild(travelReviewInput)

        let updateButton = document.createElement("button")
        updateButton.textContent = "Update"

        updateButton.addEventListener("click", () => {
            let editedEvents = {
                cost: travelNameInput.value,
                review: travelReviewInput.value
            }
            travelerCollection.editTravels(travelToEdit.id, editedEvents)
            .then(response => {
                travelerList.listing()
                console.log(response)

                let travelItemArticle = document.querySelector(".displayTravels")
                travelItemArticle.innerHTML = ""
            })
        })
        let eventItemArticle = document.querySelector(".displayTravels")

        // while (eventItemArticle.firstChild) {
        //     eventItemArticle.removeChild(eventItemArticle.firstChild)
        // }

        eventItemArticle.innerHTML = "",
        eventItemArticle.appendChild(travelNameField)
        eventItemArticle.appendChild(travelReviewField)
        eventItemArticle.appendChild(updateButton)
    }
}
export default editForm
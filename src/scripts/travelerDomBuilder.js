import travelerCollection from "./travelerCollection"
import travelerList from "./travelerList"

const travelBuilder = {
    travelBuilding(){

//      Dropdown to pick which place the point of interest is located in

        let eventHeader = document.createElement("h2");
        eventHeader.textContent = "Ternary Traveler";
        eventHeader.setAttribute("id", "formTravel_id")

        // Name of the point of interest
        let travelField = document.createElement("fieldset")

        let travelNameLabel = document.createElement("label")
        travelNameLabel.setAttribute("for", "travel__name")
        let inputTravel = document.createElement("input");
        inputTravel.setAttribute("id", "travelName")
        inputTravel.placeholder= "Name"
        inputTravel.setAttribute("name", "travel-name")


        travelField.appendChild(travelNameLabel)
        travelField.appendChild(inputTravel)

        // Description of the point of interest
        let descriptionField = document.createElement("fieldset")

        let descriptionLabel = document.createElement("label")
        descriptionLabel.setAttribute("for", "description")
        let inputDescription = document.createElement("input")
        inputDescription.setAttribute("id", "description")
        inputDescription.placeholder= "Description"
        inputDescription.setAttribute("name", "description")

        descriptionField.appendChild(descriptionLabel)
        descriptionField.appendChild(inputDescription)

        // Cost of visiting the point of interest
        let costField = document.createElement("fieldset")

        let costLabel = document.createElement("label")
        costLabel.setAttribute("for", "cost")
        let inputCost = document.createElement("input")
        inputCost.setAttribute("id", "cost")
        inputCost.placeholder= "Cost"
        inputCost.setAttribute("name", "cost")

        costField.appendChild(costLabel)
        costField.appendChild(inputCost)

        let placeField = document.createElement("fieldset")

        let placeLabel = document.createElement("select")
        placeLabel.setAttribute("for", "countries")
        placeLabel.setAttribute("id", "place")

        travelerCollection.getAllTravel()
        .then(places => {
            places.forEach(place => {
             placeLabel.appendChild(new Option(place.name, place.id));
        })

    })
      // placeLabel.appendChild(new Option("Switzerland", "Switzerland"));
        // placeLabel.appendChild(new Option("France", "France"));
        placeField.appendChild(placeLabel)
        let submitButton = document.createElement("button")
        submitButton.textContent = "Add Travel"
        submitButton.setAttribute("class", "travel-save")

        submitButton.addEventListener("click", this.handleAddNewTravel)

        let travelFormFragment = document.createDocumentFragment()
        travelFormFragment.appendChild(eventHeader)
        travelFormFragment.appendChild(travelField)
        travelFormFragment.appendChild(descriptionField)
        travelFormFragment.appendChild(costField)
        travelFormFragment.appendChild(placeField)
        travelFormFragment.appendChild(submitButton)

        let formArticle = document.querySelector(".output")
        formArticle.appendChild(travelFormFragment)
        return inputTravel
    },
    handleAddNewTravel () {
        let inputName = document.querySelector("#travelName").value
        let inputTravelDescription = document.querySelector("#description").value
        let inputTravelCost = document.querySelector("#cost").value
        let inputTravelPlace = document.querySelector("#place").value


        console.log(inputTravelPlace, "hey")

        let newTravel = {
            name: inputName,
            description: inputTravelDescription,
            cost: inputTravelCost,
            placeId: inputTravelPlace
        }
        travelerCollection.postAllTravels(newTravel)
    .then(response => {
        travelerList.listing()
           console.log(response)
        })
    }
}

export default travelBuilder
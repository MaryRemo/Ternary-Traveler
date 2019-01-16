const travelerCollection = {

    getAllTravels (){
        return fetch("http://localhost:8088/interests?_expand=place")
        .then(response => response.json())
    },
    getAllTravel (){
        return fetch("http://localhost:8088/places")
        .then(response => response.json())
    },
    postAllTravels(travelToSave){
       return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify(travelToSave)
    })
  },
  deleteTravels(eventlId){
    return fetch(`http://localhost:8088/interests/${eventlId}`, {
     method: "DELETE",
     headers: {
       "Content-Type": "application/json"
   }
  })
 },

    getTravel(eventlId){
        return fetch(`http://localhost:8088/interests/${eventlId}`)
        .then(response => response.json())
    },
    editTravels(eventlId, eventToEdit) {
        return fetch(`http://localhost:8088/interests/${eventlId}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
    },
    body: JSON.stringify(eventToEdit)
  })
},
}
export default travelerCollection
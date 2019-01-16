const travelerCollection = {

    getAllTravels (){
        return fetch("http://localhost:8088/interests")
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
  deleteTravels(travelId){
    return fetch(`http://localhost:8088/interests/${travelId}`, {
     method: "DELETE",
     headers: {
       "Content-Type": "application/json"
   }
  })
 },

    getTravel(travelId){
        return fetch(`http://localhost:8088/interests/${travelId}`)
        .then(response => response.json())
    },
    editTravels(travelId, eventToEdit) {
        return fetch(`http://localhost:8088/interests/${travelId}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
    },
    body: JSON.stringify(eventToEdit)
  })
},
}
export default travelerCollection
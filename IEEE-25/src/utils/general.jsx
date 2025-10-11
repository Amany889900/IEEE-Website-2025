import Card from "../Components/Card";

// import digital from "./../assets/images/digital2.png"
// import analog from "./../assets/images/analog.png"
// import embedded from "./../assets/images/embedded.png"
// import testing from "./../assets/images/testing.png"
// import dev from "./../assets/images/dev3.png"
import workshopsData from "./workshopDetails";


export const workshopsList = 
    // <Card name={"ANALOG ELECTRONICS"} img={analog}></Card>,
    // <Card name={"Digital"} img={digital}></Card>,
    // <Card name={"SW Testing"} img={testing}></Card>,
    // <Card name={"SW Dev"} img={dev}></Card>,
    // <Card name={"EMBEDDED SYSTEMS"} img={embedded}></Card>,
 // CORRECT signature: Uses 'workshop' object and accesses its properties.
  workshopsData.map((workshop) => (
  <Card 
    key={workshop.id} // Always use a key for array mapping
    name={workshop.name} 
    img={workshop.Cardimg} 
    id={workshop.id}
  />
))




import Card from "../Components/Card";

import digital from "./../assets/images/digital2.png"
import analog from "./../assets/images/analog.png"
import embedded from "./../assets/images/embedded.png"
import testing from "./../assets/images/testing.png"
import dev from "./../assets/images/dev3.png"


export const workshopsList = [<Card name={"Analog"} img={analog}></Card>,
    <Card name={"Digital"} img={digital}></Card>,
    <Card name={"SW Testing"} img={testing}></Card>,
    <Card name={"SW Dev"} img={dev}></Card>,
    <Card name={"Embedded"} img={embedded}></Card>,
]
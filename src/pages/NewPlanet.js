import React ,{useState}from 'react'
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper"


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];


export default function NewPlanet() {
    const [valus,setValus] = useState({
        planetName:"",
        galaxyName:"",
        diametr:"",
        distance:"",
        yourName:"",
        email:"",
    })

    const  [sended,setSended] = useState(false)

    const  changePlanetName = (event)=>{
        setValus({
            ...valus,planetName:event.target.value
        })
    }

    const  changeDiameterName = (event)=>{
        setValus({
            ...valus,diametr:event.target.value
        })
    }



    const  changdistance = (event)=>{
        setValus({
            ...valus,distance:event.target.value
        })
    }

    const  changYourName = (event)=>{
        setValus({
            ...valus,yourName:event.target.value
        })
    }


    const  changeEmail = (event)=>{
        setValus({
            ...valus,email:event.target.value
        })
    }




    const  changeGal = (event)=>{
        setValus({
            ...valus,galaxyName:event.target.value
        })
    }

    const send =(event)=>{
        event.preventDefault();
        setSended(true)
        console.log(valus)
    }



    return (
        <Wrapper >
           <p className={"text-of-new-planet"}>If you found new planet you can add it to our directory (Reactive forms demo)</p>
            <form action="" className="NewPlanet" onSubmit={send}>
                <input
                    type="text"
                    placeholder="Planet Name"
                    onChange={changePlanetName}
                    value={valus.planetName}
                />
                <span></span>
                {/*<Select*/}
                {/*    onChange={changeGal}*/}
                {/*    options={options}*/}
                {/*    value={valus.GalaxyName}*/}
                {/*/>*/}
                <input
                    type="number"
                    placeholder="Diameter (km)"
                    value={valus.diametr}
                    onChange={changeDiameterName}
                />
                <input
                    type="text"
                    placeholder="Distance (mln km)"
                    value={valus.distance}
                    onChange={changdistance}

                />
                <input type="text"
                 placeholder="Your name"
                 value={valus.yourName}
                    onChange={changYourName}
                  />

                <input
                    type="email"
                   placeholder="Your email"
                    value={valus.email}
                    onChange={changeEmail}
                />
                {
                    sended? <div className={"success-message"}> Thank you!</div>:null
                }
                <button className={"btn-last"}> Submit</button>
            </form>
            <Footer/>
        </Wrapper>
    )
}

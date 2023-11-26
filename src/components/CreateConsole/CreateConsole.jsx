// import React, { useState } from 'react';

import Header from '../Header/Header.jsx'
import Info from '../Info/Info.jsx'
import Footer from '../Footer/Footer.jsx'

export default function CreateConsole() {
    // const [consoleInfo, setConsoleInfo] = useState({
    //     consoleName: '',
    //     manufacturer: '',
    //     releaseDate: '',
    //     storageCapacity: '',
    //     color: '',
    //     imgUrl: '',
    //     price: '',
    // });
    
    // const handleConsoleInfoChange = (e) => {
    // setConsoleInfo({
    //     ...consoleInfo,
    //     [e.target.name]: e.target.value,
    // });
    // };
    
    const createConsoleSubmitHandler = (e) => {
        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.currentTarget));

        console.log(gameData);

        // Perform the action with the gathered data, like sending it to a server or storing it in state
        // console.log('Console Info:', consoleInfo);
        // You can add your logic to submit the data to a server or perform other actions.
    };

    return (
    <div className="hero_area">
        <Header />
        {/* start CreateConsole section */}
        <section className="contact_section layout_padding">
            <div className="container">
            <div className="heading_container">
                <h2>Create Console</h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                <div className="form_container">
                    <form id="create" onSubmit={createConsoleSubmitHandler}>
                    <div>
                        Console Name:
                        <input
                            type="text"
                            id="consoleName"
                            placeholder="Console Name"
                            name="consoleName"
                            // value={consoleInfo.consoleName}
                            // onChange={handleConsoleInfoChange}
                        />
                    </div>
                    <div>
                        Manufacturer:
                        <input 
                            type="text"
                            id="manufacturer" 
                            placeholder="Manufacturer" 
                            name="manufacturer"
                            // value={consoleInfo.manufacturer}
                            // onChange={handleConsoleInfoChange}
                        />
                    </div>
                    <div>
                        Release Date:
                        <input 
                            type="date" 
                            id="releaseDate" 
                            placeholder="Release Date" 
                            name="releaseDate"
                            // value={consoleInfo.releaseDate}
                            // onChange={handleConsoleInfoChange}
                        />
                    </div>
                    <div>
                        Storage Capacity:
                        <input 
                        type="text" 
                        id="storageCapacity"
                        placeholder="Storage Capacity" 
                        name="storageCapacity"
                        // value={consoleInfo.storageCapacity}
                        // onChange={handleConsoleInfoChange}
                        />
                    </div>
                    <div>
                        Color:
                        <input 
                        type="text" 
                        id="color"
                        placeholder="Color" 
                        name="color"
                        // value={consoleInfo.color}
                        // onChange={handleConsoleInfoChange}
                        />
                    </div>
                    <div>
                        Image:
                        <input
                        type="text"
                        id="imageUrl"
                        placeholder="Upload a photo..."
                        name="imgUrl"
                        // value={consoleInfo.imgUrl}
                        // onChange={handleConsoleInfoChange}
                        />
                    </div>
                    <div>
                        Price:
                        <input
                        type="number"
                        id="price"
                        min="20.00"
                        placeholder="Price"
                        name="price"
                        // value={consoleInfo.price}
                        // onChange={handleConsoleInfoChange}
                        />
                    </div>
                    <div className="btn_box">
                        <button>SEND</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* end CreateConsole section */}
        <Info />
        <Footer />
    </div>
    )
}

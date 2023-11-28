// import React, { useState } from 'react';
// import { create } from '../../services/consoleService.js';
import * as consoleService from '../../services/consoleService.js';
import { useNavigate } from 'react-router-dom';


import Header from '../Header/Header.jsx'
import Info from '../Info/Info.jsx'
import Footer from '../Footer/Footer.jsx'

export default function CreateConsole() {
    const navigate = useNavigate();
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
    
    const createConsoleSubmitHandler = async (e) => {
        e.preventDefault();

        const consoleData = Object.fromEntries(new FormData(e.currentTarget));

        console.log(consoleData);

        // const result = await consoleService.create(consoleData);
        // console.log(result);
        try {
            await consoleService.create(consoleData);
            
            navigate('/products')
        } catch (error) {
            // Error notification
            console.log(error);
        }



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
                        <label htmlFor="console-name">Console Name:</label>
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
                        <label htmlFor="manufacturer">Manufacturer:</label>
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
                        <label htmlFor="release-date">Release Date:</label>
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
                        <label htmlFor="storage-capacity">Storage Capacity:</label>
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
                        <label htmlFor="color">Color:</label>
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
                        <label htmlFor="image">Image:</label>
                        <input
                        type="text"
                        id="imageUrl"
                        placeholder="Upload a photo..."
                        name="imageUrl"
                        // value={consoleInfo.imgUrl}
                        // onChange={handleConsoleInfoChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input
                        type="number"
                        step="any"
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

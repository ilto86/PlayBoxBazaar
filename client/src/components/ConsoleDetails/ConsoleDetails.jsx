// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import * as consoleService from '../../services/consoleService';
// // import * as commentService from '../../services/commentService';


// export default function ConsoleDetails() {
//     const [console, setConsole] = useState({});
//     // const [comments, setComments] = useState([]);
//     const { consoleId } = useParams();

//     useEffect(() => {
//         consoleService.getOne(consoleId)
//             .then(setConsole);

//         // commentService.getAll(consoleId)
//         //     .then(setComments);
//     }, [consoleId]);

//     // const addCommentHandler = async (e) => {
//     //     e.preventDefault();

//     //     const formData = new FormData(e.currentTarget);

//     //     const newComment = await commentService.create(
//     //         consoleId,
//     //         formData.get('username'),
//     //         formData.get('comment')
//     //     );

//     //     setComments(state => [...state, newComment]);
//     // }

//     return (
//         <section id="product_section">
//             <div className="container">
//                 <div className="product_heading">
//                     <h1>Console Details</h1>
//                 </div>
//                 <div className="product_container">
//                     <div className="box">
//                         <div className="box-content">
//                             <div className="img-box">
//                                 <img src={console.imageUrl} alt="" />
//                                 {/* <img src="images/Playstation/PS5-Console-wController(2).jpg" alt="" /> */}
//                             </div>
//                             <div className="detail-box">
//                                 <div className="text">
//                                     <h6>Console Name: {console.consoleName}</h6>
//                                     <h6>manufacturer: {console.manufacturer}</h6>
//                                     <h6>Storage Capacity: {console.storageCapacity}</h6>
//                                     <h6>Release Date: {console.releaseDate}</h6>
//                                     <h6>Color: {console.color}</h6>
//                                     <h5>
//                                         Price: 300 <span>€</span>
//                                     </h5>
//                                 </div>
//                                 <div className="like">
//                                     <h6>Like</h6>
//                                     <div className="star_container">
//                                         <i className="fa fa-star" aria-hidden="true" />
//                                         <i className="fa fa-star" aria-hidden="true" />
//                                         <i className="fa fa-star" aria-hidden="true" />
//                                         <i className="fa fa-star" aria-hidden="true" />
//                                         <i className="fa fa-star" aria-hidden="true" />
//                                     </div>
//                                 </div>

//                                 {/* <div className="comments">
//                                     <h2>Comments:</h2>
//                                     <ul>
//                                         {comments.map(({ _id, username, text }) => (
//                                             <li key={_id} className="comment">
//                                                 <p>{username}: {text}</p>
//                                             </li>
//                                         ))}
//                                     </ul>

//                                     {comments.length === 0 && (
//                                         <p className="no-comment">No comments.</p>
//                                     )}
//                                 </div> */}
                                
//                                 {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                                
//                                 {/* <div className="buttons">
//                                     <a href="#" className="button">Edit</a>
//                                     <a href="#" className="button">Delete</a>
//                                 </div> */}

//                             </div>

//                             {/* <article className="create-comment">
//                                 <label>Add new comment:</label>
//                                 <form className="form" onSubmit={addCommentHandler}>
//                                     <input type="text" name="username" placeholder="username" />
//                                     <textarea name="comment" placeholder="Comment......"></textarea>
//                                     <input className="btn submit" type="submit" value="Add Comment" />
//                                 </form>
//                             </article> */}

//                         </div>
//                         <div className="btn-box">
//                             <a href="">Edit</a>
//                             <a href="">Delete</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }





import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as consoleService from '../../services/consoleService';
import styles from './ConsoleDetails.module.css'; // Adjust the path accordingly

export default function ConsoleDetails() {
    const [consoleDetails, setConsoleDetails] = useState({});
    const { consoleId } = useParams();

    useEffect(() => {
        consoleService.getOne(consoleId)
            .then(setConsoleDetails);
    }, [consoleId]);

    return (
        // <section style={{ padding: '40px 0' }}>
        <section className={styles.container}>
            <div className="container">
                {/* <div style={{ textAlign: 'center', marginBottom: '20px' }}> */}
                <div className={styles.heading}>
                    <h1>Console Details</h1>
                </div>
                {/* <div style={{ display: 'flex', justifyContent: 'center' }}> */}
                <div className={styles.consoleDetailsContainer}>
                    <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0', overflow: 'hidden' }}>
                                <img src={consoleDetails.imageUrl} alt={`Console: ${consoleDetails.consoleName}`} style={{ width: '100%' }} />
                            </div>
                            <div style={{ padding: '20px' }}>
                                <div style={{ marginBottom: '15px' }}>
                                    <h6>Console Name: {consoleDetails.consoleName}</h6>
                                    <h6>Manufacturer: {consoleDetails.manufacturer}</h6>
                                    <h6>Storage Capacity: {consoleDetails.storageCapacity}</h6>
                                    <h6>Release Date: {consoleDetails.releaseDate}</h6>
                                    <h6>Color: {consoleDetails.color}</h6>
                                    <h5>Price: {consoleDetails.price} <span>€</span></h5>
                                </div>
                                <div>
                                    <h6>Like</h6>
                                    {/* Add your star rating here */}
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                            {/* Add your edit and delete functionalities here */}
                            <a href="#" style={{ margin: '0 10px' }}>Edit</a>
                            <a href="#" style={{ margin: '0 10px' }}>Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

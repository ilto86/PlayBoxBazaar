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





// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import * as consoleService from '../../services/consoleService';
// import styles from './ConsoleDetails.module.css'; // Adjust the path accordingly

// export default function ConsoleDetails() {
//     const [consoleDetails, setConsoleDetails] = useState({});
//     const { consoleId } = useParams();

//     useEffect(() => {
//         consoleService.getOne(consoleId)
//             .then(setConsoleDetails);
//     }, [consoleId]);

//     return (
//         // <section style={{ padding: '40px 0' }}>
//         <section className={styles.container}>
//             <div className="container">
//                 {/* <div style={{ textAlign: 'center', marginBottom: '20px' }}> */}
//                 <div className={styles.heading}>
//                     <h1>Console Details</h1>
//                 </div>
//                 {/* <div style={{ display: 'flex', justifyContent: 'center' }}> */}
//                 <div className={styles.consoleDetailsContainer}>
//                     {/* <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}> */}
//                     <div className={styles.detailsGrid}>
//                         {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}> */}
//                         <div className={styles.consoleImageContainer}>
//                             {/* <div style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0', overflow: 'hidden' }}> */}
//                             <div>
//                                 {/* <img src={consoleDetails.imageUrl} alt={`Console: ${consoleDetails.consoleName}`} style={{ width: '100%' }} /> */}
//                                 <img src={consoleDetails.imageUrl} alt={`Console: ${consoleDetails.consoleName}`} className={styles.consoleImage} />
//                             </div>
//                             {/* <div style={{ padding: '20px' }}> */}
//                             <div className={styles.detailsContent}>
//                                 {/* <div style={{ marginBottom: '15px' }}> */}
//                                 <div>
//                                     <h6>Console Name: {consoleDetails.consoleName}</h6>
//                                     <h6>Manufacturer: {consoleDetails.manufacturer}</h6>
//                                     <h6>Storage Capacity: {consoleDetails.storageCapacity}</h6>
//                                     <h6>Release Date: {consoleDetails.releaseDate}</h6>
//                                     <h6>Color: {consoleDetails.color}</h6>
//                                     <h5>Price: {consoleDetails.price} <span>€</span></h5>
//                                 </div>
//                                 <div>
//                                     <h6>Like</h6>
//                                     {/* Add your star rating here */}
//                                 </div>
//                             </div>
//                         </div>
//                         {/* <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}> */}
//                         <div className={styles.buttonsContainer}>
//                             {/* Add your edit and delete functionalities here */}
//                             {/* <a href="#" style={{ margin: '0 10px' }}>Edit</a> */}
//                             <a href="#" className={styles.button}>Edit</a>
//                             {/* <a href="#" style={{ margin: '0 10px' }}>Delete</a> */}
//                             <a href="#" className={styles.button}>Delete</a>
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
import * as commentService from '../../services/commentService';

import consoleStyles from './ConsoleDetails.module.css';
import commentStyles from './Comments.module.css';

export default function ConsoleDetails() {
    const [consoleDetails, setConsoleDetails] = useState({});
    const [comments, setComments] = useState([]);
    const { consoleId } = useParams();


    useEffect(() => {
        consoleService.getOne(consoleId)
            .then(setConsoleDetails);

        commentService.getAll(consoleId)
            .then(setComments);
    }, [consoleId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            consoleId,
            formData.get('username'),
            formData.get('comment')
        );

        setComments(state => [...state, newComment]);
    }

    console.log(consoleDetails.imageUrl);
    console.log(consoleDetails.releaseDate);

    return (

        <section id={consoleStyles.console_details}>
            <h1>Console Details</h1>
            <div className={consoleStyles.details_section}>
                <div className={consoleStyles.console_header}>
                    <img className={consoleStyles.console_img} src={consoleDetails.imageUrl} alt={console.title} />
                    <h1>{consoleDetails.consoleName}</h1>
                    <h2 className={consoleStyles.text}>Manufacterer: &nbsp;
                        <span className={consoleStyles.spans}>{consoleDetails.manufacturer}</span>
                    </h2>
                    <h2 className={consoleStyles.text}>Storage Capacity: &nbsp;
                        <span className={consoleStyles.spans}>{consoleDetails.storageCapacity}</span>
                    </h2>
                    <h2 className={consoleStyles.text}>Release Date: &nbsp;
                        <span className={consoleStyles.spans}>{consoleDetails.releaseDate}</span>
                    </h2>
                    <h2 className={consoleStyles.text}>Color: &nbsp;
                        <span className={consoleStyles.spans}>{consoleDetails.color}</span>
                    </h2>
                    <h2 className={consoleStyles.text}>Price: &nbsp;
                        <span className={consoleStyles.spans}> {consoleDetails.price} € </span>
                    </h2>
                    
                    {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                    <div className={consoleStyles.btn_ed}>
                        <a href="#" className={consoleStyles.btn1}>Edit</a>
                    </div>  
                    <div className={consoleStyles.btn_ed}>
                        <a href="#" className={consoleStyles.btn2}>Delete</a>
                    </div>
                </div>

                <div className={commentStyles.details_comments}>
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, username, text }) => (
                            <li key={_id} className={commentStyles.comment}>
                                {/* <p>{username}: {text}</p> */}
                                <p>
                                    {/* <span style={{ color: '#dcf904'}}>{username}</span> */}
                                    {/* <span style={{ color: 'darkturquoise'}}>{username}</span> */}
                                    <span style={{ color: 'lightblue'}}>{username}</span>
                                    <span style={{ color: 'white'}}>: </span>
                                    {/* <span style={{ color: '#a3e1c4'}}>{text}</span> */}
                                    {/* <span style={{ color: 'lightblue'}}>{text}</span> */}
                                    {/* <span style={{ color: 'lightskyblue'}}>{text}</span> */}
                                    {/* <span style={{ color: 'darkturquoise'}}>{text}</span> */}
                                    <span style={{ color: 'lightcyan'}}>{text}</span>
                                </p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                    <p className={commentStyles.no_comment}>No comments yet.</p>
                    )}
                </div>

                <article className={commentStyles.create_comment}>
                    <label>Add new comment:</label>
                    {/* <form className={commentStyles.form} onSubmit={addCommentHandler}>
                        <input id={consoleStyles.type_details} className={commentStyles.input_username} type="text" name="username" placeholder="username" />
                        <textarea id={commentStyles.textarea_message} name="comment" placeholder="Comment......"></textarea>
                        <input id={consoleStyles.type_details} className={`${commentStyles.btn_submit}`, ${commentStyles.input_username}} type="submit" value="Add Comment" />
                    </form> */}
                    <form className={commentStyles.form} onSubmit={addCommentHandler}>
                        <input
                            id={commentStyles.input_username}
                            // className={`${consoleStyles.type_details} ${commentStyles.input_username}`}
                            className={commentStyles.input_username}
                            type="text"
                            name="username"
                            placeholder="username"
                        />
                        <textarea
                            // id={commentStyles.textarea_message}
                            name="comment"
                            placeholder="Comment......"
                        ></textarea>
                        <input
                            // className={`${consoleStyles.type_details} ${commentStyles.btn_sbmt}`}
                            className={commentStyles.btn_sbmt}
                            type="submit"
                            value="Add Comment"
                        />
                    </form>
                </article>
            </div>


        </section>
    );
}


        // <section className={styles.container}>
        //     <div className={styles.heading}>
        //         <h1>Console Details</h1>
        //     </div>
        //     <div className={styles.consoleDetailsContainer}>
        //         <div className={styles.detailsGrid}>
        //             <div className={styles.consoleImageContainer}>
        //                 <img src={consoleDetails.imageUrl} alt={`Console: ${consoleDetails.consoleName}`} className={styles.consoleImage} />
        //             </div>
        //             <div className={styles.detailsContent}>
        //                 <div>
                            // <h6>Console Name: {consoleDetails.consoleName}</h6>
                            // <h6>Manufacturer: {consoleDetails.manufacturer}</h6>
                            // <h6>Storage Capacity: {consoleDetails.storageCapacity}</h6>
                            // <h6>Release Date: {consoleDetails.releaseDate}</h6>
                            // <h6>Color: {consoleDetails.color}</h6>
                            // <h5>Price: {consoleDetails.price} <span>€</span></h5>
        //                 </div>
        //             </div>

        //             <div>
        //                 <h5>Like: &nbsp;
        //                     <i style={{ color: '#e2ba1b'}} className="fa fa-star" aria-hidden="true" />
        //                     <i style={{ color: '#e2ba1b'}} className="fa fa-star" aria-hidden="true" />
        //                     <i style={{ color: '#e2ba1b'}} className="fa fa-star" aria-hidden="false" />
        //                     <i style={{ color: '#e2ba1b'}} className="fa fa-star" aria-hidden="false" />
        //                     <i style={{ color: '#e2ba1b'}} className="fa fa-star" aria-hidden="false" />
        //                 </h5>
        //             </div>

        //             <div className="comments">

                    /* {`comments ${styles.comments}`} */

                        /* <h5>Comments:</h5>
                        <ul>
                            {comments.map(({ _id, username, text }) => (
                                <li key={_id} className="comment">
                                    <p>{username}: {text}</p>
                                </li>
                            ))}
                        </ul>
                            {comments.length === 0 && (
                            <p className="no-comment">No comments.</p>
                            )}
                    </div>
                    <div className={styles.buttonsContainer}>
                        <a href="#" className={styles.button}>Edit</a>
                        <a href="#" className={styles.button}>Delete</a>
                    </div>
                    <article className="create-comment">
                        <label className="form-label">Add new comment:</label>
                        <form className="form" onSubmit={addCommentHandler}>
                            <input type="text" name="username" className="form-control" placeholder="username" />
                            <textarea name="comment" className="form-control" placeholder="Comment......"></textarea>
                            <input className="btn btn-primary" type="submit" value="Add Comment" /> */

                            /* {`form ${styles.form}`} */

                        /* </form>
                    </article>
                </div> */




                /* <div className="comments">
                            <h2>Comments:</h2>
                            <ul>
                                {comments.map(({ _id, username, text }) => (
                                    <li key={_id} className="comment">
                                        <p>{username}: {text}</p>
                                    </li>
                                ))}
                            </ul>

                            {comments.length === 0 && (
                                <p className="no-comment">No comments.</p>
                            )}
                        </div>
                                
{/*                     <!-- Edit/Delete buttons ( Only for creator of this game )  --> */
                                
                        /* <div className="buttons">
                            <a href="#" className="button">Edit</a>
                            <a href="#" className="button">Delete</a>
                        </div>

                        <article className="create-comment">
                            <label>Add new comment:</label>
                            <form className="form" onSubmit={addCommentHandler}>
                                <input type="text" name="username" placeholder="username" />
                                <textarea name="comment" placeholder="Comment......"></textarea>
                                <input className="btn submit" type="submit" value="Add Comment" />
                            </form>
                        </article> */

                /* <div className={styles.buttonsContainer}>
                    <a href="#" className={styles.button}>Edit</a>
                    <a href="#" className={styles.button}>Delete</a>
                </div>
            </div>
        </section> */

//     );
// }

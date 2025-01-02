import {Form} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import {updateList} from "./slice.js";

function ReduxWindow(){
    const [checkedOptions, setCheckedOptions] = useState([]);
    const dispatch = useDispatch()
    const selector = useSelector((state)=>state.slicer.list);

    const handleChecker = (e)=>{
        if(e.target.checked){
            setCheckedOptions((prevstate)=>([
                ...prevstate,
                e.target.value
            ]))
        }else{
            setCheckedOptions(checkedOptions.filter((it)=>{
                if(it !== e.target.value){
                    return it;
                }
            }))
        }
    }
    /*
    const[user, setUser] = useState({
        userName : "",
        email : "",
        phoneNumber : "",
        sex : null,
        preferences : []
    });

    const handleUserUpdate = (event,type)=>{
        setUser((prevstate)=>(
            {
                ...prevstate,
                [type] : event.target.value
            }
        ))
    } */

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.checker = checkedOptions;
        // // for Redux sending to server is option
        // await axios({
        //     method : "POST",
        //     url : "http://localhost:3000/createReduxUser",
        //     data : data,
        //     headers : {
        //         "Content-Type" : "application/json"
        //     }
        // })
        // for Redux we need to update the info to Store
        dispatch(updateList(data))
    }

    //UseEffect to run whenever change in dispatch
    useEffect(()=>{
        console.log(selector)
    },[])

    return <>
        <div className="redux-container">
            <div className="redux-formFirst">
                <Form id="redux-form" onSubmit={handleSubmit}>
                    <label htmlFor="redux-username">User Name</label>
                    <input required type="text" id="redux-username" placeholder="User Name" name="username" />
                    <label htmlFor="redux-email">Email ID</label>
                    <input required type="email" id="redux-email" placeholder="Email Id"name="email"/>
                    <label htmlFor="redux-phonenumber">Phone Number</label>
                    <input required type="number" id="redux-phonenumber" placeholder="Phone Number" name="phonenumber" />
                    <div className="redux-radio">
                        <label className="male">
                            <input type="radio" name="radio" value="Male" required />
                            <p>Male</p>
                        </label>
                        <p className="redux-divider">|</p>
                        <label className="female">
                            <input type="radio" name="radio" value="Female" required />
                            <p>Female</p>
                        </label>
                    </div>
                    <div className="redux-checkbox">
                        <label className="redux-check">
                            <input type="checkbox" value="idly" name="checker" onChange={handleChecker} />
                            <p>Idly</p>
                        </label>
                        <p className="redux-divider">|</p>
                        <label className="redux-check">
                            <input type="checkbox" value="dosai" name="checker" onChange={handleChecker}/>
                            <p>Dosai</p>
                        </label>
                        <p className="redux-divider">|</p>
                        <label className="redux-check">
                            <input type="checkbox" value="raagi kali" name="checker" onChange={handleChecker}/>
                            <p>Raagi Kali</p>
                        </label>
                        <p className="redux-divider">|</p>
                        <label className="redux-check">
                            <input type="checkbox" value="water" name="checker" onChange={handleChecker}/>
                            <p>Water</p>
                        </label>
                    </div>
                    <input type="submit" className="redux-submit" />
                </Form>
            </div>
            <div className="redux-secondList">
                {
                    selector.length > 0 ?
                        <div className="redux-secondList-list">
                            {
                                selector?.map((it, index) => {
                                    console.log(it);
                                    return <div key={index} className="redux-secondList-item">
                                        <p>Username: {it["username"]}</p>
                                        <p>Email: {it.email}</p>
                                        <p>Phone Number: {it.phonenumber}</p>
                                        <p>Sex: {it.radio}</p>
                                        <p>Preferences: {it.checker.join(", ")}</p>
                                    </div>
                                })
                            }
                        </div> : <div>No User</div>
                }
            </div>

        </div>
    </>
}

export default ReduxWindow;
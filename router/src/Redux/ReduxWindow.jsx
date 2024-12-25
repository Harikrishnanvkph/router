import {Form} from "react-router-dom";
import {useState} from "react";

function ReduxWindow(){
    const[user, setUser] = useState({
        userName : "",
        email : "",
        phoneNumber : "",
        sex : null,
        preferences : []
    });

    const handleUserUpdate = (event,type)=>{
        user[type] = event.target.value
        setUser((prevstate)=>(
            {
                ...prevstate,
                [type] : event.target.value
            }
        ))
    }

    return <>
        <Form>
            <input type="text" placeholder="User Name" value={user["userName"]} onChange={(e)=>handleUserUpdate(e,"userName")}/>
            <input type="email" placeholder="Email Id" value={user["email"]} onChange={(e)=>handleUserUpdate(e,"email")}/>
            <input type="number" placeholder="Phone Number" value={user["phoneNumber"]} onChange={(e)=>handleUserUpdate(e,"phoneNumber")}/>
            <div className="radio">
                <div className="male">
                    <input type="radio" name="radio" value="Male" />
                    <p>Male</p>
                </div>
                <div className="female">
                    <input type="radio" name="radio" value="Female" />
                    <p>Male</p>
                </div>
            </div>
            <div className="checkbox">
                <div className="check">
                    <input type="checkbox"/>
                    <p>Idly</p>
                </div>
                <div className="check">
                    <input type="checkbox"/>
                    <p>Dosai</p>
                </div>
                <div className="check">
                    <input type="checkbox"/>
                    <p>Raagi Kali</p>
                </div>
                <div className="check">
                    <input type="checkbox"/>
                    <p>Water</p>
                </div>
            </div>
        </Form>
    </>
}

export default ReduxWindow;
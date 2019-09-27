import React, {useState} from "react";
import AuthePresenter from"./AuthPresenter"
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
    
    const [action, setAction] = useState("logIn");
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("sun0511777@gmail.com");
    const [requestSecret] = useMutation(LOG_IN,
        { update:(_,{data}) => {
            const {requestSecret} = data;
            if(!requestSecret){
                toast.error("adad");
                setTimeout(()=> setAction("signup",3000))
            } 
        },
        variables: { email: email.value } });
    const createAccount = useMutation(CREATE_ACCOUNT,{
        variables:{
            email: email.value,
            username: username.value,
            firstName: firstName.value,
            lastName:lastName.value
        }
    })

    
    const onSubmit =async(e) => {
        e.preventDefault();
        if(action === "logIn"){
            if(email.value !== ""){
                try{
                    await requestSecret();
                }catch{
                    toast.error("fgdgdgd")
                }
            }else{
                toast.error("sadadad")
            }
        }else if(action === "signUp"){
            if(email.value !== "" && username.value !== "" && firstName.value !== "" && lastName.value !== ""){
                try{
                   await createAccount(); 
                }catch{
                    toast.error("xczczcz")
                }
            }else{
                toast.error("asdadad")
            }
        }
    }

    return<AuthePresenter
    setAction={setAction}
    action={action}
    username={username}
    firstName={firstName}
    lastName={lastName}
    email={email}
    onSubmit={onSubmit}/>
}
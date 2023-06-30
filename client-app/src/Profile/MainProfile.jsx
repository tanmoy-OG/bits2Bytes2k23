import {AdminProfile} from "./AdminProfile";
import {UserProfile} from "./UserProfile";

export const MainProfile = (props) => {

    if(props.profileType === "admin") 
        return (<AdminProfile data={props.data} name="Sam" email="abc@gmail.com" password="123" />);

    return (<UserProfile data={props.data} />);
}

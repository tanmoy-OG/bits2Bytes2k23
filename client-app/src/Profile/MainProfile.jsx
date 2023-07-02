import {AdminProfile} from "./AdminProfile";
import {UserProfile} from "./UserProfile";

export const MainProfile = (props) => {

    if(props.profileType === "admin") 
        return (<AdminProfile name="Sam" email="abc@gmail.com" password="12345678" />);

    return (<UserProfile />);
}

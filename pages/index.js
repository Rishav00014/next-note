import {useSession,signIn,signOut} from 'next-auth/react' 

import Header from "../component/Header"
import Footer from "../component/Footer"
import Profile from "../component/Profile"
import List from "../component/List";
import Login from "../component/login";

export default function () {
    const {data:session}=useSession();

    if(session){
        return (
            <div>
                <Header />
                <div className="body">
                    <Profile />
                    <List/>
                </div>
                <Footer />
            </div>
        )
      }else{
        return (
            <div>
            <Header />
            <div className="body">
                <Login />
            </div>
            <Footer />
        </div>
        )
      }
}



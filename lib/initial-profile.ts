import { RedirectToSignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import { db } from '@/lib/db'
import { redirect } from "next/navigation";


// a neat util function for handling the current user's signin or signup

export const initialProfile = async ()=>{

    const user = await currentUser();

    if(!user){
        redirect("/sign-in")
    }

    const profile = await db.profile.findUnique({
        where : {
            userId : user.id
        }
    });

    if(profile){
        return profile;
    }

    const newProfile = await db.profile.create({
        data : {
            userId : user.id,
            name : `${user.firstName} ${user.lastName}`,
            imageUrl : user.imageUrl,
            email : user.emailAddresses[0].emailAddress,
        }
    })

    return newProfile; 

}
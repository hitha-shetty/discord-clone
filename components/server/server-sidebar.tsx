import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { ChannelType } from "@/lib/generated/prisma";
import { redirect } from "next/navigation";
import { ServerHeader } from "./server-header";

interface ServerSidebarProps{
    serverId : string;
}


export const ServerSideBar = async ({
    serverId} : ServerSidebarProps
)=>{

    const profile = await currentProfile();

    const server = await db.server.findUnique({
        where : {
            id : serverId
        },
        include : {
            channels : {
                orderBy: {
                    createdAt : "asc"
                }
            },
            members : {
                include : {
                    profile : true
                },
                orderBy : {
                    role : "asc"
                }
            }
        }
    })

    const textChannels = server?.channels.filter((channel)=> channel.type === ChannelType.TEXT);
    const audioChannels = server?.channels.filter((channel)=> channel.type === ChannelType.AUDIO);
    const videoChannels = server?.channels.filter((channel)=> channel.type === ChannelType.VIDEO);

    const members = server?.members.filter((member)=> member.profileId !== profile?.id);

    if(!server){
        return redirect("/");
    }

    //current user's role
    const role = server.members.find((member)=> member.profileId === profile?.id)?.role;

    return(
        <div className="flex flex-col h-full text-primary w-full bg-gray-100 dark:bg-[#2B2D31]">
            <ServerHeader server={server} role={role} />
        </div>
    )
}
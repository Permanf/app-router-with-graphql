'use server'
import { cookies } from 'next/headers'
 
async function SetAccessToken(data:string) {
  cookies().set({
    name: 'app_access_token',
    value: data,
    expires: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000), // 20 day
  })
}

async function SetRefreshToken(data:string) {
  cookies().set({
    name: 'app_refresh_token',
    value: data,
    expires: new Date(Date.now() + 20 * (3600 * 1000)), // 20 h
  })
}

async function SetCookie(name: string, data:string) {
  cookies().set({
    name: name,
    value: data,
    // expires: new Date(Date.now() + 3600 * 1000), // 1 hour
  })
}

function GetCookie(name:string) {
    const cookieStore = cookies();
    const appToken = cookieStore.get(name)
    return appToken;
}

async function DeleteCookie(name:string) {
  cookies().delete({name: name})
}

export {
    SetCookie, 
    GetCookie,
    DeleteCookie,
    SetAccessToken,
    SetRefreshToken
}
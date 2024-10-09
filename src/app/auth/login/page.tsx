"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "@/graphql/mutations/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { SetAccessToken, SetRefreshToken } from "@/utils/cookie";

export const description = "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

const schema = Yup.object().shape({
  email: Yup.string().required("Email required"),
  password: Yup.string().required("Password required"),
});

export default function LoginForm(){
  const router = useRouter();
  const { toast } = useToast()
  const { 
    handleSubmit, 
    // formState: { errors },  
    control
 } = useForm({ resolver: yupResolver(schema)});
 const [login] = useMutation(LOGIN_USER, {
    fetchPolicy: "network-only",
  });

  const onSubmit = async (form_data: any)=>{
    console.log(form_data);
    try {
        const { data } = await login({ variables: form_data });
        if (data) {
          toast({
            title: "Successfully",
          })
          const { access_token, refresh_token } = data.login;
          console.log(data,"---res")
          SetAccessToken(access_token)
          SetRefreshToken(refresh_token);
          // localStorage.setItem("access_token", access_token);
          // localStorage.setItem("refresh_token", refresh_token);
          router.push("/dashboard");
        }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ops, Something went wrong!",
        description: "Email or password incorrect",
      })
    }
  }
  
  return (
    <Card className="mx-auto max-w-sm mt-14">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form 
        className="grid gap-4"
        onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value, ref } }) => {
                  return (
                    <Input
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      ref={ref}
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      // error={errors?.email?.message}
                    />
                  );
                }}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value, ref } }) => {
                  return (
                    <Input
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      ref={ref}
                      id="password"
                      type="password"
                      required
                      // error={errors?.password?.message}
                    />
                  );
                }}
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

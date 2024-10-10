import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { PlusCircle } from "lucide-react"
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_CATEGORY } from "@/graphql/mutations/category"

const schema = Yup.object().shape({
    name: Yup.string().required("Name required"),
    image: Yup.string().required("Image required"),
  });

export function Form() {
    const { toast } = useToast()
    const { 
      handleSubmit, 
      // formState: { errors },  
      control
   } = useForm({ resolver: yupResolver(schema)});
   const [addCategory] = useMutation(CREATE_CATEGORY, {
      fetchPolicy: "network-only",
    });
  
    const onSubmit = async (form_data: any)=>{
      try {
          const { data } = await addCategory({ variables: form_data });
          if (data) {
            toast({
              title: "Successfully",
            })
            console.log(data,"---res");
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
    <>
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="h-7 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add category
            </span>
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create or Edit</DialogTitle>
          <DialogDescription>
            {`Make changes to your category here. Click save when you're done.`}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                Name
                </Label>
                <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value, ref } }) => {
                  return (
                    <Input
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      ref={ref}
                      id="name"
                      className="col-span-3" 
                      // error={errors?.email?.message}
                    />
                  );
                }}
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                Image-url
                </Label>
                <Controller
                control={control}
                name="image"
                render={({ field: { onChange, onBlur, value, ref } }) => {
                  return (
                    <Input
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      ref={ref}
                      id="image"
                      className="col-span-3" 
                      // error={errors?.email?.message}
                    />
                  );
                }}
                />
            </div>
            </div>
            <DialogFooter>
            <Button type="submit">Save changes</Button>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    </>
  )
}

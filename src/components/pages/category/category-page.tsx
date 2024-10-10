'use client';
import {
    File,
    ListFilter,
    MoreHorizontal,
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useQuery } from "@apollo/client";
import { LoadingComponent } from "@/components/ui/loading";
import { GET_ALL_CATEGORY } from "@/graphql/queries/category";
import { Form } from "./form";
  
export function CategoryPage() {
    const { loading, error, data } = useQuery(GET_ALL_CATEGORY);
    if (loading) return <LoadingComponent />;
    if (data?.categories?.length == 0) return <p className="flex justify-center mt-10">No data :)</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="flex items-center">
            <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-7 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                    </span>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                    Active
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                    Archived
                </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-7 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
                </span>
            </Button>
            <Form />
            </div>
        </div>
        <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
            <CardTitle>Categories</CardTitle>
            <CardDescription>
                Manage your category and view their sales performance.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">
                    Created at
                </TableHead>
                <TableHead>
                    <span className="sr-only">Actions</span>
                </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.categories?.map((item:any)=>{
                    return(
                        <TableRow key={item?.id}>
                            <TableCell className="hidden sm:table-cell">
                                <div className="w-14 h-14 bg-green-950 rounded-lg"></div>
                            </TableCell>
                            <TableCell className="font-medium">
                                {item.name}
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                2023-07-12 10:42 AM
                            </TableCell>
                            <TableCell>
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                    >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                            </TableRow>
                    )
                })}
                
            </TableBody>
            </Table>
        </CardContent>
        <CardFooter>
            <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>{data.categories?.length}</strong>{" "}
            products
            </div>
        </CardFooter>
        </Card>
      </main>
    )
}
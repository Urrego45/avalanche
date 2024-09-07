import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, Input} from "@nextui-org/react";
import { div } from "framer-motion/client";

export default function FormPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-10" >
      <Card className="w-96 h-[500px] p-6">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <form className="flex flex-col gap-4">
            <Input type="text" label="Nombre" css={{ width: "100%" }} />
            <Input type="text" label="Simbolo" css={{ width: "100%" }} />
            <Input type="text" label="Cantidad" css={{ width: "100%" }} />


            <Button className="items-center" color="primary">Enviar</Button>

          </form>
        </CardBody>
      </Card>
    </div>
    
  )
}


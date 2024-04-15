import { ImageOff } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type ImageLinkCardProps = {id:string,title:string, description:string,  slugAsParams:string, image:string}

const ImageLinkCard = ({id, description, title, slugAsParams, image}:ImageLinkCardProps) => {
  return (
    <Link
    key={id}
    href={slugAsParams.slice(0, -3)}
    className="flex flex-col gap-2 group"
  >
    <div className="border h-64 rounded-xl overflow-hidden  text-start flex-col group-hover:ring ring-primary transition-all">
      <div className="relative w-full h-full">
        {image === "none" ? (
          <ImageOff className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 text-muted-foreground"/>
        ) : (
          <Image
            src={image}
            alt="product carousell"
            fill
            className="object-cover"
          />
        )}
      </div>
    </div>
    <h1 className="group-hover:text-primary transition-colors">
      {title}
    </h1>
    <h1 className="text-muted-foreground transition-colors">
      {description}
    </h1>
  </Link>
  )
}

export default ImageLinkCard
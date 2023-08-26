'use client'

import { FC } from 'react'
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Package } from 'lucide-react';

interface PackageDropdownProps {
  
}

const PackageDropdown: FC<PackageDropdownProps> = ({}) => {
  return <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost"><Package className='mr-2'/>pnpm</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>pnpm</DropdownMenuItem>
    <DropdownMenuItem>npm</DropdownMenuItem>
    <DropdownMenuItem>yarn</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
}

export default PackageDropdown
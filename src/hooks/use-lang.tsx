import { usePathname } from 'next/navigation'
import React from 'react'

const useLang = () => {
    const pathname = usePathname()
    switch(pathname.split("/")[1]) {
        case "pl":
            return "pl"
        case "en":
            return "en"
        default:
            return "en"
    }
}

export default useLang
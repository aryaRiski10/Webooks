'use client'
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"

type BookImageProps = {
    src?: string | null
    title: string
    className?: string
    width?: number
    height?: number
    loading?: "lazy" | "eager"
    fallbackSrc?: string
    alt?: string
}

const DEFAULT_FALLBACK = "https://avatar.vercel.sh/shadcn1"

export default function BookImage({
    src,
    title,
    className,
    width = 400,
    height = 500,
    loading = "lazy",
    fallbackSrc = DEFAULT_FALLBACK,
    alt,
}: BookImageProps) {
    const resolvedSource = useMemo(() => {
        if (src && src.trim().length > 0) {
            return src
        }

        return fallbackSrc
    }, [src, fallbackSrc])

    const [imageSrc, setImageSrc] = useState(resolvedSource)

    useEffect(() => {
        setImageSrc(resolvedSource)
    }, [resolvedSource])

    return (
        <Image
            alt={alt || title}
            className={className}
            src={imageSrc}
            loading={loading}
            width={width}
            height={height}
            onError={() => {
                if (imageSrc !== fallbackSrc) {
                    setImageSrc(fallbackSrc)
                }
            }}
        />
    )
}
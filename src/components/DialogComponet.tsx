import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import LoadingButton from "./LoadingButton"
import type React from "react"

type Props = {
    children: React.ReactNode
    title?: string
    description?: string
    textButton: string,
    loading: boolean
    close?: string
    ok?: string
    icon?: React.ReactNode
    form?: string
}

export default function DialogComponet({ children, textButton, title, description, loading, close = 'Close', ok = "ok", icon, form }: Props) {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">{icon && icon}{textButton}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        {title && <DialogTitle>{title}</DialogTitle>}
                        {description && <DialogDescription>{description}</DialogDescription>}
                    </DialogHeader>
                    {children}
                    <DialogFooter>
                        <DialogClose asChild>
                            {close && <Button variant="outline">{close}</Button>}
                        </DialogClose>
                        {
                            ok &&
                                loading ?
                                <LoadingButton value={ok} />
                                :
                                <Button form={form} type="submit">{ok}</Button>

                        }
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}